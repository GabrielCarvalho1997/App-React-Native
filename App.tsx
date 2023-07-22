import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaCadastro from './src/screens/TelaCadastro';
import Home from './src/screens/Home/intex';
import Toast, {BaseToast} from 'react-native-toast-message';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ backgroundColor: '#28A745', borderLeftWidth: 0}}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: 'bold'
      }}
      text2Style={{
        color: 'black'
      }}
    />
  ),
}

export default function App() {
  return (
    <View style={styles.container}>
      <TelaCadastro />
      <Toast config={toastConfig} />
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
