import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Turbinar2 = () => {
  return (
    <View style={styles.turbinar}>
      <View style={[styles.turbinarChild, styles.turbinarBg]} />
      <Text style={[styles.petHub, styles.petHubFlexBox]}>Pet Hub</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.chevronRightIcon, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevronright.png")}
      />
      <Text style={[styles.confiraSeuAnncio, styles.petHubTypo]}>
        Confira seu anúncio
      </Text>
      <Image
        style={styles.turbinarItem}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Text style={[styles.prviaDoAnncio, styles.anncioTypo]}>
        Prévia do anúncio
      </Text>
      <Image
        style={[styles.chevronRightIcon1, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevronright2.png")}
      />
      <Text style={[styles.metaDoAnncio, styles.anncioTypo]}>
        Meta do anúncio
      </Text>
      <Text style={[styles.maisVisitasAo, styles.r15001Typo]}>
        Mais visitas ao perfil | @resgate_animal.
      </Text>
      <Text style={[styles.pblico, styles.anncioTypo]}>Público</Text>
      <Text style={[styles.automticoO, styles.r15001Typo]}>
        Automático | O Pet-Hub faz o direcionamento de anúncios para pessoas
        como seus seguidores
      </Text>
      <Text style={[styles.oramentoEDurao, styles.anncioTypo]}>
        Orçamento e duração
      </Text>
      <Text style={[styles.r15001, styles.r15001Typo]}>R$15,00 | 1 Mês</Text>
      <View style={[styles.turbinarInner, styles.turbinarBg]} />
      <Text style={[styles.turbinar1, styles.r15001Typo]}>TURBINAR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  turbinarBg: {
    backgroundColor: Color.colorTan_100,
    position: "absolute",
  },
  petHubFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  chevronIconLayout: {
    height: 28,
    width: 31,
    left: 332,
    position: "absolute",
    overflow: "hidden",
  },
  petHubTypo: {
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  anncioTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  r15001Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  turbinarChild: {
    top: 0,
    left: 0,
    width: 390,
    height: 84,
  },
  petHub: {
    top: 30,
    left: 65,
    color: Color.colorWhite,
    justifyContent: "center",
    width: 259,
    height: 53,
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    position: "absolute",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
  },
  vectorIcon: {
    height: "2.01%",
    width: "4.36%",
    top: "5.51%",
    right: "88.85%",
    bottom: "92.48%",
    left: "6.79%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chevronRightIcon: {
    top: 42,
  },
  confiraSeuAnncio: {
    marginLeft: -107,
    top: 144,
    left: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
  },
  turbinarItem: {
    top: 218,
    width: 55,
    height: 75,
    left: 27,
    position: "absolute",
  },
  prviaDoAnncio: {
    left: 88,
    top: 244,
  },
  chevronRightIcon1: {
    top: 244,
  },
  metaDoAnncio: {
    top: 324,
    left: 27,
  },
  maisVisitasAo: {
    top: 342,
    left: 27,
    color: Color.colorGray_200,
  },
  pblico: {
    top: 390,
    left: 27,
  },
  automticoO: {
    top: 408,
    width: 314,
    left: 27,
    color: Color.colorGray_200,
    alignItems: "center",
    display: "flex",
  },
  oramentoEDurao: {
    top: 473,
    left: 27,
  },
  r15001: {
    top: 496,
    left: 27,
    color: Color.colorGray_200,
  },
  turbinarInner: {
    top: 704,
    left: 54,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 281,
    height: 40,
  },
  turbinar1: {
    top: 716,
    left: 158,
    color: Color.colorBlack,
  },
  turbinar: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Turbinar2;
