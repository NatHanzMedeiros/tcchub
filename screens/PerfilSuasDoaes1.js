import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const PerfilSuasDoaes1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.perfilsuasDoaes}>
      <View style={[styles.perfilsuasDoaesChild, styles.perfilsuasPosition]} />
      <View style={[styles.perfilsuasDoaesItem, styles.perfilsuasPosition]} />
      <Text style={[styles.text, styles.textTypo]}>1%</Text>
      <Text style={[styles.r1000000, styles.r355000Layout]}>R$ 10000,00</Text>
      <Text style={[styles.tratamendoDoSam, styles.tratamendoDoSamTypo]}>
        Tratamendo do Sam.
      </Text>
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.perfilsuasDoaesInner, styles.perfilsuasChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r10000, styles.r10000Typo]}>R$ 100,00</Text>
      <Text style={[styles.de, styles.deLayout]}>de</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.perfilsuasDoaesChild1, styles.rectangleViewPosition]}
      />
      <Text style={[styles.text1, styles.textTypo]}>6,20%</Text>
      <Text style={[styles.r355000, styles.de1Typo]}>R$ 3550,00</Text>
      <Text style={[styles.vacinaoParaDogs, styles.tratamendoDoSamTypo]}>
        Vacinação para dogs de rua.
      </Text>
      <Image
        style={[styles.image8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.perfilsuasChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r22000, styles.r10000Typo]}>R$ 220,00</Text>
      <Text style={[styles.de1, styles.de1Typo]}>de</Text>
      <View
        style={[styles.perfilsuasDoaesChild2, styles.perfilsuasChildPosition1]}
      />
      <View
        style={[styles.perfilsuasDoaesChild3, styles.perfilsuasChildPosition1]}
      />
      <Text style={[styles.text2, styles.textTypo]}>7,5%</Text>
      <Text style={[styles.r400000, styles.r400000Layout]}>R$ 4000,00</Text>
      <Text style={[styles.raoParaOng, styles.paraTypo]}>
        Ração para Ong Pet_Esperança
      </Text>
      <Image
        style={[styles.image9Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.perfilsuasDoaesChild4, styles.perfilsuasChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
      <Text style={[styles.de2, styles.de2Layout]}>de</Text>
      <View
        style={[styles.perfilsuasDoaesChild5, styles.perfilsuasChildPosition]}
      />
      <View
        style={[styles.perfilsuasDoaesChild6, styles.perfilsuasChildPosition]}
      />
      <Text style={[styles.text3, styles.textTypo]}>35%</Text>
      <Text style={[styles.r200000, styles.de3Typo]}>R$ 2000,00</Text>
      <Text style={[styles.cirurgiaParaO, styles.paraTypo]}>
        Cirurgia para o Jake
      </Text>
      <Image
        style={[styles.image10Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.perfilsuasDoaesChild7, styles.perfilsuasChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r70000, styles.r30000Typo]}>R$ 700,00</Text>
      <Text style={[styles.de3, styles.de3Typo]}>de</Text>
      <Text style={[styles.metasCriadas, styles.iconPosition]}>
        Metas Criadas
      </Text>
      <Pressable
        style={[styles.trash2, styles.trashLayout]}
        onPress={() => navigation.navigate("PerfilSuasDoaesFinalizar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/trash22.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.trash21, styles.trashLayout]}
        onPress={() => navigation.navigate("PerfilSuasDoaesFinalizar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/trash22.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.trash22, styles.trashLayout]}
        onPress={() => navigation.navigate("PerfilSuasDoaesFinalizar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/trash22.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.trash23, styles.trashLayout]}
        onPress={() => navigation.navigate("PerfilSuasDoaesFinalizar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/trash22.png")}
        />
      </Pressable>
    </View>
  </ScrollView>);
};

const styles = StyleSheet.create({
  perfilsuasPosition: {
    height: 10,
    borderRadius: Border.br_8xs,
    left: 71,
    top: 147,
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
  r355000Layout: {
    height: 14,
    width: 88,
    left: 211,
  },
  tratamendoDoSamTypo: {
    color: Color.colorTan_200,
    fontSize: FontSize.size_base,
    left: 82,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iconLayout: {
    height: 33,
    width: 34,
  },
  perfilsuasChildLayout: {
    height: 30,
    width: 32,
    position: "absolute",
  },
  r10000Typo: {
    width: 84,
    color: Color.colorLimegreen_200,
    left: 88,
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  deLayout: {
    height: 13,
    width: 16,
    left: 181,
  },
  rectangleViewPosition: {
    top: 259,
    height: 10,
    borderRadius: Border.br_8xs,
    left: 71,
    position: "absolute",
  },
  de1Typo: {
    top: 280,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  perfilsuasChildPosition1: {
    left: 70,
    top: 373,
    height: 10,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  r400000Layout: {
    left: 210,
    height: 14,
    width: 88,
  },
  paraTypo: {
    left: 81,
    color: Color.colorTan_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iconPosition: {
    left: 44,
    position: "absolute",
  },
  r30000Typo: {
    left: 87,
    width: 84,
    color: Color.colorLimegreen_200,
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  de2Layout: {
    left: 180,
    height: 13,
    width: 16,
  },
  perfilsuasChildPosition: {
    top: 488,
    left: 70,
    height: 10,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  de3Typo: {
    top: 509,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  trashLayout: {
    height: 20,
    width: 20,
    left: 317,
    position: "absolute",
  },
  perfilsuasDoaesChild: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesItem: {
    width: 8,
    backgroundColor: Color.colorLimegreen_100,
  },
  text: {
    top: 145,
    left: 42,
    width: 26,
    height: 12,
    fontSize: FontSize.size_sm,
  },
  r1000000: {
    fontSize: FontSize.size_mini,
    top: 168,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  tratamendoDoSam: {
    top: 111,
  },
  image7Icon: {
    top: 103,
    left: 45,
    position: "absolute",
    height: 33,
    width: 34,
  },
  perfilsuasDoaesInner: {
    top: 105,
    left: 46,
    width: 32,
  },
  r10000: {
    top: 167,
  },
  de: {
    fontSize: FontSize.size_mini,
    top: 168,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  rectangleView: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesChild1: {
    width: 23,
    backgroundColor: Color.colorLimegreen_100,
  },
  text1: {
    top: 257,
    left: 26,
    width: 42,
    height: 12,
    fontSize: FontSize.size_sm,
  },
  r355000: {
    height: 14,
    width: 88,
    left: 211,
  },
  vacinaoParaDogs: {
    top: 223,
  },
  image8Icon: {
    top: 215,
    left: 45,
    position: "absolute",
    height: 33,
    width: 34,
  },
  ellipseIcon: {
    top: 217,
    left: 46,
    width: 32,
  },
  r22000: {
    top: 279,
  },
  de1: {
    height: 13,
    width: 16,
    left: 181,
  },
  perfilsuasDoaesChild2: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesChild3: {
    width: 29,
    backgroundColor: Color.colorLimegreen_100,
  },
  text2: {
    top: 371,
    left: 29,
    width: 38,
    height: 12,
    fontSize: FontSize.size_sm,
  },
  r400000: {
    top: 394,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  raoParaOng: {
    top: 337,
  },
  image9Icon: {
    top: 329,
    height: 33,
    width: 34,
  },
  perfilsuasDoaesChild4: {
    top: 331,
    left: 45,
  },
  r30000: {
    top: 393,
  },
  de2: {
    top: 394,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  perfilsuasDoaesChild5: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesChild6: {
    width: 109,
    backgroundColor: Color.colorLimegreen_100,
  },
  text3: {
    top: 486,
    left: 41,
    width: 26,
    height: 12,
    fontSize: FontSize.size_sm,
  },
  r200000: {
    left: 210,
    height: 14,
    width: 88,
  },
  cirurgiaParaO: {
    top: 452,
  },
  image10Icon: {
    top: 444,
    height: 33,
    width: 34,
  },
  perfilsuasDoaesChild7: {
    top: 446,
    left: 45,
  },
  r70000: {
    top: 508,
  },
  de3: {
    left: 180,
    height: 13,
    width: 16,
  },
  metasCriadas: {
    top: 49,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    left: 44,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  trash2: {
    top: 111,
  },
  trash21: {
    top: 220,
  },
  trash22: {
    top: 335,
  },
  trash23: {
    top: 456,
  },
  perfilsuasDoaes: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default PerfilSuasDoaes1;
