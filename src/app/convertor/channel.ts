import { RawProgram } from "../../infra/api-client/consts";
import { Channel } from "../../../proto/program_pb";

export const createChannel = (raw: RawProgram): Channel => {
  const channel = new Channel();
  channel.setId(parseInt(raw.ChID, 10));
  channel.setName(raw.ChName);
  channel.setGid(parseInt(raw.ChGID, 10));
  channel.setUrl(raw.ChURL);
  return channel;
};
