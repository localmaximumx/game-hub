import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string
  slug: string // small letters of name, if name: 'Action', then slug: 'action'
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
