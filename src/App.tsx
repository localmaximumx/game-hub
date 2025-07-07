import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import GameSort from "./components/GameSort";

export interface GameQuery {
  genre: Genre | undefined;
  platform: Platform | undefined;
  search: string;
  sort: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav''main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr", //first column 200px, the second takes the rest
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(search) => setGameQuery({ ...gameQuery, search })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box margin={5}>
            <HStack spacing={4}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <GameSort
                selectedSortOrder={gameQuery.sort}
                onSelectSortOrder={(sort) =>
                  setGameQuery({ ...gameQuery, sort })
                }
              />
            </HStack>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
