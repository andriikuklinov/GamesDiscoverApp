import useGenres from "../../hooks/useGenres"

export default function GenreList(){
    const {genres} = useGenres();
    return <>
        {genres.map(genre=> <li key={genre.id}>{genre.name}</li>)}
    </>
}