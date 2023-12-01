import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const TELAINICIALONG = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.telaInicialOng}>
      <Image
        style={[styles.image6Icon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.image7Icon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.image9Icon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={styles.telaInicialOngChild}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("STORY1")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/ellipse-61.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("STORY")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("STORY2")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
      </Pressable>
      <Text style={[styles.pelosePlumas, styles.catduoggTypo]}>
        pelos.e_plumas
      </Text>
      <Text style={[styles.ssobrePatas, styles.catduoggTypo]}>
        ssobre._patas
      </Text>
      <Text style={[styles.catduogg, styles.catduoggTypo]}>catduogg.-.</Text>
      <Text style={styles.petHub}>Pet hub</Text>
      <Image
        style={[styles.telaInicialOngItem, styles.telaLayout]}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Image
        style={[styles.telaInicialOngInner, styles.groupPressablePosition]}
        contentFit="cover"
        source={require("../assets/group-23.png")}
      />
      <Pressable
        style={styles.groupPressablePosition}
        onPress={() => navigation.navigate("AbaDePesquisa")}
      >
        <Image
          style={[styles.icon3, styles.telaLayout]}
          contentFit="cover"
          source={require("../assets/group-23.png")}
        />
      </Pressable>
      <View style={[styles.groupParent, styles.parentPosition1]}>
        <View style={[styles.rectangleParent, styles.parentPosition1]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.ssobrePatas1, styles.catdouggTypo]}>
            ssobre._patas
          </Text>
          <Text style={styles.cachorrosDesabrigadosNo}>
            Cachorros desabrigados no alagamento de SC
          </Text>
        </View>
        <Text
          style={[styles.resgateAnimalEstesCachorriContainer, styles.saibaTypo]}
        >
          <Text style={styles.resgateAnimal}>resgate_animal:</Text>
          <Text style={styles.estesCachorrinhosEsto}>
            {" "}
            Estes cachorrinhos estão seguros, e estão esperando para serem
            adotados. Faça sua parte!!
          </Text>
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.frameChild, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-18.png")}
        />
        <Image
          style={[styles.frameInner, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-19.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <View style={[styles.rectangleView, styles.frameChild1Layout]} />
        <Text
          style={[styles.saibaMais, styles.saibaLayout]}
        >{`saiba mais `}</Text>
        <Text style={[styles.catdougg, styles.catdouggTypo]}>catdougg.-.</Text>
        <Text
          style={[styles.catdouggGenteEssaContainer, styles.saibaMais2Typo]}
        >
          <Text style={styles.resgateAnimal}>{`catdougg.-.: `}</Text>
          <Text
            style={styles.estesCachorrinhosEsto}
          >{`Gente, essa é a Jade, ela está com um tumor na cabeça e está precisando terminar seu tratamento, já pagamos 3 sessões, e por falta de dinheiro não conseguimos terminá-las. Ainda faltam 6 sessões, que resultaram em R$ 2.400,00 no total, qualquer quantia doada será bem vinda para bater a meta.
`}</Text>
        </Text>
        <Text style={[styles.pelosePlumas1, styles.saibaMais2Typo]}>
          <Text style={styles.resgateAnimal}>pelos.e_plumas:</Text>
          <Text
            style={styles.oiiGalerinhaEstes}
          >{` Oii galerinha! Estes cães foram resgatados de uma casa que acolhe cachorros de rua, pois, infelizmente um incêndio ocorreu, mas estes felizmente sobreviveram. Precisamos da ajuda de vocês, decidimos esta quantia de R$ 5000,00 reais, porque será o valor gasto no total com alimentação e cuidados veterinários, para futuramente poder doá-los, com a saúde em perfeito estado.
`}</Text>
        </Text>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-103.png")}
        />
        <Text
          style={[styles.saibaMais1, styles.saibaLayout]}
        >{`saiba mais `}</Text>
        <Image
          style={[styles.image11Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        <View style={[styles.frameChild1, styles.frameChild1Layout]} />
        <Text
          style={[styles.saibaMais2, styles.saibaMais2Typo]}
        >{`saiba mais `}</Text>
        <Image
          style={[styles.rectangleIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-62.png")}
        />
        <Image
          style={styles.frameChild2}
          contentFit="cover"
          source={require("../assets/ellipse-91.png")}
        />
      </View>
      <View style={styles.menuPosition}>
        <View style={styles.menuPosition}>
          <View style={[styles.menuChild, styles.menuPosition]} />
          <Pressable
            style={[styles.parent, styles.parentPosition]}
            onPress={() => navigation.navigate("IPhone13141")}
          >
            <Image
              style={[styles.icon4, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/11.png")}
            />
            <Text style={[styles.publicar, styles.parentPosition]}>
              Publicar
            </Text>
          </Pressable>
          <Pressable
            style={styles.wrapper1}
            onPress={() => navigation.navigate("PERFILONG")}
          >
            <Image
              style={[styles.icon5, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/group-82.png")}
            />
          </Pressable>
          <View style={[styles.perfilWrapper, styles.perfilLayout]}>
            <Text style={[styles.perfil, styles.perfilLayout]}>Perfil</Text>
          </View>
          <View style={[styles.incioParent, styles.incioLayout]}>
            <Text style={[styles.incio, styles.incioLayout]}>Início</Text>
            <Image
              style={[styles.icon6, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/2.png")}
            />
          </View>
        </View>
      </View>
    </View>
  </ScrollView>);
};

const styles = StyleSheet.create({
  iconLayout4: {
    height: 80,
    width: 81,
    position: "absolute",
  },
  frameLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  catduoggTypo: {
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
    color: Color.colorTan_200,
    position: "absolute",
  },
  telaLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupPressablePosition: {
    left: "86.67%",
    bottom: "89.07%",
    right: "7.69%",
    top: "8.52%",
    width: "5.64%",
    height: "2.4%",
    position: "absolute",
  },
  parentPosition1: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorGray_100,
    width: 390,
    left: 0,
    position: "absolute",
  },
  catdouggTypo: {
    height: 15,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    width: 101,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  saibaTypo: {
    left: 17,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 20,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition1: {
    left: "4.62%",
    width: "5.38%",
    right: "90%",
  },
  iconLayout2: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  framePosition: {
    left: "25.13%",
    right: "69.72%",
    width: "5.15%",
    height: 20,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameChild1Layout: {
    height: 57,
    backgroundColor: Color.colorPeru_200,
    width: 390,
    position: "absolute",
  },
  saibaLayout: {
    height: 14,
    width: 56,
    color: Color.colorWhite,
  },
  saibaMais2Typo: {
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "15.13%",
    right: "80.26%",
    width: "4.62%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout1: {
    height: 417,
    width: 390,
    left: 0,
    position: "absolute",
  },
  menuPosition: {
    height: 55,
    bottom: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    width: 43,
    bottom: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 20,
    overflow: "hidden",
    position: "absolute",
  },
  perfilLayout: {
    height: 11,
    width: 28,
    position: "absolute",
  },
  incioLayout: {
    width: 30,
    position: "absolute",
  },
  image6Icon: {
    top: 117,
    left: 106,
  },
  image7Icon: {
    top: 114,
    left: 11,
  },
  image8Icon: {
    left: 203,
    top: 119,
  },
  image9Icon: {
    left: 299,
    top: 122,
  },
  telaInicialOngChild: {
    top: 121,
    width: 76,
    height: 76,
    left: 205,
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 110,
    top: 122,
  },
  container: {
    left: 15,
    top: 119,
  },
  frame: {
    left: 303,
    top: 127,
  },
  pelosePlumas: {
    top: 199,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
    left: 106,
  },
  ssobrePatas: {
    top: 199,
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
    left: 205,
  },
  catduogg: {
    top: 200,
    left: 310,
  },
  petHub: {
    top: 70,
    left: 26,
    fontSize: FontSize.size_9xl,
    height: 29,
    width: 101,
    textAlign: "left",
    color: Color.colorTan_200,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  telaInicialOngItem: {
    height: "1.4%",
    width: "3.08%",
    top: "21.53%",
    right: "85.38%",
    bottom: "77.07%",
    left: "11.54%",
    position: "absolute",
  },
  telaInicialOngInner: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  groupChild: {
    height: 43,
    top: 0,
  },
  groupItem: {
    top: 374,
    height: 1578,
  },
  ssobrePatas1: {
    top: 15,
    left: 53,
  },
  cachorrosDesabrigadosNo: {
    top: 81,
    left: 42,
    fontSize: FontSize.size_base,
    width: 321,
    height: 19,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  rectangleParent: {
    height: 1952,
    top: 0,
  },
  resgateAnimal: {
    color: Color.colorDarkolivegreen,
  },
  estesCachorrinhosEsto: {
    color: Color.colorTan_200,
  },
  resgateAnimalEstesCachorriContainer: {
    top: 556,
    width: 356,
    height: 86,
  },
  vectorIcon: {
    width: "5.9%",
    left: "4.1%",
    height: 21,
    right: "90%",
    top: 533,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    left: "4.62%",
    width: "5.38%",
    right: "90%",
    top: 1118,
  },
  vectorIcon2: {
    top: 1705,
    height: 19,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameChild: {
    width: "5.67%",
    right: "69.38%",
    left: "24.95%",
    height: 22,
    top: 533,
    position: "absolute",
  },
  frameItem: {
    top: 1119,
  },
  frameInner: {
    top: 1702,
  },
  vectorIcon3: {
    width: "5.13%",
    right: "80%",
    left: "14.87%",
    top: 533,
  },
  rectangleView: {
    top: 460,
    left: -1,
  },
  saibaMais: {
    top: 481,
    left: 17,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  catdougg: {
    top: 1252,
    left: 77,
  },
  catdouggGenteEssaContainer: {
    top: 1735,
    width: 337,
    height: 16,
  },
  oiiGalerinhaEstes: {
    color: Color.colorTan_100,
  },
  pelosePlumas1: {
    top: 1145,
    width: 348,
    height: 17,
  },
  vectorIcon4: {
    top: 1118,
    height: 19,
  },
  vectorIcon5: {
    height: 18,
    top: 1705,
  },
  ellipseIcon: {
    top: 1244,
    left: 29,
    width: 38,
    height: 31,
    position: "absolute",
  },
  saibaMais1: {
    top: 1071,
    left: 17,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  image11Icon: {
    top: 1275,
  },
  frameChild1: {
    top: 1635,
    left: 0,
    backgroundColor: Color.colorPeru_200,
  },
  saibaMais2: {
    top: 1656,
    height: 14,
    width: 56,
    color: Color.colorWhite,
  },
  rectangleIcon: {
    top: 43,
  },
  frameChild2: {
    top: 3,
    left: 8,
    width: 37,
    height: 37,
    position: "absolute",
  },
  groupParent: {
    top: 214,
    height: 646,
  },
  menuChild: {
    backgroundColor: Color.colorPeru_100,
  },
  icon4: {
    left: 10,
    bottom: 27,
  },
  publicar: {
    height: 23,
    color: Color.colorBlack,
    width: 43,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
  },
  parent: {
    left: 172,
    height: 47,
  },
  icon5: {
    height: "100%",
    width: "100%",
  },
  wrapper1: {
    left: "76.92%",
    right: "18.46%",
    bottom: 27,
    width: "4.62%",
    height: 19,
    position: "absolute",
  },
  perfil: {
    bottom: 0,
    color: Color.colorBlack,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
  },
  perfilWrapper: {
    bottom: 11,
    left: 295,
  },
  incio: {
    height: 13,
    bottom: 0,
    color: Color.colorBlack,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xs,
  },
  icon6: {
    bottom: 16,
    left: 2,
  },
  incioParent: {
    bottom: 10,
    left: 67,
    height: 36,
  },
  telaInicialOng: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 915,
    width: "100%",
  },
});

export default TELAINICIALONG;
