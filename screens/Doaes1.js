import * as React from "react";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Doaes1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={[styles.doaes1, styles.iconLayout]}>
      <View style={styles.doaes1Child} />
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
      <View style={styles.doaes1Item} />
      <Text style={[styles.mtodoDePagamente, styles.oQrCodePosition]}>
        Método de Pagamente
      </Text>
      <View style={[styles.doaes1Inner, styles.doaes1ChildLayout]} />
      <Text style={[styles.cartoCrdito, styles.boletoTypo]}>
        Cartão Crédito
      </Text>
      <View style={[styles.rectangleView, styles.doaes1ChildLayout]} />
      <View style={[styles.doaes1Child1, styles.doaes1ChildLayout]} />
      <Text style={[styles.cartoDeCrdito, styles.boletoTypo]}>
        Cartão de Crédito
      </Text>
      <Text style={[styles.boleto, styles.boletoTypo]}>Boleto</Text>
      <Text style={[styles.pix, styles.boletoTypo]}>PIX</Text>
      <Text
        style={[styles.oQrCode, styles.boletoTypo]}
      >{`O QR Code será gerado ao clicar no botão abaixo e você poderá pagar utilizando escaneando o QRCode com o app de seu banco preferido ou colando o código Pix que será gerado abaixo da imagem.

Após gerar o QR Code, você tem 15 minutos para fazer o pagamentoAssim que identificarmos o pagamento, você receberá a confirmação pelo e-mail.`}</Text>
      <View style={[styles.doaes1Child2, styles.doaes1ChildLayout]} />
      <Text style={[styles.gerarBoleto, styles.boletoTypo]}>GERAR BOLETO</Text>
      <Text style={[styles.vocEstAjudando, styles.r000Typo]}>
        Você está ajudando Dogs de Rua pela ONG “Patinhas_de_Ouro.” com
        pagamento via PIX
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
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  oQrCodePosition: {
    left: 49,
    color: Color.colorTan_200,
    textAlign: "left",
  },
  doaes1ChildLayout: {
    height: 40,
    width: 281,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 54,
    position: "absolute",
  },
  boletoTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  doaes1Child: {
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
    left: "68.72%",
    top: "94.55%",
    right: "26.67%",
    bottom: "3.08%",
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
    top: 822,
    left: 263,
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
    top: 799,
    left: 109,
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
    textAlign: "left",
  },
  r000: {
    top: 51,
    left: 103,
    fontSize: FontSize.size_13xl,
    width: 113,
    height: 30,
    color: Color.colorBlack,
  },
  doaes1Item: {
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
    fontFamily: FontFamily.ovo,
    position: "absolute",
    left: 49,
  },
  doaes1Inner: {
    top: 180,
    backgroundColor: Color.colorLinen,
  },
  cartoCrdito: {
    left: 77,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    top: 192,
  },
  rectangleView: {
    top: 220,
    backgroundColor: Color.colorTan_200,
  },
  doaes1Child1: {
    top: 260,
    backgroundColor: Color.colorLinen,
  },
  cartoDeCrdito: {
    display: "none",
    left: 77,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    top: 192,
  },
  boleto: {
    top: 232,
    left: 77,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
  },
  pix: {
    top: 272,
    left: 77,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
  },
  oQrCode: {
    top: 312,
    width: 292,
    height: 170,
    left: 49,
    color: Color.colorTan_200,
    textAlign: "left",
  },
  doaes1Child2: {
    top: 642,
    backgroundColor: Color.colorLinen,
  },
  gerarBoleto: {
    top: 653,
    left: 139,
    textAlign: "center",
    color: Color.colorBlack,
  },
  vocEstAjudando: {
    top: 486,
    left: 48,
    fontSize: FontSize.size_base,
    color: Color.colorSaddlebrown,
    width: 294,
  },
  doaes1: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Doaes1;
