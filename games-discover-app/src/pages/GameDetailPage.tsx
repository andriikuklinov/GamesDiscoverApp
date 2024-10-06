import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import ExpandableText from "../components/ExpandableText/ExpandableText";
import DefinitionItem from "../components/DefinitionItem/DefinitionItem";
import CriticScore from "../components/CriticScore/CriticScore";
import GameAttributes from "../components/GameAttributes/GameAttributes";
import GameTrailer from "../components/GameTrailer/GameTrailer";

export default function GameDetailPage(){
    //debugger;
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if(isLoading) return <Spinner />;
    if(error || !game) throw error;

    return <>
        <Heading>{(game as Game).name}</Heading>
        <ExpandableText>{(game as Game).description_raw}</ExpandableText>
        <GameAttributes game={game}/>
        <GameTrailer gameId={game.id}/>
    </>
}