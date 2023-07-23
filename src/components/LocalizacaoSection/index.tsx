import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";


export default function LocalizacaoSection() {
    return (
        <View>
            <Text style={styles.text}>Localização</Text>
            <Image
                source={require("../../assets/images/mapa.png")}
                style={styles.image}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Ativar o GPS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
      },
    text: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#222D5B',
        textAlign: 'left',
        marginLeft: 16,
        marginTop:16,
        marginBottom: 10
    },
    image: {
        width: '100%',
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    button: {
        width: 104,
        height: 33,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: '#E1B12C',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 3,
    },
    buttonText: {
        color: '#F8F8F8',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Poppins_500Medium',
    },
});