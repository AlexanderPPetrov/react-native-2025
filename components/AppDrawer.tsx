import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useThemeColor } from './Themed'
import { DrawerScreen } from '@/app/_layout'
import AppButton from './ui/AppButton'
import { useNavigation } from 'expo-router'

type Props = {
    drawerScreens: DrawerScreen[]
}
function AppDrawer({ drawerScreens } : Props) {

    const startColor = useThemeColor({}, 'primary')
    const endColor = useThemeColor({}, 'primaryGradient')
    //TODO <any> workaround for types
    const navigation = useNavigation<any>()

    function onButtonPress(screen: string) {
        navigation.navigate(screen)
    }

    function getDrawerButtons() {
        return drawerScreens.map((screen) => {
            return <AppButton key={screen.name} 
                       variant='primaryGradient'
                       buttonStyle={style.drawerButton}
                       title={screen.options.drawerLabel} 
                       onPress={() => onButtonPress(screen.name)}></AppButton>
        })
    }
    return <LinearGradient 
            colors={[startColor, endColor]}
            start={[0, 0]}
            end={[0, 1]}
            style={style.gradient}
            >
                <View style={style.content}>
                    { getDrawerButtons()}
                </View>
    </LinearGradient>
}

export default AppDrawer

const style = StyleSheet.create({
    gradient: {
        flex: 1
    },
    content: {
        padding: 16
    },
    drawerButton: {
        marginBottom: 5,
    }
})