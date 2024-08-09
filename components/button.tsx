import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
}

export const Button = ( { title, onPress }: ButtonProps) => {
    return(
        <Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#164E85',
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center'
    }
});