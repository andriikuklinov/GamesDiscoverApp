import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import ExpandableText from "../components/ExpandableText/ExpandableText";
import GameAttributes from "../components/GameAttributes/GameAttributes";
import GameTrailer from "../components/GameTrailer/GameTrailer";
import GameScreenshots from "../components/GameScreenshots/GameScreenshots";

export default function GameDetailPage(){
    //debugger;
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if(isLoading) return <Spinner />;
    if(error || !game) throw error;

    return <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
        <GridItem>
            <Heading>{(game as Game).name}</Heading>
            <ExpandableText>{(game as Game).description_raw}</ExpandableText>
            <GameAttributes game={game}/>
        </GridItem>
        <GridItem>
            <GameTrailer gameId={game.id}/>
            <GameScreenshots gameId={game.id}/>
        </GridItem>
    </SimpleGrid>
}