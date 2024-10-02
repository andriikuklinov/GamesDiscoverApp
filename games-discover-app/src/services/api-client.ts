import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../hooks/useData";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '79501d089a9749069e002ffb2835775f'
    }
});

export default class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll(config: AxiosRequestConfig){
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(response => response.data);
    }
}