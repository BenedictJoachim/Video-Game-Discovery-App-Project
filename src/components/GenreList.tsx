import { HStack, List, ListItem, Image, Button, Spinner } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenre();

    if(error) return;
    if(isLoading) return <Spinner />;

    return (
        <List>
            {data.map(genre => 
                <ListItem key={genre.id} marginY={4}>
                    <HStack >
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button 
                            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                            onClick={() => onSelectGenre(genre)}
                            fontSize="large" variant="link"
                        >
                           {genre.name}
                        </Button>
                    </HStack>
                </ListItem> )}
        </List>
    )
}

export default GenreList