import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';
import { useRoute } from '@react-navigation/native';

const PERFIL = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  const route = useRoute();
  

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        
        const usuario = await AsyncStorage.getItem('usuario');
        const nome = await AsyncStorage.getItem('NomePerfil');
        const bio = await AsyncStorage.getItem('Bio');

        
        if (usuario !== null) setUsuario(usuario);
        if (nome !== null) setNome(nome);
        if (bio !== null) setBio(bio);
      } catch (error) {
        console.error('Erro ao recuperar os dados do perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.perfil}>
    <Text style={styles.usuario}>{usuario}</Text>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={[styles.bio, { width: 200 }]} numberOfLines={2}>
      {bio}
    </Text>
      
      <Image
        style={styles.perfilChild}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <View style={[styles.perfilItem, styles.perfilPosition]} />
      <View style={[styles.perfilInner, styles.perfilPosition]} />
      <Image
        style={[styles.rectangleIcon, styles.perfilChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Image
        style={[styles.perfilChild1, styles.perfilChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Text style={[styles.seguidores, styles.doaesTypo]}>Seguidores</Text>
      <Text style={[styles.doaes, styles.doaesTypo]}>Doações</Text>
      <Text style={[styles.text, styles.textTypo1]}>244</Text>
      <Text style={[styles.text1, styles.textTypo1]}>4</Text>
      <Text style={[styles.editar, styles.textTypo1]}>Editar</Text>
      <Pressable
        style={styles.suasDoaes}
        onPress={() => navigation.navigate("PerfilSuasDoaes2")}
      >
        <Text style={styles.textTypo1}>Suas doações</Text>
      </Pressable>
      <Pressable
        style={styles.topDoaes}
        onPress={() => navigation.navigate("PerfilSuasDoaes2")}
      >
        <Text style={styles.textTypo1}>Top doações</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.perfilChild2Position]} />
      <View style={[styles.perfilChild2, styles.perfilChild2Position]} />
      <Text style={[styles.text2, styles.textTypo]}>7,5%</Text>
      <Text style={[styles.r400000, styles.r400000Layout]}>R$ 4000,00</Text>
      <Text style={[styles.raoParaOng, styles.paraTypo]}>
        Ração para Ong Pet_Esperança
      </Text>
      <Image
        style={[styles.image11Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
      <Text style={[styles.de, styles.deLayout]}>de</Text>
      <View style={[styles.perfilChild3, styles.perfilChildPosition]} />
      <View style={[styles.perfilChild4, styles.perfilChildPosition]} />
      <Text style={[styles.text3, styles.textTypo]}>35%</Text>
      <Text style={[styles.r200000, styles.de1Typo]}>R$ 2000,00</Text>
      <Text style={[styles.cirurgiaParaO, styles.paraTypo]}>
        Cirurgia para o Jake
      </Text>
      <Image
        style={[styles.image12Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.perfilChild5, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r70000, styles.r30000Typo]}>R$ 700,00</Text>
      <Text style={[styles.de1, styles.de1Typo]}>de</Text>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("Doaes2")}
      >
        <Text style={styles.text4}>+</Text>
      </Pressable>
      <Pressable
        style={[styles.pressable1, styles.pressablePosition]}
        onPress={() => navigation.navigate("Doaes21")}
      >
        <Text style={styles.text4}>+</Text>
      </Pressable>
      <View style={styles.perfilChild6} />
      <Pressable
        style={styles.incioParent}
        onPress={() => navigation.navigate("TELAINICIALUSURIO")}
      >
        <Text style={[styles.incio, styles.incioTypo]}>Início</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/3.png")}
        />
      </Pressable>
    </View>
</ScrollView>  );
};

const styles = StyleSheet.create({
  usuario: {
    fontSize: 18,
    marginBottom: 10,
    top: 70,
    left: 56,
    fontWeight: 'bold', 
    },

  nome: {
    fontSize: 18,
    fontFamily: FontFamily.ovo,
    marginBottom: 10,
    top:175,
    left:63,
  },
  bio: {
    fontSize: 12,
    lineHeight: 22,
    color: '#505050',
    top:163,
    left:62,
    fontFamily: FontFamily.ovo,
  },
  

  perfilPosition: {
    height: 288,
    top: 348,
    width: 390,
    left: 0,
    position: "absolute",
  },
  perfilChild1Layout: {
    height: 26,
    width: 146,
    borderRadius: Border.br_9xs,
    left: 221,
    position: "absolute",
  },
  falaSobreAdooLayout: {
    width: 165,
    left: 56,
  },
  doaesTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
  },
  perfilChild2Position: {
    height: 10,
    borderRadius: Border.br_8xs,
    left: 67,
    top: 438,
    position: "absolute",
  },
  textTypo: {
    height: 12,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  r400000Layout: {
    height: 14,
    width: 88,
    left: 207,
  },
  paraTypo: {
    color: Color.colorTan_200,
    left: 78,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iconLayout: {
    height: 33,
    width: 34,
    left: 41,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 30,
    width: 32,
    left: 42,
    position: "absolute",
  },
  r30000Typo: {
    width: 84,
    color: Color.colorLimegreen_200,
    left: 84,
    height: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  deLayout: {
    height: 13,
    width: 16,
    left: 177,
  },
  perfilChildPosition: {
    top: 553,
    height: 10,
    borderRadius: Border.br_8xs,
    left: 67,
    position: "absolute",
  },
  de1Typo: {
    top: 574,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  pressablePosition: {
    left: 242,
    position: "absolute",
  },
  incioTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  perfilChild: {
    top: 98,
    width: 106,
    height: 103,
    left: 38,
    position: "absolute",
  },
  perfilItem: {
    backgroundColor: "#cecece",
  },
  perfilInner: {
    borderRadius: 1,
    backgroundColor: Color.colorWhite,
  },
  rectangleIcon: {
    top: 130,
  },
  perfilChild1: {
    top: 162,
  },

  meuObjetivoAqui: {
    top: 230,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  falaSobreAdoo: {
    top: 263,
    color: "#515151",
    width: 165,
    left: 56,
  },
  seguidores: {
    top: 310,
    left: 79,
    color: Color.colorBlack,
  },
  doaes: {
    top: 311,
    left: 150,
    color: Color.colorBlack,
  },
  text: {
    top: 307,
    left: 48,
    position: "absolute",
  },
  text1: {
    top: 309,
    left: 137,
    position: "absolute",
  },
  editar: {
    top: 134,
    left: 273,
    position: "absolute",
  },
  suasDoaes: {
    left: 248,
    top: 166,
    position: "absolute",
  },
  topDoaes: {
    left: 45,
    top: 356,
    position: "absolute",
  },
  rectangleView: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilChild2: {
    width: 29,
    backgroundColor: Color.colorLimegreen_100,
  },
  text2: {
    top: 436,
    left: 34,
    width: 38,
  },
  r400000: {
    top: 459,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  raoParaOng: {
    top: 402,
  },
  image11Icon: {
    top: 394,
  },
  ellipseIcon: {
    top: 396,
  },
  r30000: {
    top: 458,
  },
  de: {
    top: 459,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  perfilChild3: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilChild4: {
    width: 109,
    backgroundColor: Color.colorLimegreen_100,
  },
  text3: {
    top: 551,
    width: 26,
    left: 38,
  },
  r200000: {
    height: 14,
    width: 88,
    left: 207,
  },
  cirurgiaParaO: {
    top: 517,
  },
  image12Icon: {
    top: 509,
  },
  perfilChild5: {
    top: 511,
  },
  r70000: {
    top: 573,
  },
  de1: {
    height: 13,
    width: 16,
    left: 177,
  },
  text4: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    width: 121,
    height: 21,
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
  },
  pressable: {
    top: 389,
  },
  pressable1: {
    top: 510,
  },
  perfilChild6: {
    top: 785,
    left: -2,
    backgroundColor: Color.colorPeru_300,
    height: 58,
    width: 390,
    position: "absolute",
  },
  incio: {
    top: 24,
    left: 0,
    fontSize: FontSize.size_xs,
  },
  icon: {
    top: 0,
    left: 2,
    width: 24,
    overflow: "hidden",
    height: 21,
    position: "absolute",
  },
  incioParent: {
    top: 799,
    left: 178,
    width: 30,
    height: 38,
    position: "absolute",
  },
  perfil: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PERFIL;
