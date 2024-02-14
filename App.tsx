import React from 'react';
import type {PropsWithChildren} from 'react';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Splash from './screens/splash.';
import menu from './screens/menu';

const stack = createStackNavigator();
export default class App extends react.Component{

  render(){
    return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.screen name "splash" component ={Splash} options ={{headerShown:false}}/>
        <stack.screen name "menu" component = {menu}/>
      </stack.Navigator>
    </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent:"center",
  }
});