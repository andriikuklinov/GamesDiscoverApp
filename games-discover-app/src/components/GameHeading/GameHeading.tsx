import { Heading } from "@chakra-ui/react";
import usePlatform from "../../hooks/usePlatform";
import useGenre from "../../hooks/useGenre";
import useGameQueryStore from "../../store/store";

export default function GameHeading(){
    const genreId = useGameQueryStore(selector => selector.gameQuery.genreId);
    const genre = useGenre(genreId);

    const platformId = useGameQueryStore(selector => selector.gameQuery.platformId);
    const platform = usePlatform(platformId);
    
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return <>
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    </>
}