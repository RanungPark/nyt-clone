const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
const API_KEY = `zM9Z9uYAkeutNyyJeibb2jEjSGSIVX0g`;

interface IFetchArticleSearch {
  page?: number;
  q?: string;
}

export function fetchArticleSearch({page, q}:IFetchArticleSearch) {
  return fetch(`${BASE_URL}?page=${page ? page : ''}&q=${q ? q : ''}&sort=newest&api-key=${API_KEY}`)
}