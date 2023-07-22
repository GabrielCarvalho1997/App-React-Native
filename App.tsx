import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaCadastro from './src/screens/TelaCadastro';
import Home from './src/screens/Home/intex';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaCadastro />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 26
  },
});
