import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: { name: string }[];
}

const useGames = (
  selectedGenre: Genre | undefined,
  selectedPlatfomr: Platform | undefined
) => useData<Game>("/games", selectedGenre, selectedPlatfomr);
export default useGames;
