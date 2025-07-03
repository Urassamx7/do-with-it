export type ListingsResponse = ApiListingsResponseProps[];
export type PostListing = PostListingProps


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


interface PostListingProps {
    title: string
    price: string
    category: {
        value: string
    } | null
    description?: string | null,
    images: {
        name: string
        type: string,
        uri: string
    }[]
    location?: {
        latitude?: number
        longitude?: number
    }

}
