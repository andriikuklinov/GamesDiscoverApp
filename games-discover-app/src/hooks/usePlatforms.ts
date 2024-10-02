import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

interface Platform{
    id: number;
    name: string;
    slug: string;
}
export default function usePlatforms(){
    //return useData<Platform>('/platforms/lists/parents');
    return useQuery({
        queryKey: ['platforms'],
        queryFn: ()=> apiClient.get<FetchResponse<Platform>>('/platforms').then(response=> response.data),
        staleTime: 24 * 60 * 60 * 1000, //24h
    })
}