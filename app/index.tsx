import { StyleSheet, View, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Card from '@/components/Card';

// import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
         <Card>
          <Text style={styles.hello}>
            Hellow World
          </Text>
         </Card>
        </View>
        <View style={styles.col}>
          <Card>
            <Entypo name="user" size={24} color="black" />
          </Card>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Card>
            <MaterialIcons name="devices" size={24} color="black" />
          </Card>
        </View>
        <View style={styles.col}>
          <Card>
            <Feather name="calendar" size={24} color="black" />
          </Card>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 26,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
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
