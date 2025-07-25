import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from 'dayjs';
 
const prefix = 'cache'
const expiryInMinutes = 5
const store = async (key: string, value: any) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}

const isExpired = (item: any) => {
    const now = dayjs()
    const storedTime = dayjs(item.timestamp)
    const isExpired = now.diff(storedTime, 'minutes') > expiryInMinutes
    return isExpired
}

const get = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key)

        if (!value) return null

        const item = JSON.parse(value)

        if (isExpired(item)) {
            //CQS - Command Query Separation
            await AsyncStorage.removeItem(prefix + key)
            return null
        }
        return item.value

    } catch (error) {
        console.log(error)
    }
}
export default { store, get }