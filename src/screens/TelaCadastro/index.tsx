import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CadastroForm from "../../components/CadastroForm";

export default function TelaCadastro() {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/logo2.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <CadastroForm />
    </KeyboardAwareScrollView>
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
    marginTop: 20,
  },
  image: {
    width: 113,
    height: 113,
  },
});
