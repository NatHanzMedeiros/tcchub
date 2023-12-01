import * as React from "react";
import { StyleSheet, View, Text, Pressable , ScrollView} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={[styles.iphone13141, styles.iconLayout]}>
      <View style={[styles.iphone13141Child, styles.iphone13141Position]} />
      <View style={[styles.iphone13141Item, styles.iphone13141Position]} />
      <Text style={styles.novaPublicao}>Nova publicação</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.chevronRightIcon}
        contentFit="cover"
        source={require("../assets/chevronright.png")}
      />
      <Pressable
        style={[styles.image, styles.imageLayout]}
        onPress={() => navigation.navigate("NovaPublicao")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
      </Pressable>
      <Pressable
        style={styles.camera}
        onPress={() => navigation.navigate("NovaPublicao")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/camera.png")}
        />
      </Pressable>
      <Image
        style={[styles.trash2Icon, styles.imageLayout]}
        contentFit="cover"
        source={require("../assets/trash2.png")}
      />
      <Text style={[styles.escolherNaBiblioteca, styles.fotoTypo]}>
        Escolher na biblioteca
      </Text>
      <Text style={[styles.tirarFoto, styles.fotoTypo]}>Tirar foto</Text>
      <Text
        style={[styles.removerFoto, styles.fotoTypo]}
      >{`Remover foto `}</Text>
    </View>
  </ScrollView>);
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iphone13141Position: {
    width: 390,
    backgroundColor: Color.colorTan_100,
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    width: 22,
    position: "absolute",
  },
  fotoTypo: {
    height: 16,
    width: 140,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 140,
    color: Color.colorWhite,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iphone13141Child: {
    top: 10,
    height: 84,
  },
  iphone13141Item: {
    top: 510,
    height: 534,
  },
  novaPublicao: {
    top: 46,
    left: 65,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 259,
    height: 53,
    color: Color.colorWhite,
    fontFamily: FontFamily.ovo,
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
    position: "absolute",
    overflow: "hidden",
  },
  chevronRightIcon: {
    top: 44,
    left: 336,
    width: 31,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  image: {
    left: 110,
    top: 555,
    height: 23,
  },
  camera: {
    left: 112,
    top: 660,
    width: 19,
    height: 22,
    position: "absolute",
  },
  trash2Icon: {
    top: 610,
    left: 110,
    height: 21,
    overflow: "hidden",
  },
  escolherNaBiblioteca: {
    top: 560,
  },
  tirarFoto: {
    top: 664,
  },
  removerFoto: {
    top: 613,
  },
  iphone13141: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13141;
