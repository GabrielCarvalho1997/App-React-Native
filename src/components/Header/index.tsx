import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

export default function Header({ navigation }: any) {
  const route = useRoute();

  // Mostra o cabeçalho somente se for a tela "Home"
  const isHomeScreen = route.name === 'Home';
  if (!isHomeScreen) {
    return null;
  }

  return (
    <View style={headerStyles.header}>

      <TouchableOpacity
        style={headerStyles.menuIcon}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu-outline" size={40} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={headerStyles.imageContainer}>
        <Image
          source={require("../../assets/images/logo2.png")}
          style={headerStyles.image}
          resizeMode="contain"
        />
      </View>
      
      <Icon style={headerStyles.swapIcon} name="swap-horizontal-outline" size={40} color="#FFFFFF" />
    
    </View>
  );
}


const headerStyles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 8,
      backgroundColor: '#E1B12C',
      height: 102,
    },
    menuIcon: {
        marginBottom: 15
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12
    },
    image: {
        width: 52.3,
        height: 52.3,
    },
    swapIcon: {
        marginBottom: 15
    }
  });
