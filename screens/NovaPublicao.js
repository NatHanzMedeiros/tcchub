import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const NovaPublicao = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={[styles.novaPublicao, styles.iconLayout]}>
      <View style={styles.novaPublicaoChild} />
      <Text style={styles.novaPublicao1}>Nova publicação</Text>
      <Text style={styles.escrevaUmaDescrio}>{`
Escreva uma descrição... `}</Text>
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
      <Image
        style={styles.novaPublicaoItem}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.novaPublicaoInner, styles.novaChildLayout]}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={[styles.lineIcon, styles.novaChildLayout]}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Text style={[styles.marcarOngs, styles.pblicoTypo]}>Marcar ONGs</Text>
      <Image
        style={[styles.chevronRightIcon1, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevronright1.png")}
      />
      <Text style={[styles.pblico, styles.pblicoTypo]}>Público</Text>
      <Image
        style={[styles.chevronRightIcon2, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevronright1.png")}
      />
      <Image
        style={[styles.novaPublicaoChild1, styles.novaChildLayout]}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Text style={[styles.adicionarLocalizao, styles.pblicoTypo]}>
        Adicionar localização
      </Text>
      <Image
        style={[styles.chevronRightIcon3, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/chevronright1.png")}
      />
      <Image
        style={[styles.novaPublicaoChild2, styles.novaChildLayout]}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Text
        style={[styles.turbinarPublicao, styles.pblicoTypo]}
      >{`Turbinar publicação `}</Text>
      <Pressable
        style={[styles.chevronRight, styles.chevronIconLayout]}
        onPress={() => navigation.navigate("Turbinar")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronright1.png")}
        />
      </Pressable>
    </View>
 </ScrollView> );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  novaChildLayout: {
    height: 3,
    width: 390,
    left: 0,
    position: "absolute",
  },
  pblicoTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 20,
    color: Color.colorGray_200,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  chevronIconLayout: {
    height: 19,
    width: 22,
    left: 348,
    position: "absolute",
  },
  novaPublicaoChild: {
    top: 0,
    backgroundColor: Color.colorTan_100,
    height: 84,
    width: 390,
    left: 0,
    position: "absolute",
  },
  novaPublicao1: {
    top: 47,
    color: Color.colorWhite,
    height: 53,
    width: 259,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    left: 65,
    position: "absolute",
  },
  escrevaUmaDescrio: {
    top: 101,
    color: Color.colorGray_200,
    height: 53,
    width: 259,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    left: 65,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.01%",
    width: "4.36%",
    top: "5.75%",
    right: "87.82%",
    bottom: "92.24%",
    left: "7.82%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  chevronRightIcon: {
    top: 44,
    left: 336,
    width: 31,
    height: 28,
  },
  novaPublicaoItem: {
    top: 117,
    width: 55,
    height: 75,
    left: 20,
    position: "absolute",
  },
  novaPublicaoInner: {
    top: 223,
  },
  lineIcon: {
    top: 298,
  },
  marcarOngs: {
    top: 237,
  },
  chevronRightIcon1: {
    top: 236,
    overflow: "hidden",
  },
  pblico: {
    top: 268,
  },
  chevronRightIcon2: {
    top: 267,
    overflow: "hidden",
  },
  novaPublicaoChild1: {
    top: 341,
  },
  adicionarLocalizao: {
    top: 313,
  },
  chevronRightIcon3: {
    top: 312,
    overflow: "hidden",
  },
  novaPublicaoChild2: {
    top: 384,
  },
  turbinarPublicao: {
    top: 356,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  chevronRight: {
    top: 355,
  },
  novaPublicao: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default NovaPublicao;
