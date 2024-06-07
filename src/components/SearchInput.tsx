import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement marginLeft={5}>
                <BsSearch />
            </InputLeftElement>
            <Input 
                borderRadius={20} 
                placeholder="Search games..." 
                variant="filled"
                marginX={5} 
            />
        </InputGroup>
    )
}

export default SearchInput