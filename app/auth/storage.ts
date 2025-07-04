import * as SecureStore from 'expo-secure-store'
import { jwtDecode } from 'jwt-decode'
import { UserProfile } from './auth-context'

const key = 'auth-token'
const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log('Error getting the auth token', error)
    }
}
const getUser = async () => {
    const token = await getToken()
    return token ? jwtDecode<UserProfile>(token) : null
}
const storeToken = async (authToken: string) => {
    try {
        SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log('Error storing the auth token')
    }
}
const removeToken = async () => {
    try {
        SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error while removing the auth token', error)
    }
}

export default {
    getUser, getToken, removeToken, storeToken
}