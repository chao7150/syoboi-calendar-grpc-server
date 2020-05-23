import grpc from "grpc";
import {
  ISyoboiCalendarServer,
  SyoboiCalendarService,
} from "../../proto/syoboi_calendar_grpc_pb";
import { SyoboiRequest, SyoboiResponse } from "../../proto/syoboi_calendar_pb";
import { fetch } from "../infra/api-client";
import { convertor } from "./convertor";

import { configure, getLogger } from "log4js";
import { RawSyoboiResponse } from "../infra/api-client/consts";

const logger = getLogger();
configure({
  appenders: {
    out: {
      type: "stdout",
    },
    app: {
      type: "file",
      filename: "application.log",
    },
  },
  categories: {
    default: {
      appenders: ["out", "app"],
      level: "debug",
    },
  },
});

let cache: {
  [key: string]: { timeStamp: number; response: RawSyoboiResponse };
} = {};
setInterval(() => {
  cache = {};
}, 10 * 60 * 1000);

const cachedFetch = async (
  request: SyoboiRequest,
): Promise<RawSyoboiResponse> => {
  const key = request.toString();
  if (key in cache) {
    logger.debug(`cache found: ${cache[key].timeStamp}`);
    return cache[key].response;
  }
  logger.debug(`api call`);
  cache[key] = { timeStamp: Date.now(), response: await fetch() };
  return cache[key].response;
};

class SyoboiCalendarServer implements ISyoboiCalendarServer {
  public async getPrograms(
    call: grpc.ServerUnaryCall<SyoboiRequest>,
    callback: grpc.sendUnaryData<SyoboiResponse>,
  ) {
    logger.debug(`request received: ${call.request.toString()}`);
    const rawSyoboiResponse = await cachedFetch(call.request);
    logger.debug(
      `API response: ${JSON.stringify(rawSyoboiResponse).slice(0, 80)}`,
    );
    const response = new SyoboiResponse();
    response.setProgramList(rawSyoboiResponse.items.map(convertor));
    callback(null, response);
  }
}

const server = new grpc.Server();
server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
server.addService(SyoboiCalendarService, new SyoboiCalendarServer());
logger.debug("server started");
server.start();
