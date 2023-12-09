import uuid from 'react-uuid'

export interface IContrys{
  id: string;
  name: string;
  koreanNotation: string;
  clickState: boolean;
}

export const countrys : IContrys[] = [
  {
    id: uuid(),
    name: 'KOREA',
    koreanNotation: '대한민국',
    clickState: false,
  },
  {
    id: uuid(),
    name: 'CHINA',
    koreanNotation: '중국',
    clickState: false,

  },
  {
    id: uuid(),
    name: 'JAPAN',
    koreanNotation: '일본',
    clickState: false,
  },
  {
    id: uuid(),
    name: 'USA',
    koreanNotation: '미국',
    clickState: false,
  },
  {
    id: uuid(),
    name: 'NORTHKOREA',
    koreanNotation: '북한',
    clickState: false,
  },
  {
    id: uuid(),
    name: 'RUSSIA',
    koreanNotation: '러시아',
    clickState: false,
  },
  {
    id: uuid(),
    name: 'FRANCE',
    koreanNotation: '프랑스',
    clickState: false,
  },
  {
    id: uuid(),
    name: 'UK',
    koreanNotation: '영국',
    clickState: false,
  },
]