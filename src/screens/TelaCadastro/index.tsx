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
          source={require("../../assets/images/logo1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      <CadastroForm />
      </View>
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
    marginVertical: 26
  },
  image: {
    width: 90,
    height: 90,
    marginVertical: 10
  },
});
