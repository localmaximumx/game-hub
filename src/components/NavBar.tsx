import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwittch from "./ColorModeSwittch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwittch />
    </HStack>
  );
};

export default NavBar;
