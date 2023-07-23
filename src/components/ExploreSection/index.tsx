import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Dados dos cards do segundo carrossel
const carouselIconData = [
    { id: 1, title: "Pizzaria",image: require("../../assets/images/icone1.png") },
    { id: 2, title: "Restaurantes", image: require("../../assets/images/icone2.png") },
    { id: 3, title: "Esportes", image: require("../../assets/images/icone3.png") },
    { id: 4, title: "Salão", image: require("../../assets/images/icone4.png")  },
    { id: 5, title: "Barbearia",image: require("../../assets/images/icone5.png") },
    { id: 6, title: "Tatuagem",image: require("../../assets/images/icone6.png") },
    { id: 7, title: "Massagem", image: require("../../assets/images/icone7.png") },
    { id: 8, title: "Estética", image: require("../../assets/images/icone8.png") },
    { id: 9, title: "Ver todos", image: require("../../assets/images/icone9.png") },

];

// Função para renderizar os itens do segundo carrossel
const renderCarouseIconItem = ({ item}: any ) => (
    <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.carouselItemContainerSecond}>
            <View style={styles.carouselItemContainerIcon}>
                <Image source={item.image} style={styles.carouselItemIcon} />
            </View>
            <View>
                <Text style={styles.carouselItemTitleIcon}>{item.title}</Text>
            </View>
        </View>
    </TouchableOpacity>   
);

export default function ExplorarSection() {
    return (
        <View>
            <Text style={styles.text}>Explore</Text>

            <FlatList
                data={carouselIconData}
                renderItem={renderCarouseIconItem}
                windowSize={wp('100%')}
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                snapToAlignment={'start'} 
                decelerationRate={'fast'}
                contentContainerStyle={styles.carouselContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#222D5B',
        textAlign: 'left',
        marginLeft: 16,
        marginTop:16,
        marginBottom: 10
    },
    carouselContainer: {
        paddingHorizontal: wp('5%'),
        marginBottom: hp("1%")
    },

    // Estilo do segundo carousel
    carouselItemContainerSecond: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp('2%'),
    },
    carouselItemContainerIcon: {
        width: 108,
        height: 70,
        borderRadius: 4,
        backgroundColor: '#E1B12C',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 7.2,
        marginLeft: 10,
        elevation: 3,
    },
    carouselItemIcon: {
        width: 29,
        height: 29,
    },
    carouselItemTitleIcon: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        color: '#222D5B',
        marginLeft: 20,
    },
});