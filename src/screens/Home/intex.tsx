import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import Header from '../../components/Header';
import {useFonts, Poppins_600SemiBold, Poppins_500Medium} from '@expo-google-fonts/poppins';
import Carousel from 'react-native-snap-carousel';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Home() {

    // Carrega a fonte definida no figma
    const [fontLoaded] = useFonts({
        Poppins_600SemiBold, Poppins_500Medium
    });

    if(!fontLoaded) {
        return null;
    }

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


    return (
        <View>
            <Header />
            <Text style={styles.text}>Localização</Text>
            <Image
                source={require("../../assets/images/mapa.png")}
                style={styles.image}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Ativar o GPS</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <Text style={styles.text}>Serviços e Reservas Próximos</Text>

            <SwiperFlatList
                data={carouselImageData}
                renderItem={renderCarouselImageItem}
                windowSize={wp('100%')}
                autoplay={false}
            />

            <View style={styles.divider} />

            <Text style={styles.text}>Explore</Text>

            <SwiperFlatList
                data={carouselIconData}
                renderItem={renderCarouseIconItem}
                windowSize={wp('100%')}
            />

            <View style={styles.bottomBar} />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    divider: {
        height: 2,
        width: '100%',
        backgroundColor: '#D9D9D9', 
    },

    // Estilo do primeiro carousel
    carouselItemContainer: {
        width: 156,
        height: 137,
        borderRadius: 4.81,
        backgroundColor: '#f8f8f8',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
        marginLeft: 20,
        elevation: 3,
    },
    carouselItemImage: {
        width: 131,
        height: 76.5,
        borderRadius: 8,
        margin: 10,
        alignSelf: 'center'
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

    // Estilo do segundo carousel
    carouselItemContainerSecond: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    carouselItemContainerIcon: {
        width: 108,
        height: 70,
        borderRadius: 4,
        backgroundColor: '#E1B12C',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 7.2,
        marginLeft: 20,
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

    // Barra no final da tela
    bottomBar: {
        height: 40,
        backgroundColor: '#E1B12C',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
  });