import * as React from "react";
import { StyleSheet, View, Text ,ScrollView} from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily  } from "../GlobalStyles";

const PerfilSuasDoaes = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.perfilsuasDoaes}>
      <View style={[styles.perfilsuasDoaesChild, styles.perfilsuasPosition]} />
      <View style={[styles.perfilsuasDoaesItem, styles.perfilsuasPosition]} />
      <Text style={[styles.text, styles.textTypo]}>6,20%</Text>
      <Text style={styles.r355000}>R$ 3550,00</Text>
      <Text style={styles.vacinaoParaDogs}>Vacinação para dogs de rua.</Text>
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.perfilsuasDoaesInner, styles.perfilsuasLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={styles.r22000}>R$ 220,00</Text>
      <Text style={styles.de}>de</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.perfilsuasDoaesChild1, styles.rectangleViewPosition]}
      />
      <Text style={[styles.text1, styles.textTypo]}>7,5%</Text>
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
        style={[styles.ellipseIcon, styles.perfilsuasLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
      <Text style={[styles.de1, styles.de1Layout]}>de</Text>
      <View
        style={[styles.perfilsuasDoaesChild2, styles.perfilsuasChildPosition]}
      />
      <View
        style={[styles.perfilsuasDoaesChild3, styles.perfilsuasChildPosition]}
      />
      <Text style={[styles.text2, styles.textTypo]}>35%</Text>
      <Text style={[styles.r200000, styles.de2Typo]}>R$ 2000,00</Text>
      <Text style={[styles.cirurgiaParaO, styles.paraTypo]}>
        Cirurgia para o Jake
      </Text>
      <Image
        style={[styles.image10Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.perfilsuasDoaesChild4, styles.perfilsuasLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.r70000, styles.r30000Typo]}>R$ 700,00</Text>
      <Text style={[styles.de2, styles.de2Typo]}>de</Text>
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
    </View>
  </ScrollView>);
};

const styles = StyleSheet.create({
  perfilsuasPosition: {
    height: 10,
    borderRadius: Border.br_8xs,
    left: 70,
    top: 144,
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
  perfilsuasLayout: {
    height: 30,
    width: 32,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 69,
    top: 258,
    height: 10,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  r400000Layout: {
    left: 209,
    height: 14,
    width: 88,
  },
  paraTypo: {
    left: 80,
    color: Color.colorTan_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iconPosition: {
    left: 43,
    height: 33,
    width: 34,
    position: "absolute",
  },
  r30000Typo: {
    left: 86,
    width: 84,
    color: Color.colorLimegreen_200,
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  de1Layout: {
    left: 179,
    height: 13,
    width: 16,
  },
  perfilsuasChildPosition: {
    top: 373,
    left: 69,
    height: 10,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  de2Typo: {
    top: 394,
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
    left: 316,
    position: "absolute",
  },
  perfilsuasDoaesChild: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesItem: {
    width: 23,
    backgroundColor: Color.colorLimegreen_100,
  },
  text: {
    top: 142,
    left: 25,
    width: 42,
  },
  r355000: {
    left: 210,
    height: 14,
    width: 88,
    fontSize: FontSize.size_mini,
    top: 165,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  vacinaoParaDogs: {
    top: 108,
    left: 81,
    color: Color.colorTan_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  image8Icon: {
    top: 100,
    height: 33,
    width: 34,
    left: 44,
    position: "absolute",
  },
  perfilsuasDoaesInner: {
    top: 102,
    left: 45,
  },
  r22000: {
    top: 164,
    left: 87,
    width: 84,
    color: Color.colorLimegreen_200,
    fontSize: FontSize.size_base,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  de: {
    left: 180,
    height: 13,
    width: 16,
    fontSize: FontSize.size_mini,
    top: 165,
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
    width: 29,
    backgroundColor: Color.colorLimegreen_100,
  },
  text1: {
    top: 256,
    left: 28,
    width: 38,
  },
  r400000: {
    top: 279,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  raoParaOng: {
    top: 222,
  },
  image9Icon: {
    top: 214,
  },
  ellipseIcon: {
    top: 216,
    left: 44,
  },
  r30000: {
    top: 278,
  },
  de1: {
    top: 279,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  perfilsuasDoaesChild2: {
    width: 266,
    backgroundColor: Color.colorGainsboro,
  },
  perfilsuasDoaesChild3: {
    width: 109,
    backgroundColor: Color.colorLimegreen_100,
  },
  text2: {
    top: 371,
    left: 40,
    width: 26,
  },
  r200000: {
    left: 209,
    height: 14,
    width: 88,
  },
  cirurgiaParaO: {
    top: 337,
  },
  image10Icon: {
    top: 329,
  },
  perfilsuasDoaesChild4: {
    top: 331,
    left: 44,
  },
  r70000: {
    top: 393,
  },
  de2: {
    left: 179,
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
    top: 105,
  },
  trash2Icon1: {
    top: 220,
  },
  trash2Icon2: {
    top: 341,
  },
  perfilsuasDoaes: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PerfilSuasDoaes;
