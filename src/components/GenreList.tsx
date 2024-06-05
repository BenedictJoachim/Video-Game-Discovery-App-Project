import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data, isLoading, error } = useGenre();

    return (
        <List>
            {data.map(genre => 
                <ListItem key={genre.id} marginY={4}>
                    <HStack >
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize="large">
                           {genre.name}
                        </Text>
                    </HStack>
                </ListItem> )}
        </List>
    )
}

export default GenreList