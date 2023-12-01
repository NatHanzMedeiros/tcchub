import * as React from "react";
import { StyleSheet, View, Pressable, Text, ScrollView} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Doaes = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
   <View style={[styles.doaes, styles.iconLayout]}>
      <View style={styles.doaesChild} />
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
      <View style={styles.doaesItem} />
      <Text style={[styles.mtodoDePagamente, styles.oQrCodePosition]}>
        Método de Pagamente
      </Text>
      <View style={[styles.doaesInner, styles.doaesChildLayout]} />
      <Text style={[styles.cartoCrdito, styles.pixTypo]}>Cartão Crédito</Text>
      <View style={[styles.rectangleView, styles.doaesChildLayout]} />
      <View style={[styles.doaesChild1, styles.doaesChildLayout]} />
      <Text style={[styles.cartoDeCrdito, styles.pixTypo]}>
        Cartão de Crédito
      </Text>
      <Text style={[styles.boleto, styles.pixTypo]}>Boleto</Text>
      <Text style={[styles.pix, styles.pixTypo]}>PIX</Text>
      <Text
        style={[styles.oQrCode, styles.pixTypo]}
      >{`O QR Code será gerado ao clicar no botão abaixo e você poderá pagar utilizando escaneando o QRCode com o app de seu banco preferido ou colando o código Pix que será gerado abaixo da imagem.

Após gerar o QR Code, você tem 15 minutos para fazer o pagamentoAssim que identificarmos o pagamento, você receberá a confirmação pelo e-mail.`}</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <View style={[styles.doaesChild2, styles.doaesChildLayout]} />
      <Text style={[styles.gerarQrcodePix, styles.pixTypo]}>
        GERAR QRCODE PIX
      </Text>
      <Text style={[styles.vocEstAjudando, styles.r000Typo]}>
        Você está ajudando Sam pela ONG “Lovers_Pets.” com pagamento via PIX
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
  doaesChildLayout: {
    height: 40,
    width: 281,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 54,
    position: "absolute",
  },
  pixTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  doaesChild: {
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
    left: "65.9%",
    top: "94.43%",
    right: "29.49%",
    bottom: "3.2%",
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
    top: 821,
    left: 252,
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
    top: 797,
    left: 112,
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
  doaesItem: {
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
  doaesInner: {
    top: 180,
    backgroundColor: Color.colorLinen,
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
  doaesChild1: {
    top: 260,
    backgroundColor: Color.colorTan_200,
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
  rectangleIcon: {
    top: 543,
    left: 163,
    width: 63,
    height: 65,
    position: "absolute",
  },
  doaesChild2: {
    top: 642,
    backgroundColor: Color.colorLinen,
  },
  gerarQrcodePix: {
    top: 653,
    left: 123,
    color: Color.colorBlack,
  },
  vocEstAjudando: {
    top: 486,
    left: 48,
    fontSize: FontSize.size_base,
    color: Color.colorSaddlebrown,
    width: 294,
  },
  doaes: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Doaes;
