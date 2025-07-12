import client from "./client";
interface MessageProps {
    message: string
    listingId: string
}

const send = ({ message, listingId }: MessageProps) => client.post('/messages', {
    message, listingId
})

export default { send }