const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1313Pro1 from "./screens/IPhone1313Pro1";
import STORY2 from "./screens/STORY2";
import STORY1 from "./screens/STORY1";
import PERFILONG from "./screens/PERFILONG";
import TELAINICIALUSURIO from "./screens/TELAINICIALUSURIO";
import PERFIL from "./screens/PERFIL";
import Turbinar from "./screens/Turbinar";
import NovaPublicao from "./screens/NovaPublicao";
import IPhone13141 from "./screens/IPhone13141";
import MONTARPERFIL from "./screens/MONTARPERFIL";
import TELAINICIALONG from "./screens/TELAINICIALONG";
import STORY from "./screens/STORY";
import MONTARPERFILONG from "./screens/MONTARPERFILONG";
import TERMOSDEPRIV from "./screens/TERMOSDEPRIV";
import MONTARPERFIL1 from "./screens/MONTARPERFIL1";
import LOGINONG from "./screens/LOGINONG";
import CADASTROONG from "./screens/CADASTROONG";
import LOGINUSUARIO from "./screens/LOGINUSUARIO";
import Cadastro from "./screens/Cadastro";
import Doaes from "./screens/Doaes";
import Doaes1 from "./screens/Doaes1";
import Doaes2 from "./screens/Doaes2";
import Doaes21 from "./screens/Doaes21";
import PerfilSuasDoaes from "./screens/PerfilSuasDoaes";
import PerfilSuasDoaesFinalizar from "./screens/PerfilSuasDoaesFinalizar";
import AbaDePesquisa from "./screens/AbaDePesquisa";
import PerfilSuasDoaes1 from "./screens/PerfilSuasDoaes1";
import Turbinar1 from "./screens/Turbinar1";
import Turbinar2 from "./screens/Turbinar2";
import Turbinar3 from "./screens/Turbinar3";
import PerfilSuasDoaes2 from "./screens/PerfilSuasDoaes2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    Ovo: require("./assets/fonts/Ovo.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1313Pro1"
              component={IPhone1313Pro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STORY2"
              component={STORY2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STORY1"
              component={STORY1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PERFILONG"
              component={PERFILONG}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TELAINICIALUSURIO"
              component={TELAINICIALUSURIO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PERFIL"
              component={PERFIL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Turbinar"
              component={Turbinar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NovaPublicao"
              component={NovaPublicao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13141"
              component={IPhone13141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MONTARPERFIL"
              component={MONTARPERFIL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TELAINICIALONG"
              component={TELAINICIALONG}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STORY"
              component={STORY}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MONTARPERFILONG"
              component={MONTARPERFILONG}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TERMOSDEPRIV"
              component={TERMOSDEPRIV}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MONTARPERFIL1"
              component={MONTARPERFIL1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LOGINONG"
              component={LOGINONG}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CADASTROONG"
              component={CADASTROONG}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LOGINUSUARIO"
              component={LOGINUSUARIO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Doaes"
              component={Doaes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Doaes1"
              component={Doaes1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Doaes2"
              component={Doaes2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Doaes21"
              component={Doaes21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilSuasDoaes"
              component={PerfilSuasDoaes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilSuasDoaesFinalizar"
              component={PerfilSuasDoaesFinalizar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AbaDePesquisa"
              component={AbaDePesquisa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilSuasDoaes1"
              component={PerfilSuasDoaes1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Turbinar1"
              component={Turbinar1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Turbinar2"
              component={Turbinar2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Turbinar3"
              component={Turbinar3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilSuasDoaes2"
              component={PerfilSuasDoaes2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
