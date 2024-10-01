import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import { Genre } from "../../hooks/useGenres";
import { GameQuery } from "../../App";

interface Props{
    gameQuery: GameQuery | null;
}

export default function GameGrid({gameQuery}: Props){
    const {data, error, isLoading}=useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6];

    return <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={6}>
            {isLoading && skeletons.map(skeleton=> <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
            </GameCardContainer>)}
            {data.map((game)=>{
                return <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
            })}
        </SimpleGrid>
    </>
}