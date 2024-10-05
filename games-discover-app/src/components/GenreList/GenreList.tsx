import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/common";
import useGameQueryStore from "../../store/store";

export default function GenreList(){
    const selectedGenreId = useGameQueryStore(selector => selector.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(selector => selector.setGenreId);

    const { data, isLoading, error } = useGenres();

    if(error) return null;

    if(isLoading) return <Spinner />

    return <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
            {data?.results.map(genre=> <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image objectFit='cover' boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id == selectedGenreId ? 'bold' : 'normal'} onClick={()=>setSelectedGenreId(genre.id)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    </>
}