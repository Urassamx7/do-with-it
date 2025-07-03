import * as SecureStore from 'expo-secure-store'

const key = 'auth-token'
const storeToken = async (authToken: string) => {
    try {
        SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log('Error storing the auth token')
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log('Error getting the auth token', error)
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
    getToken, removeToken, storeToken
}