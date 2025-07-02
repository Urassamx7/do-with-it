import client from "./client";
import { ListingsResponse } from "./model";

const endpoint = '/listings'
const getListings = () => client.get<ListingsResponse>(endpoint)

export default {
    getListings
}
