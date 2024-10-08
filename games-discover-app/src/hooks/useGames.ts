import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { GameQuery } from "../store/store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

export default function useGames(gameQuery: GameQuery | null){
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: { 
                genres: gameQuery?.genreId, 
                parent_platforms: gameQuery?.platformId,
                ordering: gameQuery?.sortOrder,
                search: gameQuery?.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });
}