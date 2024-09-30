import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import { Genre } from "../../hooks/useGenres";

interface Props{
    selectedGenre: Genre | null
}

export default function GameGrid({selectedGenre}: Props){
    const {data, error, isLoading}= useGames(selectedGenre);
    const skeletons = [1,2,3,4,5,6];

    return <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={3}>
            {isLoading && skeletons.map(skeleton=> <GameCardContainer>
                <GameCardSkeleton key={skeleton}/>
            </GameCardContainer>)}
            {data.map((game)=>{
                return <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
            })}
        </SimpleGrid>
    </>
}