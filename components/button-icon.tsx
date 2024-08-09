import { Pressable, StyleSheet, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type ButtonIconProps = {
    title: string;
    onPress: () => void;
    icon: string;
}

export const ButtonIcon = ( { title, onPress, icon }: ButtonIconProps) => {
    return(
        <Pressable onPress={onPress} style={styles.button}>
                <FontAwesome 
                        size={28}
                        name={icon}
                        color='#FFF'
                    />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#164E85',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 48,
        width: 48,
        margin: 10
    },
});