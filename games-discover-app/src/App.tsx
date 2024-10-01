import { useState } from 'react'
import './App.css'
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector/SortSelector'
import GameHeading from './components/GameHeading/GameHeading'

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery);

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
          <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX='5px'>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre})}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery, platform})}/>
              </Box>
              <Box>
                <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})}/>
              </Box>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
