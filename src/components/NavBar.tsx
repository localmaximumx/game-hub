import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import logo from "../assets/logo.png";
import ColorModeSwittch from "./ColorModeSwittch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <InputGroup>
        <InputLeftElement>
          <BiSearch size={20} />
        </InputLeftElement>
        <Input placeholder="Search games..." borderRadius={50} type="text" />
      </InputGroup>
      <ColorModeSwittch />
    </HStack>
  );
};

export default NavBar;
