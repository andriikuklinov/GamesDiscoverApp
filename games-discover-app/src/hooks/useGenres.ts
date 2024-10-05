import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genresStatic from "../services/genres-static";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

export default function useGenres(){
    //return useData<Genre>('/genres');
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.getAll({}),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: genresStatic
    })
}