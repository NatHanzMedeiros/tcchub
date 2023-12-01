import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MONTARPERFILONG = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
   <View style={styles.montarPerfilOng}>
      <Text style={[styles.nomeESigla, styles.emailTypo]}>Nome e sigla:</Text>
      <Text style={[styles.descrio, styles.pixTypo]}>Descrição:</Text>
      <Text style={[styles.telefone, styles.montarPosition]}>Telefone:</Text>
      <Image
        style={[styles.montarPerfilOngChild, styles.montarChildLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={[styles.montarPerfilOngItem, styles.montarChildLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={[styles.montarPerfilOngInner, styles.montarChildLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Text style={[styles.email, styles.montarChildPosition]}>Email:</Text>
      <Image
        style={[styles.lineIcon, styles.montarChildLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.confirmar, styles.emailTypo]}>CONFIRMAR</Text>
      <Text style={styles.perfil}>PERFIL</Text>
      <View style={styles.lineView} />
      <Text style={[styles.obrigatrio, styles.obrigatrioTypo2]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio1, styles.obrigatrioTypo1]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio2, styles.obrigatrioTypo1]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio3, styles.obrigatrioTypo]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio4, styles.obrigatrioTypo]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio5, styles.obrigatrioTypo2]}>
        *obrigatório
      </Text>
      <Text style={[styles.link, styles.montarChildPosition]}>Link:</Text>
      <Image
        style={[styles.montarPerfilOngChild1, styles.montarChildPosition]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Text style={[styles.pix, styles.montarChildPosition]}>PIX:</Text>
      <Image
        style={[styles.montarPerfilOngChild2, styles.montarChildPosition]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
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
      <Pressable
        style={styles.chevronLeft}
        onPress={() => navigation.navigate("TELAINICIALONG")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
    </View>
    </ScrollView>);
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ovo,
  },
  pixTypo: {
    width: 108,
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
  },
  montarPosition: {
    left: 48,
    position: "absolute",
  },
  montarChildLayout: {
    height: 2,
    width: 267,
  },
  montarChildPosition: {
    left: 51,
    position: "absolute",
  },
  obrigatrioTypo2: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  obrigatrioTypo1: {
    left: 249,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  obrigatrioTypo: {
    left: 248,
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
  nomeESigla: {
    top: 314,
    color: Color.colorTan_100,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: 50,
    position: "absolute",
  },
  descrio: {
    top: 579,
    left: 48,
    position: "absolute",
  },
  telefone: {
    top: 402,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ovo,
    color: Color.colorTan_100,
  },
  montarPerfilOngChild: {
    top: 368,
    left: 48,
    position: "absolute",
  },
  montarPerfilOngItem: {
    top: 632,
    left: 50,
    position: "absolute",
  },
  montarPerfilOngInner: {
    top: 456,
    left: 48,
    position: "absolute",
  },
  email: {
    top: 490,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ovo,
    color: Color.colorTan_100,
  },
  lineIcon: {
    top: 544,
    left: 50,
    position: "absolute",
  },
  rectangleView: {
    top: 885,
    left: 40,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTan_100,
    width: 295,
    height: 70,
    position: "absolute",
  },
  confirmar: {
    top: 909,
    left: 126,
    color: Color.colorBlack,
    width: 121,
    height: 21,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
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
    top: 321,
    left: 247,
  },
  obrigatrio1: {
    top: 406,
  },
  obrigatrio2: {
    top: 497,
  },
  obrigatrio3: {
    top: 581,
  },
  obrigatrio4: {
    top: 664,
  },
  obrigatrio5: {
    top: 745,
    left: 250,
  },
  link: {
    top: 656,
    width: 108,
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
  },
  montarPerfilOngChild1: {
    top: 714,
    height: 2,
    width: 267,
  },
  pix: {
    top: 738,
    width: 108,
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
  },
  montarPerfilOngChild2: {
    top: 796,
    height: 2,
    width: 267,
  },
  wrapper: {
    left: 132,
    top: 117,
    width: 106,
    height: 103,
    position: "absolute",
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
  montarPerfilOng: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 1096,
    overflow: "hidden",
    width: "100%",
  },
});

export default MONTARPERFILONG;
