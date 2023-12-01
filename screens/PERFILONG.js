import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PERFILONG = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.perfilong}>
      <Image
        style={styles.perfilongChild}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <Image
        style={[styles.perfilongItem, styles.perfilongLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Image
        style={[styles.perfilongInner, styles.perfilongLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Text style={styles.ong}>Ong_</Text>
      <Text style={[styles.loverPet, styles.loverPetPosition]}>Lover_pet</Text>
      <Text style={[styles.unindoCoraesProtegendo, styles.loverPetPosition]}>
        Unindo corações, protegendo patinhas
      </Text>
      <Text style={styles.avenidaBorgesDe}>
        Avenida Borges de Medeiros 997, Rio de Janeiro, Rio de Janeiro
      </Text>
      <Text style={[styles.publicaes, styles.metasTypo]}>Publicações</Text>
      <Text style={[styles.seguidores, styles.metasTypo]}>Seguidores</Text>
      <Text style={[styles.metas, styles.metasTypo]}>Metas</Text>
      <Text style={[styles.text, styles.textTypo]}>{`3
`}</Text>
      <Text style={[styles.text1, styles.textTypo]}>2.450</Text>
      <Text style={[styles.text2, styles.textTypo]}>{`4 `}</Text>
      <Text style={[styles.editar, styles.textTypo]}>Editar</Text>
      <Pressable
        style={styles.suasMetas}
        onPress={() => navigation.navigate("PerfilSuasDoaes1")}
      >
        <Text style={styles.textTypo}>Suas metas</Text>
      </Pressable>
      <Image
        style={[styles.image12Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Image
        style={[styles.image13Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={[styles.image14Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
    </View>
 </ScrollView> );
};

const styles = StyleSheet.create({
  perfilongLayout: {
    height: 26,
    width: 146,
    borderRadius: Border.br_9xs,
    left: 210,
    position: "absolute",
  },
  loverPetPosition: {
    left: 60,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  metasTypo: {
    top: 294,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
  },
  iconLayout: {
    height: 145,
    width: 125,
    top: 349,
    position: "absolute",
  },
  perfilongChild: {
    top: 98,
    left: 38,
    width: 106,
    height: 103,
    position: "absolute",
  },
  perfilongItem: {
    top: 130,
  },
  perfilongInner: {
    top: 162,
  },
  ong: {
    top: 62,
    left: 67,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  loverPet: {
    top: 206,
    fontSize: FontSize.size_mini,
  },
  unindoCoraesProtegendo: {
    top: 223,
    fontSize: FontSize.size_xs,
    width: 165,
  },
  avenidaBorgesDe: {
    top: 256,
    color: "#505050",
    width: 175,
    fontSize: FontSize.size_3xs,
    left: 60,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  publicaes: {
    left: 51,
  },
  seguidores: {
    left: 151,
  },
  metas: {
    left: 216,
  },
  text: {
    left: 42,
    top: 291,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text1: {
    left: 110,
    top: 291,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text2: {
    left: 206,
    top: 291,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  editar: {
    top: 134,
    left: 262,
    position: "absolute",
  },
  suasMetas: {
    left: 244,
    top: 166,
    position: "absolute",
  },
  image12Icon: {
    left: 0,
  },
  image13Icon: {
    left: 132,
  },
  image14Icon: {
    left: 265,
  },
  perfilong: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PERFILONG;
