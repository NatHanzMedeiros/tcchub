import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TELAINICIALUSURIO = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.telaInicialUsurio}>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-101.png")}
          />
          <Text style={[styles.resgateAnimal, styles.catdouggTypo]}>
            resgate_animal.
          </Text>
          <Image
            style={styles.image5Icon}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={styles.cachorrosDesabrigadosNo}>
            Cachorros desabrigados no alagamento de SC
          </Text>
        </View>
        <Text
          style={[styles.resgateAnimalGaleraBoaContainer, styles.saibaTypo]}
        >
          <Text style={styles.resgateAnimal1}>resgate_animal:</Text>
          <Text style={styles.galeraBoaTarde}>
            {" "}
            Galera, boa tarde, preciso da ajuda de vcs, ontem às 3 horas da
            tarde, 10 cachorros foram resgatados de dentro do rio, eles estavam
            nadando contra a correnteza do rio. Todos estão em estado
            deplorável, cansados, com fome e alguns feridos. Qualquer quantia
            que você doar, para ajudar a pagar as despesas com o veterinario e
            alimento, será bem vindo!!!
          </Text>
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition2]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.frameChild, styles.vectorIconPosition2]}
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
          style={[styles.vectorIcon3, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <View style={[styles.rectangleView, styles.frameChildLayout]} />
       
        <Text style={[styles.catdougg, styles.catdouggTypo]}>catdougg.-.</Text>
        <Text
          style={[styles.catdouggGenteEssaContainer, styles.saibaMais2Typo]}
        >
          <Text style={styles.resgateAnimal1}>{`catdougg.-.: `}</Text>
          <Text
            style={styles.galeraBoaTarde}
          >{`Gente, essa é a Jade, ela está com um tumor na cabeça e está precisando terminar seu tratamento, já pagamos 3 sessões, e por falta de dinheiro não conseguimos terminá-las. Ainda faltam 6 sessões, que resultaram em R$ 2.400,00 no total, qualquer quantia doada será bem vinda para bater a meta.
`}</Text>
        </Text>
        <Text style={[styles.pelosePlumas, styles.saibaMais2Typo]}>
          <Text style={styles.resgateAnimal1}>pelos.e_plumas:</Text>
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
          style={[styles.ellipseIcon, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-103.png")}
        />
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text
          style={[styles.saibaMais1, styles.saibaLayout]}
        >{`saiba mais `}</Text>
        <Image
          style={[styles.image11Icon, styles.groupParentPosition]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <Text
          style={[styles.saibaMais2, styles.saibaMais2Typo]}
        >{`saiba mais `}</Text>
      </View>
      <Image
        style={[styles.image6Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.image7Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.image9Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={styles.telaInicialUsurioChild}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("STORY1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-61.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("STORY")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("STORY2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
      </Pressable>
      <Text style={[styles.pelosePlumas2, styles.ssobrePatasTypo]}>
        pelos.e_plumas
      </Text>
      <Text style={[styles.ssobrePatas, styles.ssobrePatasTypo]}>
        ssobre._patas
      </Text>
      <Text style={[styles.catduogg, styles.saibaTypo]}>catduogg.-.</Text>
      <Text style={styles.petHub}>Pet hub</Text>
      <Image
        style={[styles.telaInicialUsurioItem, styles.icon3Layout]}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("AbaDePesquisa")}
      >
        <Image
          style={[styles.icon3, styles.icon3Layout]}
          contentFit="cover"
          source={require("../assets/group-23.png")}
        />
      </Pressable>
      <View style={styles.menuPosition}>
        <View style={styles.menuPosition}>
          <View style={[styles.menuChild, styles.menuPosition]} />
          <Pressable
            style={styles.wrapper1}
            onPress={() => navigation.navigate("PERFIL")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-81.png")}
            />
          </Pressable>
          <View style={[styles.perfilWrapper, styles.perfilLayout]}>
            <Text style={[styles.perfil, styles.perfilLayout]}>Perfil</Text>
          </View>
          <View style={[styles.incioParent, styles.incioLayout]}>
            <Text style={[styles.incio, styles.incioLayout]}>Início</Text>
            <Image
              style={[styles.icon5, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/1.png")}
            />
          </View>
        </View>
      </View>
    </View>
 </ScrollView> );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorGray_100,
    
    left: 1,
    width: 390,
    position: "absolute",
  },
  groupInnerLayout: {
    
    height: 31,
    width: 38,
    position: "absolute",
  },
  catdouggTypo: {
    height: 15,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    width: 101,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  saibaTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  vectorIconPosition2: {
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout2: {
    height: 20,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconPosition1: {
    left: "4.62%",
    width: "5.38%",
    maxWidth: "100%",
    right: "90%",
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


  vectorIconPosition: {
    left: "15.13%",
    right: "80.26%",
    width: "4.62%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout1: {
    height: 80,
    width: 81,
    position: "absolute",
  },
  frameLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  ssobrePatasTypo: {
    top: 199,
    color: Color.colorTan_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  icon3Layout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  menuPosition: {
    height: 55,
    bottom: 0,
    width: 390,
    left: 0,
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
  groupChild: {
    height: 43,
    top: 32,
  },
  groupItem: {
    top: 374,
    height: 1578,
  },
  groupInner: {
    top: 39,
    left: 16,
  },
  resgateAnimal: {
    top: 48,
    left: 54,
  },
  image5Icon: {
    top: 75,
    height: 419,
    left: 1,
    width: 390,
    position: "absolute",
  },
  cachorrosDesabrigadosNo: {
    top: 81,
    left: 43,
    fontSize: FontSize.size_base,
    width: 321,
    height: 19,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  rectangleParent: {
    width: 391,
    height: 1952,
    left: -1,
    top: 0,
    position: "absolute",
  },
  resgateAnimal1: {
    color: Color.colorDarkolivegreen,
  },
  galeraBoaTarde: {
    color: Color.colorTan_200,
  },
  resgateAnimalGaleraBoaContainer: {
    top: 545,
    width: 356,
    height: 86,
    left: 17,
    fontSize: FontSize.size_xs,
  },
 
  vectorIcon1: {
    left: "4.62%",
    width: "5.38%",
    maxWidth: "100%",
    right: "90%",
    marginTop: 515,
  },
  vectorIcon2: {
    marginTop: 515,
    overflow: "hidden",
    position: "absolute",
    height: 19,
  },
  frameChild: {
    width: "5.67%",
    right: "69.38%",
    left: "24.95%",
    height: 22,
    maxWidth: "100%",
    top: 515,
  },
  frameItem: {
    top: 919,
  },
  frameInner: {
    top: 1702,
  },
  vectorIcon3: {
    width: "5.13%",
    right: "80%",
    left: "14.87%",
    maxWidth: "100%",
    marginTop: 515,
  },
  rectangleView: {
    top: 460,
    left: -1,
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
  pelosePlumas: {
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
  },
  frameChild1: {
    top: 1050,
    left: 0,
  },
  saibaMais1: {
    top: 1071,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
    left: 17,
  },
  image11Icon: {
    top: 1275,
    height: 417,
  },
  frameChild2: {
    top: 1635,
    left: 0,
  },
  saibaMais2: {
    top: 1656,
    height: 14,
    width: 56,
    color: Color.colorWhite,
  },
  groupParent: {
    top: 207,
    height: 641,
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
  telaInicialUsurioChild: {
    top: 121,
    width: 76,
    height: 76,
    left: 205,
    position: "absolute",
  },
  iconLayout: {
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
  pelosePlumas2: {
    left: 106,
  },
  ssobrePatas: {
    left: 205,
  },
  catduogg: {
    top: 200,
    left: 310,
    color: Color.colorTan_200,
  },
  petHub: {
    top: 70,
    left: 26,
    fontSize: FontSize.size_9xl,
    height: 29,
    color: Color.colorTan_200,
    width: 101,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  telaInicialUsurioItem: {
    height: "1.4%",
    width: "3.08%",
    top: "21.53%",
    right: "85.38%",
    bottom: "77.07%",
    left: "11.54%",
    position: "absolute",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  groupPressable: {
    left: "86.67%",
    top: "8.52%",
    right: "7.69%",
    bottom: "89.07%",
    width: "5.64%",
    height: "2.4%",
    position: "absolute",
  },
  menuChild: {
    backgroundColor: Color.colorPeru_100,
  },
  wrapper1: {
    right: 110,
    bottom: 27,
    width: 18,
    height: 19,
    position: "absolute",
  },
  perfil: {
    right: 0,
    bottom: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
  },
  perfilWrapper: {
    right: 105,
    bottom: 12,
  },
  incio: {
    height: 13,
    bottom: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    left: 0,
  },
  icon5: {
    bottom: 16,
    left: 2,
    width: 24,
  },
  incioParent: {
    bottom: 9,
    left: 103,
    height: 36,
  },
  telaInicialUsurio: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 915,
    width: "100%",
  },
});

export default TELAINICIALUSURIO;
