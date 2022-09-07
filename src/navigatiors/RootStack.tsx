import React, { FunctionComponent, Profiler } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greenting";
import Profile from "../components/Header/Profile";
import Avi from "../assets/avi/avatar.png";

export type RootStackParamList = {
  Welcome: undefined;
  Home: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting mainText="Hey Coby" subText="Welcome Back" {...props} />
            ),
            headerLeft: () => (
              <Profile
                img={Avi}
                imgContainerStyle={{ backgroundColor: colors.tertiary }}
              />
            ),
          }}
        />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
