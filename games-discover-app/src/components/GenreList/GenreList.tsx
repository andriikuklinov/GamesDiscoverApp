import useData from "../../hooks/useData";
import useGenres, { Genre } from "../../hooks/useGenres";


export default function GenreList(){
    const {data} = useGenres();
    return <>
        {data.map(genre=> <li key={genre.id}>{genre.name}</li>)}
    </>
}