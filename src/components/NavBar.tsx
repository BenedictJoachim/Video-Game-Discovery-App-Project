import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp";


const NavBAr = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="10" />
            <Text>Navbar</Text>
        </HStack>
    )
}

export default NavBAr