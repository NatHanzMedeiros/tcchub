import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable, Image, ScrollView, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const MONTARPERFIL1 = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  const [usuario, setUsuario] = useState('');

  const handleConfirmar = async () => {
    if (!nome || !bio ||!usuario) {
      Alert.alert('Erro', 'Preencha os campos obrigatórios.');
      return;
    }

    try {
      
      await AsyncStorage.setItem('NomePerfil', nome);
      await AsyncStorage.setItem('Bio', bio);
      await AsyncStorage.setItem('usuario', usuario);
     
      navigation.navigate('PERFIL', { nomePerfil: nome, bio: bio, usuario: usuario });

      navigation.navigate('TELAINICIALUSURIO');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };



  
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.montarPerfil}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("MONTARPERFIL")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
      </Pressable>
      <Text style={[styles.nomeapelido, styles.bioTypo]}>Nome/Apelido:</Text>
        <TextInput
          style={[styles.input, styles.nomeInput]}
          onChangeText={text => setNome(text)}
          value={nome}
          placeholder=""
          maxLength={25}
        />
        <Text style={[styles.bio, styles.bioTypo]}>Bio:</Text>
        <TextInput
          style={[styles.input, styles.bioInput]}
          onChangeText={text => setBio(text)}
          value={bio}
          placeholder=""
          maxLength={50}
          multiline
        />

<Text style={[styles.usuario, styles.bioTypo]}>Usuario:</Text>
        <TextInput
          style={[styles.input, styles.usuarioInput]}
          onChangeText={text => setUsuario(text)}
          value={usuario}
          placeholder=""
          maxLength={25}
        />
        <Pressable style={styles.confirmarButton} onPress={handleConfirmar}>
          <Text style={styles.confirmarButtonText}>CONFIRMAR PERFIL</Text>
        </Pressable>
   
      <View style={styles.montarPerfilInner} />
     
      <Text style={styles.perfil}>PERFIL</Text>
      <View style={styles.lineView} />
      <Text style={[styles.obrigatrio, styles.obrigatrioTypo]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio1, styles.obrigatrioTypo]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio2, styles.obrigatrioTypo]}>
        *obrigatório
      </Text>
     
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
  montarPerfil: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  nomeapelido: {
    fontSize: FontSize.size_l,
    marginBottom: 5,
  },
  bio: {
    fontSize: FontSize.size_l,
    marginBottom: 5,
    marginTop: 15,
  },
  usuario: {
    fontSize: FontSize.size_l,
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_9xs,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  nomeInput: {
    top:303,
    height:50,
    width:300,
    left:38,
    borderRadius:11,
    borderWidth: 1.3,
  },
  bioInput: {
    top:325,
    height:50,
    width:300,
    left:38,
    borderRadius:11,
    borderWidth: 1.3,
  },
  usuarioInput: {
    top:345,
    height:50,
    width:300,
    left:38,
    borderRadius:11,
    borderWidth: 1.3,
  },
  confirmarButton: {
    backgroundColor: Color.colorTan_100,
    borderRadius: Border.br_9xs,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    top:370,
    height:65,
    width:210,
    left: 88,
    borderRadius:15,
  },
  
  confirmarButtonText: {
    color: 'white',
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.ovo,
    textAlign: 'center',
    fontSize: 17,
    left: 0,
    top:8,
    
},

  bioTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },

  montarLayout: {
    height: 3,
    width: 267,
    position: "absolute",
  },
  obrigatrioTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 132,
    top: 117,
    width: 106,
    height: 103,
    position: "absolute",
  },
  nomeapelido: {
    top: 278,
    color: Color.colorTan_100,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: 54,
  },
  bio: {
    top: 367,
    color: Color.colorTan_100,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: 54,
  },
  montarPerfilChild: {
    top: 332,
    left: 52,
  },
  montarPerfilItem: {
    top: 422,
    left: 53,
  },

  
  perfil: {
    top: 49,
    left: 112,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 147,
    height: 54,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  lineView: {
    top: 90,
    left: 120,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    width: 130,
    height: 1,
    position: "absolute",
  },
  obrigatrio: {
    top: 286,
    left: 252,
  },
  obrigatrio1: {
    top: 374,
    left: 251,
  },

  obrigatrio2: {
    top: 457,
    left: 251,
  },

  usuario: {
    top: 448,
    left: 51,
    color: Color.colorTan_100,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  lineIcon: {
    top: 503,
    left: 54,
  },
  icon1: {
    overflow: "hidden",
  },
  chevronLeft: {
    left: 30,
    top: 25,
    width: 25,
    height: 25,
    position: "absolute",
  },
  montarPerfil: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default MONTARPERFIL1;
