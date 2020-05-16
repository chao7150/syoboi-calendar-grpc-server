import * as jspb from "google-protobuf";
import { Work, Category } from "../../../proto/program_pb";
import { RawProgram } from "../../infra/api-client/consts";

export const parseCategory = (rawCategory: string): Category => {
  switch (rawCategory) {
    case "1":
      return Category.ANIME;
    case "10":
      return Category.ANIME_RERUN;
    case "7":
      return Category.OVA;
    case "5":
      return Category.ANIME_RELATED;
    case "4":
      return Category.TOKUSATSU;
    case "8":
      return Category.MOVIE;
    case "3":
      return Category.TV;
    case "2":
      return Category.RADIO;
    case "6":
      return Category.MEMO;
    default:
      return Category.OTHERS;
  }
};

export const createUrlsMap = (
  map: jspb.Map<string, string>,
  rawUrls: string,
): void => {
  if (rawUrls === "") {
    return;
  }
  rawUrls.split("\n").forEach((line) => {
    const [url, owner] = line.split("\t");
    return map.set(owner, url);
  });
};

export const createWork = (raw: RawProgram): Work => {
  const work = new Work();
  work.setId(parseInt(raw.TID, 10));
  work.setTitle(raw.Title);
  work.setShortTitle(raw.ShortTitle);
  work.setCategory(parseCategory(raw.Cat));
  const urlMap = work.getUrlsMap();
  createUrlsMap(urlMap, raw.Urls);
  return work;
};
