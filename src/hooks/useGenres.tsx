import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string; // small letters of name, if name: 'Action', then slug: 'action'
}

const useGenres = () => ({ data: genre, isLoading: false, error: null });

export default useGenres;
