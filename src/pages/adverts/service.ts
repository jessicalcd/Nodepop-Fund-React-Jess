import { client } from "../../api/client";
import type { Advert } from "./types";
import type { AdvertsFilters } from "./types";
import type { CreateAdvertDto } from "./types";

const ADVERTS_URL = "/v1/adverts";

export const getLatestAdverts = async () => {
  const url = `${ADVERTS_URL}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  const response = await client.get<Advert[]>(url);
  return response.data;
};

export const getAdvert = async (advertId: string) => {
  const url = `${ADVERTS_URL}/${advertId}`;
  const response = await client.get<Advert>(url);
  return response.data;
};

export const createAdvert = async ({ name, price, sale, tags, photo }: CreateAdvertDto) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price.toString());
  formData.append("sale", String(sale));
  tags.forEach(tag => formData.append("tags", tag));
  if (photo) formData.append("photo", photo);

  const res = await client.post(ADVERTS_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getTags = async () => {
  const res = await client.get<string[]>(`${ADVERTS_URL}/tags`);
  return res.data;
};

export const getFilteredAdverts = async (filters: AdvertsFilters) => {
  const params = new URLSearchParams();
  if (filters.name) params.append("name", filters.name);
  if (filters.sale) params.append("sale", filters.sale);
  if (filters.tags.length) {
  params.append("tags", filters.tags.join(","));
}
  
  const res = await client.get<Advert[]>(`${ADVERTS_URL}?${params.toString()}`);
  return res.data;
};

export const deleteAdvert = async (advertId: string) => {
  await client.delete(`${ADVERTS_URL}/${advertId}`);
};