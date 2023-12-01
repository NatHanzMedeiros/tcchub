import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const LOGINONG = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginOng}>
      <Text style={[styles.login, styles.loginLayout]}>Login</Text>
      <View style={styles.loginOngChild} />
      <View style={[styles.loginOngItem, styles.loginLayout]} />
      <Pressable
        style={styles.entrar}
        onPress={() => navigation.navigate("MONTARPERFILONG")}
      >
        <Text style={styles.entrar1}>ENTRAR</Text>
      </Pressable>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("LOGINUSUARIO")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.loginOngInner, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.usurio, styles.ongTypo]}>Usuário</Text>
      <Text style={[styles.ong, styles.ongTypo]}>ONG</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email:</Text>
      <Text style={[styles.senha, styles.emailTypo]}>Senha:</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={[styles.loginOngChild1, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 55,
    position: "absolute",
  },
  wrapperLayout: {
    height: 15,
    width: 15,
    top: 207,
    position: "absolute",
  },
  ongTypo: {
    fontSize: FontSize.size_mini,
    top: 206,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  emailTypo: {
    height: 25,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 39,
    width: 271,
    borderRadius: Border.br_9xs,
    left: 59,
    position: "absolute",
  },
  login: {
    top: 62,
    right: 122,
    fontSize: FontSize.size_29xl,
    color: Color.colorTan_100,
    width: 118,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    height: 55,
  },
  loginOngChild: {
    top: 117,
    left: 117,
    borderStyle: "solid",
    borderColor: Color.colorTan_100,
    borderTopWidth: 1,
    width: 157,
    height: 1,
    position: "absolute",
  },
  loginOngItem: {
    top: 533,
    left: 110,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTan_100,
    width: 169,
  },
  entrar1: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
  },
  entrar: {
    left: 156,
    top: 549,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 72,
  },
  loginOngInner: {
    left: 257,
  },
  usurio: {
    left: 103,
  },
  ong: {
    left: 283,
  },
  email: {
    top: 294,
    right: 269,
    width: 57,
  },
  senha: {
    top: 397,
    right: 262,
    width: 64,
  },
  rectangleIcon: {
    top: 319,
  },
  loginOngChild1: {
    top: 422,
  },
  loginOng: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LOGINONG;
