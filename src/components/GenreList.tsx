import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | undefined;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />; // not gonna be executed since we use local Genre names
  return (
    <List>
      <Heading marginBottom={5}> Genres </Heading>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={9}
              objectFit="cover" // set the img or genre more clear
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              fontSize="lg"
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
            >
              {" "}
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
