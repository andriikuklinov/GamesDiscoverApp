import { useState } from 'react'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import { Platform } from './hooks/useGames'

function App() {
  const [selectedGenre, setSelectedgenre]=useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` //1024px
      }} templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}>
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX='5px'>
            <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedgenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=> setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
