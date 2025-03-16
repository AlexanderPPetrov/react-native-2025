import { StyleSheet, View, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
// import { Text, View } from '@/components/Themed';
import { searchMovie } from '@/api/movies';
import MovieItem from '@/components/MovieItem';
import AppButton from '@/components/ui/AppButton';
import Colors from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {

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

      <AppButton title='Проба 1' 
                 variant='secondary'
                 textStyle={{fontWeight: 700}}
                 buttonStyle={{ maxWidth: 120 }}
                 onPress={() => {console.log('pressed')}}/>

      <AppButton gradient={[Colors.light.primary, Colors.light.primaryGradient]} 
                 title='Проба 2' 
                 buttonStyle={{marginTop: 5, maxWidth: 200}}
                 onPress={() => {console.log('pressed')}}/>

      <AppButton icon={<AntDesign name="caretright" size={14} color="white" />}
                 title='Проба 1' 
                 gradient={[Colors.light.secondaryGradient, Colors.light.secondary]}
                 buttonStyle={{marginTop: 5, maxWidth: 300}}
                 onPress={() => {console.log('pressed')}}/>

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
