import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MONTARPERFIL = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.montarPerfil}>
      <Image
        style={styles.montarPerfilChild}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <Text style={[styles.nomeapelido, styles.bioTypo]}>Nome/Apelido:</Text>
      <Text style={[styles.bio, styles.bioTypo]}>Bio:</Text>
      <Image
        style={[styles.montarPerfilItem, styles.montarLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={[styles.montarPerfilInner, styles.montarLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.confirmar}>CONFIRMAR</Text>
      <Text style={styles.perfil}>PERFIL</Text>
      <View style={styles.lineView} />
      <Text style={[styles.obrigatrio, styles.obrigatrioTypo]}>
        *obrigatório
      </Text>
      <Text style={[styles.obrigatrio1, styles.obrigatrioTypo]}>
        *obrigatório
      </Text>
      <Text style={[styles.links, styles.bioTypo]}>Links:</Text>
      <Image
        style={[styles.lineIcon, styles.montarLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <View style={styles.montarPerfilChild1} />
      <View style={styles.montarPerfilChild2} />
      <Image
        style={[styles.imageIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <Image
        style={[styles.cameraIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/camera1.png")}
      />
      <Image
        style={[styles.trash2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/trash21.png")}
      />
      <Text style={[styles.escolherNaBiblioteca, styles.fotoTypo]}>
        Escolher na biblioteca
      </Text>
      <Text style={[styles.tirarFoto, styles.fotoTypo]}>Tirar foto</Text>
      <Text
        style={[styles.removerFoto, styles.fotoTypo]}
      >{`Remover foto `}</Text>
   
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  bioTypo: {
    textAlign: "left",
    color: Color.colorTan_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  montarLayout: {
    height: 2,
    width: 267,
    position: "absolute",
  },
  obrigatrioTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorTan_100,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  fotoTypo: {
    height: 16,
    width: 140,
    fontSize: FontSize.size_sm,
    left: 122,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  montarPerfilChild: {
      left: 132,
      top: 117,
      width: 106,
      height: 103,
      position: "absolute",
    },
  nomeapelido: {
    top: 278,
    left: 54,
  },
  bio: {
    top: 367,
    left: 54,
  },
  montarPerfilItem: {
    top: 332,
    left: 52,
  },
  montarPerfilInner: {
    top: 422,
    left: 53,
  },
  rectangleView: {
    top: 631,
    left: 47,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTan_100,
    width: 295,
    height: 70,
    position: "absolute",
  },

  
  confirmar: {
    top: 655,
    left: 134,
    width: 121,
    height: 21,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.ovo,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
 perfil: {
    top: 49,
    left: 112,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 147,
    height: 54,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  lineView: {
    top: 90,
    left: 120,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    width: 130,
    height: 1,
    position: "absolute",
  },
  obrigatrio: {
    top: 286,
    left: 252,
  },
  obrigatrio1: {
    top: 374,
    left: 251,
  },
  links: {
    top: 448,
    left: 55,
  },
  lineIcon: {
    top: 503,
    left: 54,
  },
  montarPerfilChild1: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(11, 8, 4, 0.4)",
    width: 390,
    position: "absolute",
    height: 844,
  },
  montarPerfilChild2: {
    top: 273,
    left: 61,
    borderRadius: 5,
    backgroundColor: Color.colorWhite,
    width: 252,
    height: 165,
    position: "absolute",
  },
  imageIcon: {
    top: 301,
    left: 92,
    height: 23,
    width: 22,
    overflow: "hidden",
  },
  cameraIcon: {
    top: 345,
    left: 94,
    width: 19,
    height: 22,
  },
  trash2Icon: {
    top: 385,
    left: 93,
    width: 22,
    overflow: "hidden",
    height: 21,
  },
  escolherNaBiblioteca: {
    top: 308,
  },
  tirarFoto: {
    top: 351,
  },
  removerFoto: {
    top: 392,
  },
  vectorIcon: {
    height: "1.54%",
    width: "2.56%",
    top: "34.18%",
    right: "21.67%",
    bottom: "64.28%",
    left: "75.77%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  montarPerfil: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default MONTARPERFIL;
