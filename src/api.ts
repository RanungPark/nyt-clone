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
  q?: string;
}

export function fetchArticleSearch() {
  return fetch(`${BASE_URL}?sort=newest&api-key=${API_KEY}`).then(response => response.json())
}