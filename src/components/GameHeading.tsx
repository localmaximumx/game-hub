import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery | undefined;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`; 
  return <Heading marginY={7}>{heading}</Heading>;
};

export default GameHeading;