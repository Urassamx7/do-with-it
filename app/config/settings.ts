import Constants from "expo-constants"
import { constant } from "lodash"


const settings = {
    dev: {
        apiUrl: 'http://172.20.10.5:3333/api'
    },
    staging: {
        apiUrl: 'http://172.20.10.5:3333/api'
    },
    prod: {
        apiUrl: 'http://172.20.10.5:3333/api'
    }
}
const getCurrentSettings = () => {
    if (__DEV__) return settings.dev
    if (Constants.manifest.releaseChannel === 'staging') return settings.staging
    return settings.prod
}
export default getCurrentSettings()