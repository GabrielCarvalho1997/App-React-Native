import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Dados dos cards do primeiro carrossel
const carouselImageData = [
    { id: 1, title: "Prato Pronto", image: require("../../assets/images/imagem1.png") },
    { id: 2, title: "Salão espaço Glamour", image: require("../../assets/images/imagem2.png") },
    { id: 3, title: "Espaço Inove", image: require("../../assets/images/imagem3.png") },
    { id: 4, title: "Studio Tattoo", image: require("../../assets/images/imagem4.png") },
    { id: 5, title: "Studio Spa", image: require("../../assets/images/imagem5.png") },
];

// Função para renderizar os itens do primeiro carrossel
const renderCarouselImageItem = ({ item}: any ) => (
    <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.carouselItemContainer}>
            <Image source={item.image} style={styles.carouselItemImage} />
            <Text style={styles.carouselItemTitle}>{item.title}</Text>
            <Text style={styles.carouselItemText}>Ver mais</Text>
        </View>
    </TouchableOpacity>
);


export default function ServicoSection() {
    return (
        <View>
            <Text style={styles.text}>Serviços e Reservas Próximos</Text>

        <FlatList
            data={carouselImageData}
            renderItem={renderCarouselImageItem}
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
    // Estilo do primeiro carousel
    carouselItemContainer: {
        width: wp('45%'), 
        height: hp('16%'), 
        borderRadius: 4.81,
        backgroundColor: '#f8f8f8',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: hp('2%'), 
        marginLeft: wp('2%'), 
        elevation: 3,
    },
    carouselItemImage: {
        width: wp('34%'), 
        height: hp('10%'), 
        borderRadius: 8,
        margin: wp('1%'), 
        alignSelf: 'center',
    },
    carouselItemTitle: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 12,
        color: '#222D5B',
        marginLeft: 16,
    },
    carouselItemText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 11,
        marginLeft: 16,
        marginTop: -5,
        color: "#E1B12C"
    },
});