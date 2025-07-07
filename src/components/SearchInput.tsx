import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (event: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search games..."
        variant="filled"
        borderRadius={20}
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
