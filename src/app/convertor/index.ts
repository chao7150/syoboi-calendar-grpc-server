import { RawProgram } from "../../infra/api-client/consts";
import { Program } from "../../../proto/program_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { createWork } from "./work";
import { createEpisode } from "./episode";
import { createChannel } from "./channel";

const createTimestamp = (seconds: number): Timestamp => {
  const timestamp = new Timestamp();
  timestamp.setSeconds(seconds);
  return timestamp;
};

export const convertor = (raw: RawProgram): Program => {
  const program = new Program();
  program.setId(parseInt(raw.PID, 10));
  program.setWork(createWork(raw));
  program.setChannel(createChannel(raw));
  program.setEpisode(createEpisode(raw));
  program.setStartTime(createTimestamp(parseInt(raw.StTime, 10)));
  program.setEndTime(createTimestamp(parseInt(raw.EdTime, 10)));
  program.setStartOffset(parseInt(raw.StOffset, 10));
  program.setDeleted(raw.Deleted !== "0");
  program.setWarn(raw.Warn !== "0");
  program.setRevision(parseInt(raw.Revision, 10));
  program.setLastUpdate(createTimestamp(parseInt(raw.LastUpdate, 10)));
  program.setAllday(raw.Allday !== "0");
  return program;
};
