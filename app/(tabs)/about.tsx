import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { ButtonIcon } from "../../components/button-icon";

export default function Screen() {
    const handleGitHub = () => {
        Linking.openURL('https://github.com/andersonrodrigues14')
    }

    const handleLinKedin = () => {
        Linking.openURL('https://www.linkedin.com/in/anderson-almeida-rodrigues-b30842186/')
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Desenvolvido Por:</Text>
                <Image 
                    style={styles.avatar}
                    source={{uri: 'https://avatars.githubusercontent.com/u/39199377?s=400&u=f6fdcbf41bc97acd9daa1ca45be33534ecd88804&v=4'}}
                />
                <Text style={styles.title}> Anderson Almeida Rodrigues </Text>
                <Text style={styles.description}> Desenvolvedor Web e Mobile!</Text>
                <View style={styles.areaButton}>
                    <ButtonIcon
                        title="GitHub"
                        onPress={handleGitHub}
                        icon="github" 
                    />
                    <ButtonIcon
                        title="Linkedin"
                        onPress={handleLinKedin}
                        icon="linkedin"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 20,
        padding: 30,
        
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#164E85'
    },
    title: {
        fontSize: 24,
        color: '#000',
        marginBottom: 20,
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        color: '#555555',
        textAlign: 'center',
        marginBottom: 70,
    },
    areaButton: {

        flexDirection: 'row'
    }
});
