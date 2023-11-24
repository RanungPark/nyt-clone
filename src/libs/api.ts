import { IContrys } from './countrys';
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
const API_KEY = `zM9Z9uYAkeutNyyJeibb2jEjSGSIVX0g`;

interface IMultimedia {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
  crop_name: string;
}

interface IKeywords {
  name: string;
  value: string;
  rank: number;
  major: string;
}

interface IPerson {
  firstname: string;
  middlename: string;
  lastname: string;
  qualifier: string;
  title: string;
  role: string;
  organization: string;
  rank: number;
}

export interface IDocs {
  web_url: string;
  snippet: string;
  print_page: number;
  print_section: string;
  source: string;
  multimedia: IMultimedia[];
  headline: {
    main: string;
    kicker: string;
    content_kicker: string;
    print_headline: string;
    name: string;
    seo: string;
    sub: string;
  };
  keywords: IKeywords[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: {
    original: string;
    person: IPerson[];
    organization: string;
  };
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

export interface IResult {
  status: string;
  copyright: string;
  response: {
    docs :IDocs[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    }
  }
}

interface IFetchArticleSearch {
  page?: number;
  headline?: string;
  pub_date?: string;
  glocations?: string[];
}

export function fetchArticleSearch(params: IFetchArticleSearch = {}) {
  const { page, headline, pub_date, glocations } = params;

  const fqPubDate = pub_date && `pub_date:("${pub_date}")`;
  const fqHeadLine = headline && `headline:("${headline}")`;
  const fqGlocations = []

  if(!!glocations?.length) {
    for(let i = 0; i < glocations.length; i++) {
      fqGlocations[i] = `glocations.contains:("${glocations[i]}")`;
    }
  }

  const fqArray = []

  if(fqPubDate) {
    fqArray.push(fqPubDate)
  }

  if(fqHeadLine) {
    fqArray.push(fqHeadLine)
  }

  if(fqGlocations.length) {
    fqArray.push(...fqGlocations);
  }
  
  let fq = ''

  if(!!fqArray.join('')) {
    fq = fqArray.join(' AND ')
  }
 
  return fetch(`${BASE_URL}?sort=newest&page=${page}${fq ? `&fq=${fq}` : ''}&api-key=${API_KEY}`).then(response => response.json())
}