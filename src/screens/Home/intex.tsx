import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from '../../components/Header';
import {useFonts, Poppins_600SemiBold, Poppins_500Medium} from '@expo-google-fonts/poppins';
import LocalizacaoSection from "../../components/LocalizacaoSection";
import ServicoSection from "../../components/ServicosSection";
import ExplorarSection from "../../components/ExploreSection";

export default function Home() {

    // Carrega a fonte definida no figma
    const [fontLoaded] = useFonts({
        Poppins_600SemiBold, Poppins_500Medium
    });

    if(!fontLoaded) {
        return null;
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Header />
                <LocalizacaoSection />
                <View style={styles.divider} />
                <ServicoSection />
                <View style={styles.divider} />
                <ExplorarSection />
                <View style={styles.bottomBar} />
            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    divider: {
        height: 2,
        width: '100%',
        backgroundColor: '#D9D9D9', 
    },
    // Barra no final da tela
    bottomBar: {
        height:40,
        backgroundColor: '#E1B12C',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
  });