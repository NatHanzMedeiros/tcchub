import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AbaDePesquisa = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.abaDePesquisa}>
      <View style={styles.abaDePesquisaChild} />
      <Text style={styles.pesquisar}>Pesquisar</Text>
      <Image
        style={[styles.abaDePesquisaItem, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-24.png")}
      />
      <Image
        style={styles.abaDePesquisaInner}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-82.png")}
      />
      <Text style={[styles.ssobrePatas, styles.ssobrePatasTypo]}>
        ssobre._patas
      </Text>
      <Text style={[styles.resgateAnimal, styles.ssobrePatasTypo]}>
        resgate_animal.
      </Text>
      <Text style={[styles.recomendados, styles.publicaoTypo]}>
        Recomendados
      </Text>
      <Text style={[styles.publicao, styles.publicaoTypo]}>Publicação</Text>
      <View style={[styles.lineView, styles.linePosition]} />
      <Image
        style={[styles.lineIcon, styles.linePosition]}
        contentFit="cover"
        source={require("../assets/line-26.png")}
      />
      <Image
        style={[styles.abaDePesquisaChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.groupChildPosition}
          contentFit="cover"
          source={require("../assets/image-19.png")}
        />
      </View>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-54.png")}
      />
      <Image
        style={[styles.abaDePesquisaChild2, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-60.png")}
      />
      <Image
        style={[styles.abaDePesquisaChild3, styles.abaChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <Image
        style={[styles.abaDePesquisaChild4, styles.abaChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-57.png")}
      />
      <Image
        style={[styles.abaDePesquisaChild5, styles.abaChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={[styles.abaDePesquisaChild6, styles.abaChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-58.png")}
      />
      <Image
        style={styles.abaDePesquisaChild7}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 53,
    width: 53,
    left: 16,
    position: "absolute",
  },
  ssobrePatasTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorTan_200,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  publicaoTypo: {
    left: 21,
    textAlign: "left",
    color: Color.colorTan_200,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  linePosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    height: 141,
    width: 144,
    left: 0,
    position: "absolute",
  },
  rectangleIconPosition: {
    width: 243,
    left: 147,
    position: "absolute",
  },
  abaChildPosition: {
    height: 223,
    top: 541,
    position: "absolute",
  },
  abaChildLayout: {
    height: 133,
    width: 144,
    left: 0,
    position: "absolute",
  },
  abaDePesquisaChild: {
    top: 66,
    left: 62,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorPeru_300,
    width: 306,
    height: 33,
    position: "absolute",
  },
  pesquisar: {
    top: 74,
    left: 99,
    textAlign: "left",
    color: Color.colorTan_200,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  abaDePesquisaItem: {
    height: "1.31%",
    width: "3.33%",
    top: "8.31%",
    right: "77.18%",
    bottom: "90.38%",
    left: "19.49%",
  },
  abaDePesquisaInner: {
    top: 75,
    left: 20,
    width: 28,
    height: 15,
    position: "absolute",
  },
  groupIcon: {
    height: "0.87%",
    width: "2.05%",
    top: "8.63%",
    right: "9.23%",
    bottom: "90.49%",
    left: "88.72%",
  },
  ellipseIcon: {
    top: 153,
  },
  ssobrePatas: {
    top: 169,
    left: 79,
  },
  resgateAnimal: {
    top: 235,
    left: 82,
  },
  recomendados: {
    top: 117,
  },
  publicao: {
    top: 289,
  },
  lineView: {
    top: 140,
    borderStyle: "solid",
    borderColor: Color.colorPeru_300,
    borderTopWidth: 1,
    width: 391,
  },
  lineIcon: {
    top: 310,
    width: 390,
  },
  abaDePesquisaChild1: {
    top: 219,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro,
  },
  rectangleParent: {
    height: 141,
    width: 144,
    top: 312,
    left: 0,
    position: "absolute",
  },
  rectangleIcon: {
    height: 226,
    top: 312,
    width: 243,
  },
  abaDePesquisaChild2: {
    top: 767,
    height: 148,
  },
  abaDePesquisaChild3: {
    width: 126,
    left: 147,
    height: 223,
    top: 541,
  },
  abaDePesquisaChild4: {
    left: 276,
    width: 114,
  },
  abaDePesquisaChild5: {
    top: 456,
  },
  abaDePesquisaChild6: {
    top: 592,
  },
  abaDePesquisaChild7: {
    top: 728,
    height: 187,
    width: 144,
    left: 0,
    position: "absolute",
  },
  abaDePesquisa: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 915,
  },
});

export default AbaDePesquisa;
