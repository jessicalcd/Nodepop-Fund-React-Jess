import { client } from "../../api/client"
import type { Advert } from "./types";

const ADVERTS_URL = "/api/adverts"

export const getLatestAdverts = async () => {
    const url = `${ADVERTS_URL}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
    const response = await client.get<Advert[]>(url);
    return response.data;
};