import React, { useReducer, useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import readState, {
  GlobalContext,
  initialState,
  reducer,
} from "./util/context";
import { StatusBar } from "expo-status-bar";
import ModuleScreen from "./screens/ModuleScreen";
import ContentScreen from "./screens/ContentScreen";
import CorrectIncorrectScreen from "./screens/CorrectIncorrectScreen";
import bgrd from "./assets/background.jpg";
import Modules from "./data/Modules.json";

const Stack = createStackNavigator();
function App() {
  readState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    dispatch({
      type: "LOAD",
      payload: {
        modules: readState(Modules),
        background: bgrd,
      },
    });
    setLoading(false);
  }, [loading]);

  return loading ? null : (
    <GlobalContext.Provider value={[state, dispatch]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Module"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Module" component={ModuleScreen} />
          <Stack.Screen name="Content" component={ContentScreen} />
          <Stack.Screen name="Home" component={ModuleScreen} />
          <Stack.Screen
            name="CorrectIncorrect"
            component={CorrectIncorrectScreen}
          />
        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}

export default App;
