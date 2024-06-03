import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp";


const NavBAr = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60" />
        </HStack>
    )
}

export default NavBAr