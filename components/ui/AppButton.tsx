import { LinearGradient, LinearGradientProps } from "expo-linear-gradient"
import { TextStyle, Pressable, Text, View, StyleSheet, StyleProp, ViewStyle } from "react-native"
import { ColorName, useThemeColor } from "../Themed"

type Props = {
    variant?: ColorName,
    title: string,
    onPress: () => void,
    textStyle?: TextStyle,
    buttonStyle?: StyleProp<ViewStyle>
    gradient?: LinearGradientProps['colors'],
    horizontal?: boolean,
    icon?: React.ReactNode
}



function AppButton({ 
    variant = 'primary', 
    title, onPress, 
    buttonStyle = {},
    textStyle = {}, 
    gradient, 
    horizontal = true,
    icon = null,
 }: Props) {
    function getText() {
        return <View style={{alignItems: 'center', flexDirection: 'row'}}>
            { icon }
            <Text style={[styles.text, textStyle, icon ? {marginLeft: 5} : {}]}>
                { title }
            </Text>
        </View>
   
    }


    const backgroundColor = useThemeColor({}, variant)
   
   return <Pressable onPress={onPress}>
        { gradient ? <LinearGradient 
            style={[styles.button, buttonStyle]}
            colors={gradient}
            start={[0, 0]}
            end={horizontal? [1, 0] : [0, 1]}
        >
            {getText()}
        </LinearGradient> :
        <View style={[styles.button, { backgroundColor }, buttonStyle]}>
            {getText()}
        </View>
        
    }
        
    </Pressable>
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
    }
})
