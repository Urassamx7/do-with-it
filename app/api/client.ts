import { ApiOkResponse, ApiResponse, create } from 'apisauce'
import cache from '../utils/cache'
import { AxiosRequestConfig } from 'axios';
import authStorage from '../auth/storage';
import settings from '../config/settings';

const apiClient = create({
    baseURL: settings.apiUrl
})


apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken()
    if (!authToken) return
    request.headers = request.headers || {}
    request.headers['x-auth-token'] = authToken
})

const get = apiClient.get

apiClient.get = async function <T, U = T>(
    url: string,
    params?: {} | undefined,
    axiosConfig?: AxiosRequestConfig
): Promise<ApiResponse<T, U>> {
    const response = await get<T, U>(url, params, axiosConfig)

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data
        ? { ok: true, data } as ApiOkResponse<T>
        : response;
};


export default apiClient