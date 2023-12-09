import { atom } from "recoil";
import { countrys, IContrys } from "./libs/countrys";

export const isHomeScreenAtom = atom({
  key: "isHomeScreen",
  default: true,
});

export const HeadlineState = atom({
  key: "Headline",
  default: "",
});

export const PubDateState = atom({
  key: "PubDate",
  default: "",
});

export const CountrysState = atom({
  key: "Glocations",
  default: countrys,
});

export const SubmitState = atom({
  key: "Submit",
  default: {
    headline: "",
    pubDate: "",
    countrys: [] as IContrys[],
  },
});

export interface IScrap {
  web_url: string;
  headline: string;
  source: string;
  byline: string;
  formattedDate: string;
  _id: string;
  Star: boolean;
}

export const ScrapsState = atom<IScrap[]>({
  key: "scraps",
  default: (() => {
    const stroeScrap = localStorage.getItem("isScraps");
    if (stroeScrap) {
      const parseScrap = JSON.parse(stroeScrap);
      if (Array.isArray(parseScrap)) {
        return parseScrap;
      }
    }
    return [];
  })(),
});
