import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genresStatic from "../services/genres-static";

export interface Genre {
    id: number;
    name: string;
    image_background: string
}

export default function useGenres(){
    //return useData<Genre>('/genres');
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(response => response.data),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: { count: genresStatic.length, results: genresStatic}
    })
}