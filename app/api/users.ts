import client from "./client";

interface userPayloadProps {
    email: string
    name: string
    password: string
}

const register = (userPayload: userPayloadProps) => client.post('/users', userPayload)
export default { register }