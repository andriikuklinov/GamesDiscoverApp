import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { Platform } from "./usePlatforms";

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
    rating: number;
}

export default function useGames(gameQuery: GameQuery | null){
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
            params: { 
                genres: gameQuery?.genre?.id, 
                parent_platforms: gameQuery?.platform?.id,
                ordering: gameQuery?.sortOrder,
                search: gameQuery?.searchText
            }
        }).then(response=>response.data)
    });
}