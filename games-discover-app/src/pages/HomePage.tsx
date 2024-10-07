import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading/GameHeading";
import PlatformSelector from "../components/PlatformSelector/PlatformSelector";
import SortSelector from "../components/SortSelector/SortSelector";
import GameGrid from "../components/GameGrid/GameGrid";
import GenreList from "../components/GenreList/GenreList";

export default function HomePage(){
    return <>
    <Grid templateAreas={{
        base: `"main"`,
        lg: `"aside main"` //1024px
      }} templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}>
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
}