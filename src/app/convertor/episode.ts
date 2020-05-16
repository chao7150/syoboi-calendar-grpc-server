import { Episode } from "../../../proto/program_pb";
import { RawProgram } from "../../infra/api-client/consts";

export const createEpisode = (raw: RawProgram): Episode => {
  const episode = new Episode();
  episode.setCount(parseInt(raw.Count, 10) || 0);
  episode.setTitle(raw.SubTitle);
  episode.setComment(raw.ProgComment);
  return episode;
};
