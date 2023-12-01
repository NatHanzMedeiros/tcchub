import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TERMOSDEPRIV = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.termosDePriv}>
      <Text style={[styles.aceitoOsTermos, styles.continuar1FlexBox]}>
        Aceito os termos de privacidade
      </Text>
      <View
        style={[styles.termosDePrivChild, styles.termosDePrivChildBorder]}
      />
      <View
        style={[
          styles.termoDePrivacidadeDoAplicaWrapper,
          styles.termosDePrivChildBorder,
        ]}
      >
        <Text
          style={[styles.termoDePrivacidadeContainer, styles.continuar1FlexBox]}
        >
          
          <Text
            style={[styles.termoDePrivacidade, styles.termoDePrivacidadeTypo]}
          >{`Termo de Privacidade do Aplicativo "Pet Hub"
`}</Text>
          <Text style={styles.bemVindoAoAplicativoPetH}>
            <Text style={styles.bemVindoAoAplicativo}>{`
Bem-vindo ao aplicativo "Pet Hub". Nosso objetivo é fornecer informações e recursos úteis para amantes de animais de estimação e promover o bem-estar de animais de estimação em todo o mundo. Valorizamos sua privacidade e este Termo de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
Informações Pessoais Coletadas
Ao usar o Aplicativo "Pet Hub", podemos coletar as seguintes informações pessoais:
`}</Text>
            <Text style={styles.termoDePrivacidadeTypo}>
              Informações de Registro:
            </Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{` Isso pode incluir seu nome, endereço de e-mail, senha e informações de contato adicionais, como número de telefone.
`}</Text>
            <Text style={styles.termoDePrivacidadeTypo}>
              Informações do Perfil:
            </Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{` Você pode optar por fornecer informações adicionais em seu perfil, como uma foto de perfil, informações sobre seu animal de estimação, nome e raça do seu animal de estimação, e outras informações relevantes.
`}</Text>
            <Text style={styles.termoDePrivacidadeTypo}>
              Interesses e Preferências:
            </Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{` Coletamos informações sobre seus interesses e preferências relacionados a animais de estimação, como o tipo de animal que você possui e os tópicos de seu interesse.
`}</Text>
            <Text style={styles.termoDePrivacidadeTypo}>
              Informações de Uso:
            </Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{` Coletamos informações sobre como você usa o Aplicativo, incluindo suas interações com o conteúdo, artigos, vídeos e outras funcionalidades.

`}</Text>
            <Text
              style={styles.termoDePrivacidadeTypo}
            >{`Como Usamos Suas Informações Pessoais
Utilizamos suas informações pessoais para os seguintes fins:

`}</Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{`Personalizar sua experiência no Aplicativo "Pet Hub" com base em seus interesses e preferências.
Fornecer informações úteis e recursos relacionados a animais de estimação.
Enviar comunicações relacionadas ao Aplicativo, como notícias, atualizações e informações relevantes.
Melhorar a funcionalidade do Aplicativo com base no feedback dos usuários.
`}</Text>
            <Text
              style={styles.termoDePrivacidadeTypo}
            >{`Compartilhamento de Informações

`}</Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{`Nós não compartilhamos suas informações pessoais com terceiros fora do escopo das funcionalidades do Aplicativo "Pet Hub" sem seu consentimento. Podemos compartilhar informações agregadas e não identificáveis para fins estatísticos e de análise.

`}</Text>
            <Text style={styles.termoDePrivacidadeTypo}>{`Suas Opções
`}</Text>
            <Text style={styles.bemVindoAoAplicativo}>{`
Você tem controle sobre suas informações pessoais. Você pode acessar e atualizar suas informações de perfil a qualquer momento nas configurações do Aplicativo. Além disso, você pode optar por não receber comunicações promocionais nossas.

`}</Text>
            <Text style={styles.termoDePrivacidadeTypo}>{`Segurança de Dados

`}</Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{`Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado. No entanto, nenhuma medida de segurança é totalmente infalível.

`}</Text>
            <Text
              style={styles.termoDePrivacidadeTypo}
            >{`Alterações no Termo de Privacidade
`}</Text>
            <Text style={styles.bemVindoAoAplicativo}>{`
Reservamos o direito de atualizar este Termo de Privacidade conforme necessário para refletir mudanças em nossas práticas ou regulamentações. Recomendamos que você revise periodicamente este Termo de Privacidade para se manter informado sobre como suas informações estão sendo protegidas.

`}</Text>
            <Text style={styles.termoDePrivacidadeTypo}>{`Contato

`}</Text>
            <Text
              style={styles.bemVindoAoAplicativo}
            >{`Se você tiver alguma dúvida sobre este Termo de Privacidade ou sobre o Aplicativo "Pet Hub", entre em contato conosco em [Endereço de e-mail de contato].
Agradecemos por usar o Aplicativo "Pet Hub" e por seu comprometimento com o bem-estar dos animais de estimação. Juntos, fazemos a diferença.`}</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.termosDePrivItem} />
      <Pressable
        style={styles.continuar}
        onPress={() => navigation.navigate("LOGINUSUARIO")}
      >
        <Text style={[styles.continuar1, styles.continuar1FlexBox]}>
          CONTINUAR
        </Text>
      </Pressable>
      <Text style={styles.termoDePrivacidade1}>Termo de Privacidade</Text>
    </View>
 </ScrollView>
  );
};

const styles = StyleSheet.create({
  continuar1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  termosDePrivChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  termoDePrivacidadeTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
  },
  aceitoOsTermos: {
    top: 643,
    left: 111,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  termosDePrivChild: {
    top: 641,
    left: 84,
    borderRadius: Border.br_9xs,
    backgroundColor: "rgba(189, 145, 80, 0)",
    width: 19,
    height: 18,
  },
  termoDePrivacidade: {
    fontSize: FontSize.size_xl,
  },
  bemVindoAoAplicativo: {
    fontFamily: FontFamily.openSansRegular,
  },
  bemVindoAoAplicativoPetH: {
    fontSize: FontSize.size_mini,
  },
  termoDePrivacidadeContainer: {
    top: 9,
    left: 25,
    width: 267,
    height: 2421,
    position: "absolute",
  },
  termoDePrivacidadeDoAplicaWrapper: {
    top: 173,
    left: 39,
    width: 312,
    height: 438,
  },
  termosDePrivItem: {
    top: 743,
    left: 47,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTan_100,
    width: 295,
    height: 70,
    position: "absolute",
  },
  continuar1: {
    width: 121,
    height: 21,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ovo,
  },
  continuar: {
    left: 134,
    top: 767,
    position: "absolute",
  },
  termoDePrivacidade1: {
    top: 90,
    right: 15,
    fontSize: 28,
    color: Color.colorTan_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 35,
    fontFamily: FontFamily.ovo,
    position: "absolute",
  },
  termosDePriv: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TERMOSDEPRIV;
