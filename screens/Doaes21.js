import * as React from "react";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Doaes21 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={[styles.doaes2, styles.iconLayout]}>
      <View style={styles.doaes2Child} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("PERFIL")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
      </Pressable>
      <View style={[styles.perfilWrapper, styles.perfilLayout]}>
        <Text style={[styles.perfil, styles.r000Typo]}>Perfil</Text>
      </View>
      <Pressable
        style={styles.incioParent}
        onPress={() => navigation.navigate("TELAINICIALUSURIO")}
      >
        <Text style={[styles.incio, styles.r000Typo]}>Início</Text>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/3.png")}
        />
      </Pressable>
      <Text style={[styles.crdito, styles.crditoTypo]}>{`Crédito: `}</Text>
      <Text style={[styles.r000, styles.r000Typo]}>R$ 0,00</Text>
      <View style={styles.doaes2Item} />
      <Text style={[styles.mtodoDePagamente, styles.oQrCodePosition]}>
        Método de Pagamente
      </Text>
      <View style={[styles.doaes2Inner, styles.doaes2ChildLayout]} />
      <Text style={[styles.cartoCrdito, styles.cartoTypo]}>Cartão Crédito</Text>
      <View style={[styles.rectangleView, styles.doaes2ChildLayout]} />
      <View style={[styles.doaes2Child1, styles.doaes2ChildLayout]} />
      <Text style={[styles.cartoDeCrdito, styles.cartoTypo]}>
        Cartão de Crédito
      </Text>
      <Text style={[styles.boleto, styles.cartoTypo]}>Boleto</Text>
      <Text style={[styles.pix, styles.cartoTypo]}>PIX</Text>
      <Text
        style={[styles.oQrCode, styles.cartoTypo]}
      >{`O QR Code será gerado ao clicar no botão abaixo e você poderá pagar utilizando escaneando o QRCode com o app de seu banco preferido ou colando o código Pix que será gerado abaixo da imagem.

Após gerar o QR Code, você tem 15 minutos para fazer o pagamentoAssim que identificarmos o pagamento, você receberá a confirmação pelo e-mail.`}</Text>
      <View style={[styles.doaes2Child2, styles.doaes2ChildLayout]} />
      <Text style={[styles.dadosDoCarto, styles.cartoTypo]}>
        DADOS DO CARTÃO
      </Text>
      <Text style={[styles.vocEstContribuindo, styles.r000Typo]}>
        Você está contribuindo com a alimentação de dogs pela ONG
        “Pet_Esperança.” com pagamento via PIX
      </Text>
    </View>
  </ScrollView>);
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  perfilLayout: {
    height: 12,
    width: 28,
  },
  r000Typo: {
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  crditoTypo: {
    height: 18,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  oQrCodePosition: {
    left: 49,
    color: Color.colorTan_200,
  },
  doaes2ChildLayout: {
    height: 40,
    width: 281,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 54,
    position: "absolute",
  },
  cartoTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  doaes2Child: {
    top: 786,
    backgroundColor: Color.colorPeru_300,
    width: 390,
    height: 58,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "66.15%",
    top: "94.79%",
    right: "29.23%",
    bottom: "2.84%",
    width: "4.62%",
    height: "2.37%",
    position: "absolute",
  },
  perfil: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ovo,
    right: 9.2,
    top: 0,
    height: 12,
    width: 28,
  },
  perfilWrapper: {
    top: 824,
    left: 253,
    position: "absolute",
  },
  incio: {
    top: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ovo,
    left: 0,
  },
  icon1: {
    left: 2,
    width: 24,
    height: 21,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  incioParent: {
    top: 801,
    left: 107,
    width: 30,
    height: 38,
    position: "absolute",
  },
  crdito: {
    top: 61,
    left: 22,
    width: 72,
    color: Color.colorTan_200,
    height: 18,
    fontSize: FontSize.size_xl,
  },
  r000: {
    top: 51,
    left: 103,
    fontSize: FontSize.size_13xl,
    width: 113,
    height: 30,
    color: Color.colorBlack,
  },
  doaes2Item: {
    top: 104,
    left: 31,
    width: 328,
    height: 655,
    backgroundColor: Color.colorLinen,
    position: "absolute",
  },
  mtodoDePagamente: {
    top: 127,
    width: 196,
    height: 18,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
    left: 49,
  },
  doaes2Inner: {
    top: 180,
    backgroundColor: Color.colorTan_200,
  },
  cartoCrdito: {
    left: 77,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    top: 192,
  },
  rectangleView: {
    top: 220,
    backgroundColor: Color.colorLinen,
  },
  doaes2Child1: {
    top: 260,
    backgroundColor: Color.colorLinen,
  },
  cartoDeCrdito: {
    display: "none",
    left: 77,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    top: 192,
  },
  boleto: {
    top: 232,
    left: 77,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  pix: {
    top: 272,
    left: 77,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  oQrCode: {
    top: 312,
    width: 292,
    height: 170,
    left: 49,
    color: Color.colorTan_200,
  },
  doaes2Child2: {
    top: 642,
    backgroundColor: Color.colorLinen,
  },
  dadosDoCarto: {
    top: 653,
    left: 122,
    color: Color.colorBlack,
  },
  vocEstContribuindo: {
    top: 486,
    left: 48,
    fontSize: FontSize.size_base,
    color: Color.colorSaddlebrown,
    width: 294,
  },
  doaes2: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Doaes21;
