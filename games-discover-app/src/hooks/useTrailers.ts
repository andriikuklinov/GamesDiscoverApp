
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";
import { useQuery } from "@tanstack/react-query";

export default function useTrailers(gameId: number){
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: () => apiClient.getAll({})
    })
}