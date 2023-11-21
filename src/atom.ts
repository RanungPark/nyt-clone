import { atom } from 'recoil';

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

export const isGlocationsAtom = atom({
  key: 'isGlocations',
  default: [],
})