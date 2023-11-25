import { atom } from 'recoil';
import { countrys, IContrys } from './libs/countrys';

export const isHomeScreenAtom = atom({
  key: 'isHomeScreen',
  default: true,
})

export const isHeadlineAtom = atom({
  key: 'isHeadline',
  default: '',
})

export const isPubDateAtom = atom({
  key: 'isPubDate',
  default: '',
})

export const isCountrysAtom = atom({
  key: 'isGlocations',
  default: countrys,
})

export const isSubmitAtom = atom({
  key: 'isSubmit',
  default: {
    headline: '',
    pubDate: '',
    countrys: [] as IContrys[],
  },
})

interface IScrap {
  web_url: string;
  headline: string;
  source: string;
  byline: string;
  formattedDate: string;
  _id: string;
}

export const isScrapAtom = atom({
  key: 'isScrap',
  default: [] as IScrap[],
})