import React, { useEffect, useState, useRef  } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Formik  } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';



// Esquema de validação do formulário usando a biblioteca yup
const validationSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  phone: yup
    .string()
    .required('Telefone obrigatório')
    // Essa regex permite somente numeros e os caracteres especiais + ( ) -
    .matches(/^[0-9+() -]+$/, 'Telefone inválido'), 
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha obrigatória'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmação de senha obrigatória'),
});

export default function CadastroForm () {

    const navigation = useNavigation();


    // Usados para controlar a visibilidade da senha no formulário
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    // Referências para os campos de input do formulário
    const nameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const phoneRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);

    // Função para avançar para o próximo campo quando clicar no check do teclado
    const goToNextField = (nextFieldRef: any) => {
        nextFieldRef.current.focus();
    };
    
    // Irá exibir os dados do formulário no console e o toast
    const handleSubmitFormik = (values: any) => {
        console.log(values);
        Toast.show({
            type: 'success',
            text1: 'Conferir o console!',
            text2: 'Botão de menu volta para a tela de cadastro'
            
        });
        navigation.navigate('Home');
    };

    // Carrega a fonte definida no figma
    const [fontLoaded] = useFonts({
        Poppins_400Regular,
    });

    if(!fontLoaded) {
        return null;
    }

    return (
        <Formik
        initialValues={{ name: '', email: '', phone: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmitFormik}
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Nome {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholder="nome"
                        placeholderTextColor="#666666"
                        ref={nameRef}
                        returnKeyType="next" // Avançar para o próximo campo ao pressionar "Enter" (ou ícone de "check")
                        onSubmitEditing={() => goToNextField(emailRef)}
                    />

                    <Text style={styles.label}>E-mail {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="e-mail"
                        placeholderTextColor="#666666" 
                        ref={emailRef}
                        returnKeyType="next" // Avançar para o próximo campo ao pressionar "Enter" (ou ícone de "check")
                        onSubmitEditing={() => goToNextField(phoneRef)}
                    />

                    <Text style={styles.label}>Telefone {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        placeholder="telefone"
                        placeholderTextColor="#666666"
                        ref={phoneRef}
                        returnKeyType="next" // Avançar para o próximo campo ao pressionar "Enter" (ou ícone de "check")
                        onSubmitEditing={() => goToNextField(passwordRef)}
                    />

                    <Text style={styles.label}>Criar Senha {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}</Text>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="senha"
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#666666"
                            ref={passwordRef}
                            returnKeyType="next" // Avançar para o próximo campo ao pressionar "Enter" (ou ícone de "check")
                            onSubmitEditing={() => goToNextField(confirmPasswordRef)}
                        />
                        <TouchableOpacity style={styles.passwordIconContainer} onPress={togglePasswordVisibility}>
                            <Icon name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#666666" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Confirmar senha {touched.confirmPassword && errors.confirmPassword && (<Text style={styles.errorText}>{errors.confirmPassword}</Text>)}</Text>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            placeholder="senha"
                            secureTextEntry={!showConfirmPassword}
                            placeholderTextColor="#666666"
                            ref={confirmPasswordRef}
                            returnKeyType="next" // Avançar para o próximo campo ao pressionar "Enter" (ou ícone de "check")
                        />
                        <TouchableOpacity style={styles.passwordIconContainer} onPress={toggleConfirmPasswordVisibility}>
                            <Icon name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#666666" />
                        </TouchableOpacity>
                    </View>

                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={() => handleSubmit()}>
                        <Text style={styles.buttonText}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </Formik>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        marginBottom: 10,
        color: '#666666', 
    },
    input: {
        height: 48,
        borderColor: '#666666', 
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        color: '#666666', 
    },
    // Estilos específicos para os containers de input de password
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#666666',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 12,
        fontWeight: "400",
        color: '#666666',
      },
    passwordInput: {
        flex: 1,
        height: 48,
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
    },
    passwordIconContainer: {
        padding: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 10
    },
    buttonContainer: {
        marginTop: 20,
        width: 328,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#E1B12C',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 5,
      },
      buttonText: {
        color: '#F8F8F8',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
      },
  });