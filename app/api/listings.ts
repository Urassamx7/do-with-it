import client from "./client";
import { ListingsResponse, PostListing } from "./model";

const endpoint = '/listings'
const getListings = () => client.get<ListingsResponse>(endpoint)
const addListings = (listing: PostListing) => {
    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', String(listing.price))
    data.append('category', String(listing.category))
    listing.category.value


    if (listing.description) { data.append('description', String(listing.description)) }

    listing.images.forEach((image, index) => data.append('images', {
        name: `image${index}`,
        type: 'image/jpeg',
        uri: image
    } as any))

    if (listing.location) data.append('location', JSON.stringify(listing.location))

    return client.post(endpoint, data)
}

export default {
    getListings,
    addListings
}
