import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import React from "react";
import useGameQueryStore from "../../store/store";

export default function GameGrid(){
    const gameQuery = useGameQueryStore(selector => selector.gameQuery);
    const {
        data, 
        error, 
        isLoading, 
        isFetchingNextPage, 
        fetchNextPage, 
        hasNextPage }=useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6];

    return <Box padding='10px'>
        {error && <Text>{error.message}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
            {isLoading && skeletons.map(skeleton=> <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
            </GameCardContainer>)}
            { data?.pages.map((page, index)=>{
                    return <React.Fragment key={index}>
                    {page.results.map((game)=>{
                        return <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                    })}
                </React.Fragment>
            })}
        </SimpleGrid>
        { hasNextPage && <Button onClick={()=> fetchNextPage()} marginY={10}>{ isFetchingNextPage ? 'Loading...' : 'Load More' }</Button>}
    </Box>
}