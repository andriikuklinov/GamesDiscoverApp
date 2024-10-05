import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";

export default function GameDetailPage(){
    //debugger;
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if(isLoading) return <Spinner />;
    if(error || !game) throw error;

    return <>
        <Heading>{(game as Game).name}</Heading>
        <Text>{(game as Game).description_raw}</Text>
    </>
}