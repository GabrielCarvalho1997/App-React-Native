import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaCadastro from './src/screens/TelaCadastro';
import Home from './src/screens/Home/intex';
import Toast, { BaseToast } from 'react-native-toast-message';
import Header from './src/components/Header';


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

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TelaCadastro"
            component={TelaCadastro}
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
