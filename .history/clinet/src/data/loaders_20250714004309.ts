import { fetchAPI } from '@/utils/fetch-api';
import { getStrapiURL } from '@/utils/get-strapi-url';

export async function getHomeOage(params:type) {
  const path = "/api/home-page"
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  return await fetchAPI("/api/home");
}