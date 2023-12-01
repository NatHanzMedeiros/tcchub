import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Turbinar = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
   <View style={styles.turbinar}>
      <View style={[styles.turbinarChild, styles.turbinarChildBg]} />
      <Text style={[styles.petHub, styles.petHubTypo]}>Pet Hub</Text>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.chevronRightIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/chevronright.png")}
      />
      <Text style={[styles.maisVisitasAo, styles.maisTypo]}>
        Mais visitas ao perfil
      </Text>
      <Text style={[styles.maisAcessosAo, styles.maisTypo]}>
        Mais acessos ao site
      </Text>
      <Text style={[styles.maisMensagens, styles.maisTypo]}>
        Mais mensagens
      </Text>
      <Text style={[styles.convideAsPessoas, styles.pessoasTypo]}>
        Convide as pessoas para explorar seu perfil.
      </Text>
      <Text style={[styles.atraiaAsPessoas, styles.pessoasTypo]}>
        Atraia as pessoas para visitar seu site e obter mais informações.
      </Text>
      <Text style={[styles.converseComPessoas, styles.pessoasTypo]}>
        Converse com pessoas interessadas na sua empresa.
      </Text>
      <Image
        style={[styles.turbinarItem, styles.turbinarLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.turbinarInner, styles.turbinarLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.turbinarLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text
        style={[styles.selecioneUmaMeta, styles.petHubTypo]}
      >{`Selecione uma meta `}</Text>
      <View style={[styles.rectangleView, styles.turbinarChildBg]} />
      <Text style={[styles.avanar, styles.pessoasTypo]}>AVANÇAR</Text>
    </View>
  </ScrollView>);
};

const styles = StyleSheet.create({
  turbinarChildBg: {
    backgroundColor: Color.colorTan_100,
    position: "absolute",
  },
  petHubTypo: {
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  maisTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    left: 27,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  pessoasTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  turbinarLayout: {
    height: 25,
    width: 25,
    left: 344,
    position: "absolute",
  },
  turbinarChild: {
    top: 0,
    left: 0,
    width: 390,
    height: 84,
  },
  petHub: {
    top: 45,
    left: 65,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 259,
    height: 53,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.ovo,
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
  },
  chevronRightIcon: {
    top: 42,
    left: 332,
    width: 31,
    height: 28,
  },
  maisVisitasAo: {
    top: 217,
  },
  maisAcessosAo: {
    top: 286,
  },
  maisMensagens: {
    top: 356,
  },
  convideAsPessoas: {
    top: 235,
    width: 248,
    color: Color.colorGray_200,
    left: 27,
    fontSize: FontSize.size_mini,
  },
  atraiaAsPessoas: {
    top: 304,
    width: 244,
    color: Color.colorGray_200,
    left: 27,
    fontSize: FontSize.size_mini,
  },
  converseComPessoas: {
    top: 374,
    width: 256,
    color: Color.colorGray_200,
    left: 27,
    fontSize: FontSize.size_mini,
  },
  turbinarItem: {
    top: 222,
  },
  turbinarInner: {
    top: 297,
    
  },
  ellipseIcon: {
    top: 372,
  },
  selecioneUmaMeta: {
    marginLeft: -106,
    top: 137,
    left: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
  },
  rectangleView: {
    top: 560,
    left: 54,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 281,
    height: 40,
  },
  avanar: {
    top: 572,
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

export default Turbinar;
