import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const STORY1 = () => {
  return (
    <View style={styles.story1}>
      <Image
        style={styles.image16Position}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View style={[styles.image16, styles.image16Position]} />
      <Image
        style={styles.story1Child}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Text style={[styles.pelosePlumas, styles.galeraAMetaTypo]}>
        pelos.e_plumas
      </Text>
      <Text
        style={[styles.galeraAMeta, styles.galeraAMetaTypo]}
      >{`Galera, a meta foi batida!!!
Agradecemos de coração todos que fizeram as doações para realizar as sessões da jade.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image16Position: {
    width: 387,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  galeraAMetaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  image16: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  story1Child: {
    top: 28,
    width: 40,
    height: 40,
    left: 12,
    position: "absolute",
  },
  pelosePlumas: {
    top: 35,
    left: 56,
    fontSize: FontSize.size_mini,
    color: Color.colorPeru_200,
  },
  galeraAMeta: {
    top: 118,
    fontSize: 25,
    color: Color.colorWhite,
    width: 274,
    left: 12,
  },
  story1: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default STORY1;
