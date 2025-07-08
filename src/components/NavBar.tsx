import { HStack, Image } from "@chakra-ui/react";
import favicon from "../assets/favicon.svg";
import ColorModeSwittch from "./ColorModeSwittch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (event: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={favicon} boxSize="100px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwittch />
    </HStack>
  );
};

export default NavBar;
