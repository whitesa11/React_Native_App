import React, {Component} from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import firebase from './Firebase';

import Loading from "./Screen/loading";
import SignUp from "./Screen/signUp";
import Login from "./Screen/login";
import TopMain from "./Screen/topMain";

const AppStack = createStackNavigator({ Home: TopMain });
const AuthSignUp = createStackNavigator({ SignUp: SignUp });
const AuthLogin = createStackNavigator({ LogIn: Login });

const AppNav = createSwitchNavigator(
  {
    AuthLoading: Loading,
    AuthSignUp: AuthSignUp,
    AuthLogin: AuthLogin,
    App: AppStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default AppNav;
