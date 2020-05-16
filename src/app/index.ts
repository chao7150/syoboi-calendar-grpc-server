import grpc from "grpc";
import {
  ISyoboiCalendarServer,
  SyoboiCalendarService,
} from "../../proto/syoboi_calendar_grpc_pb";
import { SyoboiRequest, SyoboiResponse } from "../../proto/syoboi_calendar_pb";
import { fetch } from "../infra/api-client";
import { convertor } from "./convertor";

class SyoboiCalendarServer implements ISyoboiCalendarServer {
  public async getPrograms(
    call: grpc.ServerUnaryCall<SyoboiRequest>,
    callback: grpc.sendUnaryData<SyoboiResponse>,
  ) {
    console.log(call.request.toString());
    const rawSyoboiResponse = await fetch();
    const response = new SyoboiResponse();
    response.setProgramList(rawSyoboiResponse.items.map(convertor));
    console.log(response);
    callback(null, response);
  }
}

const server = new grpc.Server();
server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
server.addService(SyoboiCalendarService, new SyoboiCalendarServer());
server.start();
