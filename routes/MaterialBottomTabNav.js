import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import {
  AdoptStackScreen,
  SellStackScreen,
  BuyStackScreen,
} from "./StackNav"; 

// import  AdoptStackScreen from "../screen/adopt";
// import SellStackScreen from "../screen/sell";
// import BuyStackScreen from "../screen/Buy";
 
const Tab = createMaterialBottomTabNavigator();


export default function  MyTabsNavigator() {
  return (
      <Tab.Navigator
        initialRouteName="Buy"
        activeColor="#fff"
        shifting={true}
      >
          <Tab.Screen name="Adopt" component={AdoptStackScreen}
            options={{
              tabBarLabel:"Adopt",
              tabBarColor:"red",
              tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="md-person" color={color} size={25} />
              )
            }}/>
          <Tab.Screen name="Buy" component={BuyStackScreen} 
            options={{ 
              tabBarLabel:"Buy",
              tabBarColor:"blue",
              tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="md-cart" color={color} size={25} />
              )
            }}/>
          <Tab.Screen name="Sell" component={SellStackScreen}
            options={{
              tabBarLabel: "Sell",
              tabBarColor:"green",
              tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="md-clipboard" color={color} size={25} />
              )
            }} />
      </Tab.Navigator>
  );
}