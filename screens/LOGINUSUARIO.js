import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView, TextInput, Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const LOGINUSUARIO = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('Email');
      const storedSenha = await AsyncStorage.getItem('Senha');

      if (storedEmail === email && storedSenha === senha) {
        navigation.navigate('MONTARPERFIL1');
      } else {
        Alert.alert('Erro', 'Email ou senha inválidos. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.loginUsuario}>
      <Text style={[styles.login, styles.loginLayout]}>Login</Text>
      <View style={styles.loginUsuarioChild} />
      <Text style={[styles.email, styles.emailTypo]}>Email:</Text>
      <Text style={[styles.senha, styles.emailTypo]}>Senha:</Text>
      <View style={[styles.loginUsuarioItem, styles.loginLayout]} />
      <Pressable
        style={styles.entrar}
        onPress={() => navigation.navigate("MONTARPERFIL1")}
      >
        <Text style={styles.entrar1}>ENTRAR</Text>
      </Pressable>
      <Image
        style={[styles.loginUsuarioInner, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("LOGINONG")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Text style={[styles.usurio, styles.ongTypo]}>Usuário</Text>
      <Text style={[styles.ong, styles.ongTypo]}>ONG</Text>

        <TextInput
          style={[styles.input]}
          placeholder=""
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
         <TextInput
          style={[styles.input]}
          placeholder=""
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
          <Pressable
          style={styles.entrar}
          onPress={handleLogin}
        >
          <Text style={styles.entrar1}>ENTRAR</Text>
        </Pressable>

    </View>
 </ScrollView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: 300,
    height: 45,
    borderColor: '#B1976F',
    borderWidth: 1.5,
    borderRadius: 12,
    marginBottom: 60,
    paddingHorizontal: 10,
    top: 310,
    left: 38,
  },
 
  entrar: {
    backgroundColor: '#B1976F',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  entrar1: {
    color: 'white',
    fontSize: 18,
    fontFamily: FontFamily.ovo,
  },
  
  loginLayout: {
    height: 55,
    position: "absolute",
  },
  emailTypo: {
    height: 25,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  wrapperLayout: {
    height: 15,
    width: 15,
    top: 207,
    position: "absolute",
  },
  ongTypo: {
    fontSize: FontSize.size_mini,
    top: 206,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 39,
    width: 171,
    borderRadius: Border.br_9xs,
    left: 59,
    position: "absolute",
  },
  login: {
    top: 62,
    right: 122,
    fontSize: FontSize.size_29xl,
    color: Color.colorTan_100,
    width: 118,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    height: 55,
  },
  loginUsuarioChild: {
    top: 117,
    left: 117,
    borderStyle: "solid",
    borderColor: Color.colorTan_100,
    borderTopWidth: 1,
    width: 157,
    height: 1,
    position: "absolute",
  },
  email: {
    top: 286,
    right: 269,
    width: 57,
  },
  senha: {
    top: 389,
    right: 262,
    width: 64,
  },
  loginUsuarioItem: {
    top: 533,
    left: 110,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTan_100,
    width: 169,
  },

  entrar: {
    left: 156,
    top: 549,
    position: "absolute",
  },
  loginUsuarioInner: {
    left: 72,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 257,
  },
  usurio: {
    left: 103,
  },
  ong: {
    left: 283,
  },
  rectangleIcon: {
    top: 311,
  },
  loginUsuarioChild1: {
    top: 414,
  },
  loginUsuario: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LOGINUSUARIO;
