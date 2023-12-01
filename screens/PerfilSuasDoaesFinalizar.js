import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PerfilSuasDoaesFinalizar = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.perfilsuasDoaesfinalizar}>
      <View style={styles.perfilsuasDoaesfinalizarChild} />
      <View
        style={[styles.perfilsuasDoaesfinalizarItem, styles.perfilsuasPosition]}
      />
      <View
        style={[
          styles.perfilsuasDoaesfinalizarInner,
          styles.perfilsuasPosition,
        ]}
      />
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
        style={[styles.ellipseIcon, styles.perfilsuasChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r10000, styles.r10000Typo]}>R$ 100,00</Text>
      <Text style={[styles.de, styles.deLayout]}>de</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[
          styles.perfilsuasDoaesfinalizarChild1,
          styles.rectangleViewPosition,
        ]}
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
        style={[
          styles.perfilsuasDoaesfinalizarChild2,
          styles.perfilsuasChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r22000, styles.r10000Typo]}>R$ 220,00</Text>
      <Text style={[styles.de1, styles.de1Typo]}>de</Text>
      <View
        style={[
          styles.perfilsuasDoaesfinalizarChild3,
          styles.perfilsuasChildPosition1,
        ]}
      />
      <View
        style={[
          styles.perfilsuasDoaesfinalizarChild4,
          styles.perfilsuasChildPosition1,
        ]}
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
        style={[
          styles.perfilsuasDoaesfinalizarChild5,
          styles.perfilsuasChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
      <Text style={[styles.de2, styles.de2Layout]}>de</Text>
      <View
        style={[
          styles.perfilsuasDoaesfinalizarChild6,
          styles.perfilsuasChildPosition,
        ]}
      />
      <View
        style={[
          styles.perfilsuasDoaesfinalizarChild7,
          styles.perfilsuasChildPosition,
        ]}
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
        style={[
          styles.perfilsuasDoaesfinalizarChild8,
          styles.perfilsuasChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r70000, styles.r30000Typo]}>R$ 700,00</Text>
      <Text style={[styles.de3, styles.de3Typo]}>de</Text>
      <Text style={styles.metasCriadas}>Metas Criadas</Text>
      <Image
        style={[styles.trash2Icon, styles.trash2IconLayout]}
        contentFit="cover"
        source={require("../assets/trash22.png")}
      />
      <Image
        style={[styles.trash2Icon1, styles.trash2IconLayout]}
        contentFit="cover"
        source={require("../assets/trash22.png")}
      />
      <Image
        style={[styles.trash2Icon2, styles.trash2IconLayout]}
        contentFit="cover"
        source={require("../assets/trash22.png")}
      />
      <Image
        style={[styles.trash2Icon3, styles.trash2IconLayout]}
        contentFit="cover"
        source={require("../assets/trash22.png")}
      />
      <Text style={[styles.desejaRealmenteFinalizar, styles.sim1Typo]}>
        Deseja realmente finalizar essa doação?
      </Text>
      <Pressable
        style={[styles.sim, styles.noPosition]}
        onPress={() => navigation.navigate("PerfilSuasDoaes")}
      >
        <Text style={[styles.sim1, styles.sim1Typo]}>SIM</Text>
      </Pressable>
      <Pressable
        style={[styles.no, styles.noPosition]}
        onPress={() => navigation.navigate("PerfilSuasDoaes1")}
      >
        <Text style={[styles.sim1, styles.sim1Typo]}>NÃO</Text>
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
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_sm,
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
    left: 45,
    position: "absolute",
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
    height: 33,
    width: 34,
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
  trash2IconLayout: {
    overflow: "hidden",
    height: 20,
    width: 20,
    left: 317,
    position: "absolute",
  },
  sim1Typo: {
    height: 21,
    textAlign: "center",
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ovo,
  },
  noPosition: {
    top: 751,
    position: "absolute",
  },
  perfilsuasDoaesfinalizarChild: {
    top: 647,
    left: 1,
    borderRadius: 25,
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 230,
    position: "absolute",
  },
  perfilsuasDoaesfinalizarItem: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesfinalizarInner: {
    width: 8,
    backgroundColor: Color.colorLimegreen_100,
  },
  text: {
    top: 145,
    width: 26,
    height: 12,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_sm,
    left: 42,
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
  },
  ellipseIcon: {
    top: 105,
    left: 46,
    height: 30,
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
  perfilsuasDoaesfinalizarChild1: {
    width: 23,
    backgroundColor: Color.colorLimegreen_100,
  },
  text1: {
    top: 257,
    left: 26,
    width: 42,
    height: 12,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
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
  },
  perfilsuasDoaesfinalizarChild2: {
    top: 217,
    left: 46,
    height: 30,
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
  perfilsuasDoaesfinalizarChild3: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesfinalizarChild4: {
    width: 29,
    backgroundColor: Color.colorLimegreen_100,
  },
  text2: {
    top: 371,
    left: 29,
    width: 38,
    height: 12,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
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
  },
  perfilsuasDoaesfinalizarChild5: {
    top: 331,
    height: 30,
    width: 32,
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
  perfilsuasDoaesfinalizarChild6: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesfinalizarChild7: {
    width: 109,
    backgroundColor: Color.colorLimegreen_100,
  },
  text3: {
    top: 486,
    left: 41,
    width: 26,
    height: 12,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
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
  },
  perfilsuasDoaesfinalizarChild8: {
    top: 446,
    height: 30,
    width: 32,
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
    left: 44,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  trash2Icon: {
    top: 111,
  },
  trash2Icon1: {
    top: 220,
  },
  trash2Icon2: {
    top: 335,
  },
  trash2Icon3: {
    top: 456,
  },
  desejaRealmenteFinalizar: {
    top: 671,
    left: 62,
    width: 270,
    position: "absolute",
  },
  sim1: {
    textDecoration: "underline",
    width: 151,
  },
  sim: {
    left: 42,
  },
  no: {
    left: 189,
  },
  perfilsuasDoaesfinalizar: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PerfilSuasDoaesFinalizar;
