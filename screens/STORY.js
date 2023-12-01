import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const STORY = () => {
  return (
    <View style={styles.story}>
      <Image
        style={styles.image15Icon}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Text style={styles.resgateAnimal}>resgate_animal.</Text>
      <Image
        style={styles.storyChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.osCachorrosForam, styles.saibaMaisTypo]}>
        Os cachorros foram resgatados!!!
      </Text>
      <View style={styles.storyItem} />
      <Text style={[styles.saibaMais, styles.saibaMaisTypo]}>SAIBA MAIS</Text>
      <Image
        style={styles.storyInner}
        contentFit="cover"
        source={require("../assets/group-20.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  saibaMaisTypo: {
    color: Color.colorWhitesmoke,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  image15Icon: {
    top: 1,
    left: 0,
    width: 459,
    height: 843,
    position: "absolute",
  },
  resgateAnimal: {
    top: 38,
    left: 58,
    fontSize: FontSize.size_mini,
    color: Color.colorPeru_200,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  storyChild: {
    top: 31,
    left: 14,
    width: 40,
    height: 40,
    position: "absolute",
  },
  osCachorrosForam: {
    top: 538,
    left: 64,
    fontSize: FontSize.size_xl,
    width: 289,
    height: 19,
  },
  storyItem: {
    top: 658,
    left: 109,
    borderRadius: 6,
    backgroundColor: Color.colorTan_200,
    width: 172,
    height: 42,
    position: "absolute",
  },
  saibaMais: {
    top: 666,
    left: 148,
    fontSize: 22,
  },
  storyInner: {
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
  story: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default STORY;
