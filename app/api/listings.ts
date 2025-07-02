import client from "./client";


export type ListingsResponse = ApiListingsResponseProps[];


interface ApiListingsResponseProps {
    id: number;
    title: string;
    images: Image[];
    price: number;
    categoryId: number;
    userId: number;
    location: Location;
}

interface Image {
    url: string;
    thumbnailUrl: string;
}

interface Location {
    latitude: number;
    longitude: number;
}






const endpoint = '/listings'
const getListings = () => client.get<ListingsResponse>(endpoint)

export default {
    getListings
}
