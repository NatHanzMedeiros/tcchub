import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const STORY2 = () => {
  return (
    <View style={styles.story2}>
      <Text style={styles.catduogg}>catduogg.-.</Text>
      <Image
        style={styles.story2Child}
        contentFit="cover"
        source={require("../assets/group-20.png")}
      />
      <Image
        style={styles.story2Item}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={styles.image17Icon}
        contentFit="cover"
        source={require("../assets/image-17.png")}
      />
      <Text
        style={[styles.genteVocsLembram, styles.olhemEsseAntesTypo]}
      >{`Gente vocês lembram do Zeca? `}</Text>
      <Text style={[styles.olhemEsseAntes, styles.olhemEsseAntesTypo]}>
        OLHEM ESSE ANTES E DEPOIS!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  olhemEsseAntesTypo: {
    height: 19,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  catduogg: {
    top: 38,
    left: 60,
    color: Color.colorPeru_200,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  story2Child: {
    height: "2.42%",
    width: "6.13%",
    top: "79.03%",
    right: "63.87%",
    bottom: "18.55%",
    left: "30%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  story2Item: {
    top: 31,
    left: 14,
    width: 40,
    height: 40,
    position: "absolute",
  },
  image17Icon: {
    top: 282,
    left: 0,
    width: 390,
    height: 251,
    position: "absolute",
  },
  genteVocsLembram: {
    top: 253,
    left: 102,
    width: 218,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  olhemEsseAntes: {
    top: 543,
    left: 47,
    fontSize: FontSize.size_xl,
    width: 296,
  },
  story2: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default STORY2;
