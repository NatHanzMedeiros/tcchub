import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Turbinar1 = () => {
  const navigation = useNavigation();

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
        style={styles.chevronRightIcon}
        contentFit="cover"
        source={require("../assets/chevronright.png")}
      />
      <View style={[styles.turbinarItem, styles.turbinarBg]} />
      <Pressable
        style={styles.avanar}
        onPress={() => navigation.navigate("Turbinar2")}
      >
        <Text style={styles.avanar1}>AVANÇAR</Text>
      </Pressable>
      <Text style={styles.definaADurao}>Defina a duração do orçamento</Text>
      <Image
        style={[styles.turbinarInner, styles.turbinarChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.turbinarChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.turbinarChild1, styles.turbinarChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.turbinarChild2, styles.turbinarChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.turbinarChild3, styles.r500PorPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.oramentoEDurao, styles.diasClr]}>
        Orçamento e duração
      </Text>
      <Text style={[styles.r500Por, styles.r500PorPosition]}>
        R$ 5,00 por dia
      </Text>
      <Text style={[styles.r1000Por, styles.porTypo]}>R$ 10,00 por dia</Text>
      <Text style={[styles.r1500Por, styles.porTypo]}>R$ 15,00 por dia</Text>
      <Text style={[styles.r2000Por, styles.porTypo]}>R$ 20,00 por dia</Text>
      <Text style={[styles.r2500Por, styles.porTypo]}>R$ 25,00 por dia</Text>
      <Image
        style={[styles.turbinarChild4, styles.diasChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.dias, styles.diasChildPosition]}>10 dias</Text>
      <Text style={[styles.dias1, styles.diasChildPosition]}>15 dias</Text>
      <Image
        style={[styles.turbinarChild5, styles.diasChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.ms, styles.diasChildPosition]}>1 mês</Text>
      <Image
        style={[styles.turbinarChild6, styles.diasChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  turbinarBg: {
    backgroundColor: Color.colorTan_100,
    position: "absolute",
  },
  petHubFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  turbinarChildLayout: {
    height: 25,
    width: 25,
  },
  r500PorPosition: {
    top: 263,
    position: "absolute",
  },
  diasClr: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
  },
  porTypo: {
    width: 150,
    height: 23,
    color: Color.colorGray_200,
    left: 39,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  diasChildPosition: {
    top: 557,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 259,
    height: 53,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
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
    width: 31,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  turbinarItem: {
    top: 702,
    left: 54,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 281,
    height: 40,
  },
  avanar1: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
  },
  avanar: {
    top: 714,
    left: 158,
    position: "absolute",
  },
  definaADurao: {
    top: 512,
    width: 284,
    height: 23,
    color: Color.colorGray_200,
    left: 39,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  turbinarInner: {
    top: 313,
    left: 194,
    width: 25,
    position: "absolute",
  },
  ellipseIcon: {
    top: 363,
    left: 194,
    width: 25,
    position: "absolute",
  },
  turbinarChild1: {
    top: 413,
    left: 194,
    width: 25,
    position: "absolute",
  },
  turbinarChild2: {
    top: 463,
    left: 194,
    width: 25,
    position: "absolute",
  },
  turbinarChild3: {
    height: 25,
    width: 25,
    left: 194,
  },
  oramentoEDurao: {
    marginLeft: -110,
    top: 141,
    left: "50%",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  r500Por: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    left: 39,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  r1000Por: {
    top: 315,
  },
  r1500Por: {
    top: 364,
  },
  r2000Por: {
    top: 413,
  },
  r2500Por: {
    top: 464,
  },
  turbinarChild4: {
    left: 107,
    height: 25,
    width: 25,
  },
  dias: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    left: 39,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  dias1: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    textAlign: "left",
    left: 158,
    fontSize: FontSize.size_xl,
  },
  turbinarChild5: {
    left: 225,
    height: 25,
    width: 25,
  },
  ms: {
    left: 277,
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  turbinarChild6: {
    left: 333,
    height: 25,
    width: 25,
  },
  turbinar: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Turbinar1;
