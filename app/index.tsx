import { StyleSheet, View, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
// import { Text, View } from '@/components/Themed';
import { searchMovie } from '@/api/movies';
import MovieItem from '@/components/MovieItem';
export default function HomeScreen() {

  //TODO add example for i18n
  //TODO provide an example for Reusable Button component
  //TODO provide custom drawer component

  const { data, isLoading } = useQuery({
    queryKey: ['searchmovie'],
    queryFn: () => searchMovie('The Witcher')
  })

  const movies = data?.data?.results ?? []

  const getMovies = () => {
    return movies.map((movie) => {
      return <MovieItem style={styles.movieItem}
                        key={movie.id} 
                        movie={movie}/>
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
         { getMovies()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  movieItem: { 
    width: '46%', 
    height: 260, 
    margin: '2%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 26,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flex: 1,
    padding: 8,
  },
  hello: {
    color: "#000",
    fontSize: 18,
    fontWeight: 700
  }
 
});
