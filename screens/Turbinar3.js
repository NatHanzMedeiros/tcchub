import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Turbinar3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.turbinar}>
      <View style={[styles.turbinarChild, styles.lineIconPosition]} />
      <Text style={styles.petHub}>Pet Hub</Text>
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
      <Text style={styles.definaSeuPblico}>{`Defina seu público `}</Text>
      <View style={styles.turbinarItem} />
      <Pressable
        style={styles.avanar}
        onPress={() => navigation.navigate("Turbinar1")}
      >
        <Text style={styles.avanar1}>AVANÇAR</Text>
      </Pressable>
      <Text style={[styles.requisitosEspeciais, styles.automticoTypo]}>
        Requisitos especiais
      </Text>
      <Image
        style={styles.chevronRightIcon1}
        contentFit="cover"
        source={require("../assets/chevronright3.png")}
      />
      <Text style={[styles.automtico, styles.automticoTypo]}>Automático</Text>
      <Image
        style={[styles.turbinarInner, styles.turbinarInnerPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text
        style={[styles.oPetHubFaz, styles.oPetHubFazTypo]}
      >{`O Pet-Hub faz o direcionamento de anúncios para pessoas como seus seguidores `}</Text>
      <Text style={[styles.criarOSeu, styles.automticoTypo]}>Criar o seu</Text>
      <Text style={[styles.insiraSuasOpes, styles.oPetHubFazTypo]}>
        Insira suas opções de direcionamento manualmente
      </Text>
      <Image
        style={[styles.chevronRightIcon2, styles.turbinarInnerPosition]}
        contentFit="cover"
        source={require("../assets/chevronright2.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  chevronIconLayout: {
    height: 28,
    width: 31,
    overflow: "hidden",
  },
  automticoTypo: {
    left: 27,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  turbinarInnerPosition: {
    left: 336,
    position: "absolute",
  },
  oPetHubFazTypo: {
    width: 244,
    left: 27,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  turbinarChild: {
    top: 0,
    height: 84,
    backgroundColor: Color.colorTan_100,
  },
  petHub: {
    top: 30,
    left: 65,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 259,
    height: 53,
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    position: "absolute",
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
    left: 332,
    position: "absolute",
  },
  definaSeuPblico: {
    marginLeft: -100,
    top: 137,
    left: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  turbinarItem: {
    top: 702,
    left: 54,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 281,
    height: 40,
    backgroundColor: Color.colorTan_100,
    position: "absolute",
  },
  avanar1: {
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.ovo,
  },
  avanar: {
    left: 158,
    top: 714,
    position: "absolute",
  },
  requisitosEspeciais: {
    top: 217,
  },
  chevronRightIcon1: {
    top: 215,
    left: 337,
    width: 28,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  automtico: {
    top: 293,
  },
  turbinarInner: {
    top: 299,
    width: 25,
    height: 25,
  },
  oPetHubFaz: {
    top: 311,
  },
  criarOSeu: {
    top: 399,
  },
  insiraSuasOpes: {
    top: 417,
  },
  chevronRightIcon2: {
    top: 416,
    height: 28,
    width: 31,
    overflow: "hidden",
  },
  lineIcon: {
    top: 268,
    height: 3,
  },
  turbinar: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Turbinar3;
