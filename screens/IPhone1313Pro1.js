import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1313Pro1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1313Pro1}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={styles.petHub}>Pet hub</Text>
      <Image
        style={[styles.iphone1313Pro1Child, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text
        style={styles.osAnimaisPrecisam}
      >{`Os animais precisam da sua ajuda, não dê as costas pra eles! `}</Text>
      <Pressable
        style={styles.iphone1313Pro1Item}
        onPress={() => navigation.navigate("LOGINUSUARIO")}
      />
      <Text style={[styles.login, styles.loginPosition]}>LOGIN</Text>
      {/* Modificação para tornar todo o texto "Não tem cadastro?" clicável */}
      <Pressable onPress={() => navigation.navigate("Cadastro")}>
        <View style={styles.noTemCadastroContainer}>
          <Text style={[styles.noTemCadastro, styles.loginPosition]}>
            Não tem cadastro?
          </Text>
        </View>
      </Pressable>
      {/* Fim da modificação */}
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/line-16.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 2,
    position: "absolute",
  },
  loginPosition: {
    color: Color.colorBlack,
    left: 124,
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  image1Icon: {
    top: 430,
    left: 225,
    width: 148,
    height: 267,
    position: "absolute",
  },
  image2Icon: {
    top: 450,
    left: 0,
    width: 177,
    height: 234,
    position: "absolute",
  },
  petHub: {
    top: 69,
    left: 82,
    fontSize: 64,
    textAlign: "left",
    width: 227,
    height: 76,
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iphone1313Pro1Child: {
    top: 129,
    width: 220,
    left: 80,
  },
  osAnimaisPrecisam: {
    top: 145,
    left: 64,
    fontSize: FontSize.size_base,
    width: 262,
    height: 40,
    textAlign: "center",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iphone1313Pro1Item: {
    top: 305,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTan_100,
    borderStyle: "solid",
    borderColor: Color.colorTan_100,
    borderWidth: 1,
    width: 234,
    height: 56,
    left: 80,
    position: "absolute",
  },
  login: {
    top: 320,
    fontSize: FontSize.size_5xl,
    width: 143,
    height: 25,
  },
  noTemCadastro: {
    top: 380,
    fontSize: FontSize.size_mini,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 142,
    height: 40,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 133,
    top: 400,
    width: 123,
  },
  iphone1313Pro1: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1313Pro1;
