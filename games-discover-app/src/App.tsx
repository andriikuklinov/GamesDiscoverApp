import './App.css'
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import SortSelector from './components/SortSelector/SortSelector'
import GameHeading from './components/GameHeading/GameHeading'

function App() {
  

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
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector/>
              </Box>
              <Box>
                <SortSelector/>
              </Box>
            </Flex>
          </Box>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
