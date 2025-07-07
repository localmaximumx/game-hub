import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import type { Platform } from "../hooks/useGames";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  selectedPlatform: Platform | undefined;
  onSelectedPlatform: (platform: Platform | undefined) => void;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
            value={platform.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
