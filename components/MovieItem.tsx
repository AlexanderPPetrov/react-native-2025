import { Movie } from "@/types"
import { Text, StyleProp, ViewStyle } from "react-native"
import Card from "./ui/Card"
import { Image } from "expo-image"
import { posterBaseUrl } from "@/api/constants"

type Props = {
    movie: Movie,
    style: StyleProp<ViewStyle>
}

function MovieItem({ movie, style }: Props) {
    const imageSource = posterBaseUrl + movie.poster_path
    return <Card style={style}>
        <Image source={imageSource} style={{ height: 170}}/>
        <Text style={{marginTop: 5}}>
            {movie.title}
        </Text>
    </Card>
}

export default MovieItem
