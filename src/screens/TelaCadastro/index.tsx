import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import CadastroForm from "../../components/CadastroForm";

export default function TelaCadastro() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      <CadastroForm />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 26
  },
  image: {
    width: 90,
    height: 90,
    marginVertical: 10
  },
});
