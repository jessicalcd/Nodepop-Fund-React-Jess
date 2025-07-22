import { client } from "../../api/client"
import type { Advert } from "./types";

const ADVERTS_URL = "/api/adverts"

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

export const createAdvert = async ({ name, price, sale, tags, photo }) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price.toString());
  formData.append("sale", String(sale));
  tags.forEach(tag => formData.append("tags", tag));
  if (photo) formData.append("photo", photo);

  const res = await client.post("/adverts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getTags = async () => {
  const res = await client.get<string[]>("/adverts/tags");
  return res.data;
};

