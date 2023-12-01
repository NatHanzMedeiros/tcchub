import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CADASTROONG = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.cadastroOng}>
      <Text style={[styles.cadastro, styles.ongTypo]}>Cadastro</Text>
      <Image
        style={styles.cadastroOngChild}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Text style={[styles.ong, styles.ongTypo]}>ONG</Text>
      <Text style={[styles.nomeDaOng, styles.senhaTypo]}>Nome da ONG:</Text>
      <Text style={[styles.siglaDaEntidade, styles.senhaTypo]}>
        Sigla da entidade:
      </Text>
      <Text style={[styles.email, styles.senhaTypo]}>Email:</Text>
      <Text style={[styles.criarSenha, styles.senhaTypo]}>Criar senha:</Text>
      <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
        Confirmar senha:
      </Text>
      <Text style={[styles.rgDoResponsvel, styles.senhaTypo]}>
        RG do responsável:
      </Text>
      <Text style={[styles.matrcula, styles.senhaTypo]}>Matrícula:</Text>
      <Text style={[styles.telefone, styles.senhaTypo]}>Telefone:</Text>
      <Text style={[styles.anoDeFundao, styles.senhaTypo]}>
        Ano de fundação:
      </Text>
      <Text style={[styles.cep, styles.senhaTypo]}>CEP:</Text>
      <View style={styles.view} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("TERMOSDEPRIV")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.cadastrar}>CADASTRAR</Text>
      </Pressable>
      <Image
        style={[styles.cadastroOngItem, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngInner, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngChild1, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngChild2, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngChild3, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngChild4, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngChild5, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngChild6, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.cadastroOngChild7, styles.cadastroChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.usurio, styles.ong1Typo]}>Usuário</Text>
      <Text style={[styles.ong1, styles.ong1Typo]}>ONG</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ongTypo: {
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  senhaTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  groupChildLayout: {
    height: 70,
    width: 295,
    position: "absolute",
  },
  cadastroChildLayout: {
    height: 37,
    borderRadius: Border.br_9xs,
    width: 295,
    position: "absolute",
  },
  wrapperLayout: {
    height: 15,
    width: 15,
    top: 165,
    position: "absolute",
  },
  ong1Typo: {
    fontSize: FontSize.size_mini,
    top: 164,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  cadastro: {
    top: 64,
    left: 96,
    fontSize: FontSize.size_29xl,
    width: 197,
    height: 52,
  },
  cadastroOngChild: {
    top: 112,
    left: 98,
    width: 196,
    height: 1,
    position: "absolute",
  },
  ong: {
    top: 116,
    left: 181,
    fontSize: FontSize.size_xs,
  },
  nomeDaOng: {
    top: 206,
    left: 47,
  },
  siglaDaEntidade: {
    top: 313,
    left: 47,
  },
  email: {
    top: 420,
    left: 47,
  },
  criarSenha: {
    top: 527,
    left: 47,
  },
  confirmarSenha: {
    top: 634,
    left: 46,
  },
  rgDoResponsvel: {
    top: 741,
    left: 45,
  },
  matrcula: {
    top: 1063,
    left: 46,
  },
  telefone: {
    top: 1175,
    left: 48,
  },
  anoDeFundao: {
    top: 848,
    left: 50,
  },
  cep: {
    top: 956,
    left: 50,
  },
  view: {
    top: 1114,
    left: 195,
    width: 17,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTan_100,
  },
  cadastrar: {
    top: 22,
    left: 91,
    width: 119,
    height: 26,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  rectangleParent: {
    top: 1348,
    left: 45,
  },
  cadastroOngItem: {
    top: 229,
    left: 47,
  },
  cadastroOngInner: {
    top: 336,
    left: 47,
  },
  rectangleIcon: {
    top: 443,
    left: 47,
  },
  cadastroOngChild1: {
    top: 550,
    left: 47,
  },
  cadastroOngChild2: {
    top: 657,
    left: 47,
  },
  cadastroOngChild3: {
    top: 764,
    left: 45,
  },
  cadastroOngChild4: {
    top: 871,
    left: 50,
  },
  cadastroOngChild5: {
    top: 979,
    left: 50,
  },
  cadastroOngChild6: {
    top: 1086,
    left: 46,
  },
  cadastroOngChild7: {
    top: 1198,
    left: 48,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 70,
  },
  ellipseIcon: {
    left: 255,
  },
  usurio: {
    left: 101,
  },
  ong1: {
    left: 281,
  },
  cadastroOng: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 1528,
    overflow: "hidden",
    width: "100%",
  },
});

export default CADASTROONG;
