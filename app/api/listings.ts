import client from "./client";
import { ListingsResponse, PostListing } from "./model";

const endpoint = '/listings'
const getListings = () => client.get<ListingsResponse>(endpoint)

const addListings = (listing: PostListing, onUploadProgress: (progress: number) => void
) => {
    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', String(listing.price))
    data.append('category', String(listing.category))
    if (listing.category) listing.category.value


    if (listing.description) { data.append('description', String(listing.description)) }

    listing.images.forEach((image, index) => data.append('images', {
        name: `image${index}`,
        type: 'image/jpeg',
        uri: image
    } as any))

    if (listing.location) data.append('location', JSON.stringify(listing.location))



    return client.post(
        endpoint,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
                const progress = progressEvent.loaded / (progressEvent.total ?? 1);
                onUploadProgress(progress);
            },
        })
}

export default {
    getListings,
    addListings
}
