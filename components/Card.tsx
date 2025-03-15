import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
type Props = {
    children: React.ReactNode
}
function Card({ children }: Props) {
    return <LinearGradient
                colors={['#fff', '#efefef']}
                style={styles.gradient}>
                    <View style={styles.card}>
                        { children }
                    </View>
        </LinearGradient>
       
}
export default Card
const styles = StyleSheet.create({
    gradient: {
        height: '100%',
        width: '100%',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    card: {
        paddingHorizontal: 12,
        paddingVertical: 6,
    }
})