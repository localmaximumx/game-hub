import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sort: string) => void;
}

const GameSort = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortBy = [
    { id: 1, label: "Relevance", value: "" },
    { id: 2, label: "Date added", value: "-added" },
    { id: 3, label: "Name", value: "name" },
    { id: 4, label: "Release date", value: "-released" },
    { id: 5, label: "Popularity", value: "-metacritic" },
    { id: 6, label: "Average rating", value: "-rating" },
  ];
  const currentSortOrder = sortBy.find((m) => m.value === selectedSortOrder);

  return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Order By: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortBy.map((m) => (
            <MenuItem key={m.id} onClick={() => onSelectSortOrder(m.value)}>
              {" "}
              {m.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
  );
};

export default GameSort;
