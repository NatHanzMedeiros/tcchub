import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView, TextInput,  Button, useState  } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const Cadastro = () => {
  const navigation = useNavigation();
  const [nome, setNome] = React.useState('');
  const [dataNascimento, setDataNascimento] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');
  const [error, setError] = React.useState('');

  const handleCadastro = async () => {
   
  
    if (!nome || !dataNascimento || !cpf || !email || !senha || senha.length < 8 || email.indexOf('@') === -1 || 
    cpf.length !== 11 || dataNascimento.length !== 8 || !/^[a-zA-Z\s]+$/.test(nome)|| senha !== confirmarSenha )  {
      Alert.alert('Erro', 'Por favor, preencha os campos corretamente.');
      return;
    }

    try {
      
      const cpfExists = await AsyncStorage.getItem('CPF');
      const emailExists = await AsyncStorage.getItem('Email');
  
      if (cpfExists === cpf) {
        Alert.alert('Erro', 'Já existe uma conta registrada com esse CPF.');
        return;
      }
  
      if (emailExists === email) {
        Alert.alert('Erro', 'Já existe uma conta registrada com esse Email.');
        return;
      }
  
      
      await AsyncStorage.setItem('Nome', nome);
      await AsyncStorage.setItem('DataNascimento', dataNascimento);
      await AsyncStorage.setItem('CPF', cpf);
      await AsyncStorage.setItem('Email', email);
      await AsyncStorage.setItem('Senha', senha);
  
      
      navigation.navigate('LOGINUSUARIO');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.cadastro}>
        <Text style={[styles.cadastro1, styles.usurioTypo]}>Cadastro</Text>
        <Image
          style={styles.cadastroChild}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={(text) => setDataNascimento(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={(text) => setCpf(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={(text) => setConfirmarSenha(text)}
        secureTextEntry
      />

       {error !== '' && <Text style={styles.errorText}>{error}</Text>}

        <View style={styles.rectangleView} />
        <Text style={styles.nomeCompleto}>Nome completo:</Text>
        <Text style={[styles.usurio, styles.usurioTypo]}>USUÁRIO</Text>
        <Text style={[styles.email, styles.senhaTypo]}>Email:</Text>
        <Text
          style={[styles.criarSenha, styles.senhaTypo]}
        >{`Criar senha: `}</Text>
        <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
          Confirmar senha:
        </Text>
        <Text style={[styles.dataDeNascimento, styles.senhaTypo]}>
          Data de nascimento:
        </Text>
        <Text style={[styles.cpf, styles.senhaTypo]}>CPF:</Text>
        
        <Image
          style={[styles.ellipseIcon, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("CADASTROONG")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </Pressable>
        <Text style={[styles.usurio1, styles.ongTypo]}>Usuário</Text>
        <Text style={[styles.ong, styles.ongTypo]}>ONG</Text>
      </View>

{/* Botão de Cadastro */}
<View style={styles.wrapperLayout}>
      <Pressable
        style={styles.botaoCadastro}
        onPress={handleCadastro}
      >
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </Pressable>
    </View>


    </ScrollView>
  );
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
    marginBottom: 43,
    paddingHorizontal: 10,
    top: 265,
    left: 35,
  },
  botaoCadastro: {
    backgroundColor: '#B1976F',
    borderRadius: 15,
    left: 90,
    marginTop: 600,
    width: 200, 
    height: 60,
  },
  textoBotao: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 15,
    fontFamily: FontFamily.ovo,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    top: 400,
  },
  
  
  usurioTypo: {
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  cadastroLayout: {
    height: 37,
    borderRadius: Border.br_9xs,
    width: 295,
    left: 47,
    position: "absolute",
  },
  cadastroChildLayout: {
    left: 46,
    height: 37,
    width: 295,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },


  senhaTypo: {
    transform: [
      {
        rotate: "0.4deg",
      },
    ],
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    left: 47,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  wrapperLayout: {
    height: 15,
    width: 15,
    top: 192,
    position: "absolute",
  },
  ongTypo: {
    fontSize: FontSize.size_mini,
    top: 191,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  cadastro1: {
    top: 71,
    fontSize: FontSize.size_29xl,
    width: 197,
    height: 52,
    left: 96,
  },
  cadastroChild: {
    top: 119,
    width: 196,
    height: 1,
    left: 96,
    position: "absolute",
  },
  nome: {
    top: 695,
    borderWidth: 1.5, 
    borderColor: Color.colorGray_200, 
    borderRadius: 8, 
    paddingHorizontal: 10, 
    
  },
  data: {
    top: 612,
    borderWidth: 1.5, 
    borderColor: Color.colorGray_200, 
    borderRadius: 8, 
    paddingHorizontal: 10, 
  },
  cpf1: {
    top: 347,
    borderWidth: 1.5, 
    borderColor: Color.colorGray_200, 
    borderRadius: 8, 
    paddingHorizontal: 10, 
  },
  email1: {
    top: 258,
    borderWidth: 1.5, 
    borderColor: Color.colorGray_200, 
    borderRadius: 8, 
    paddingHorizontal: 10, 
  },
  criarsenha2: {
    top: 435,
    borderWidth: 1.5, 
    borderColor: Color.colorGray_200, 
    borderRadius: 8, 
    paddingHorizontal: 10, 
  },
  confirsenha: {
    top: 522,
    borderWidth: 1.5, 
    borderColor: Color.colorGray_200, 
    borderRadius: 8, 
    paddingHorizontal: 10, 
  },

  nomeCompleto: {
    top: 236,
    width: 173,
    height: 50,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    left: 47,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  usurio: {
    top: 123,
    left: 167,
    fontSize: FontSize.size_xs,
  },
  email: {
    top: 499,
    width: 74,
    height: 22,
  },
  criarSenha: {
    top: 589,
    width: 147,
    height: 18,
  },
  confirmarSenha: {
    top: 672,
    width: 229,
    height: 18,
  },
  dataDeNascimento: {
    top: 324,
    width: 190,
    height: 18,
  },
  cpf: {
    top: 413,
    width: 136,
    height: 18,
  },

 
  ellipseIcon: {
    left: 72,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 257,
  },
  usurio1: {
    left: 103,
  },
  ong: {
    left: 283,
  },
  cadastro: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 1038,
    overflow: "hidden",
    width: "100%",
  },
});



export default Cadastro;
