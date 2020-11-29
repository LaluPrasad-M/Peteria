import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import ProfileScreen from "../screen/profile";
import CartScreen from "../screen/cart";
import OrdersScreen from "../screen/myorders";
import MoreScreen from "../screen/More About Us";

import AdoptScreen from "../screen/adopt";
import BuyScreen from "../screen/Buy";
import SellScreen from "../screen/sell";


const ProfileStack = createStackNavigator();
const CartStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const MoreStack = createStackNavigator();

const AdoptStack = createStackNavigator();
const BuyStack = createStackNavigator();
const SellStack = createStackNavigator();


const backgroundColor = 'red';
const headerTintColor = "white"; 

export const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }} >
        <ProfileStack.Screen name="Profile"component={ProfileScreen}
        options = {{
            title:"Profile",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </ProfileStack.Navigator>
)

export const CartStackScreen = ({navigation}) => (
    <CartStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }} >
        <CartStack.Screen name="Cart"component={CartScreen}
        options = {{
            title:"Cart",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </CartStack.Navigator>
)

export const OrdersStackScreen = ({navigation}) => (
    <OrdersStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }} >
        <OrdersStack.Screen name="Orders"component={OrdersScreen}
        options = {{
            title:"Orders",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </OrdersStack.Navigator>
)

export const MoreStackScreen = ({navigation}) => (
    <MoreStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <MoreStack.Screen name="More"component={MoreScreen}
        options = {{
            title:"More",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </MoreStack.Navigator>
)

export const AdoptStackScreen = ({navigation}) => (
    <AdoptStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <AdoptStack.Screen name="Adopt"component={AdoptScreen}
        options = {{
            title:"Adopt",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </AdoptStack.Navigator>
)

export const BuyStackScreen = ({navigation}) => (
    <BuyStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <BuyStack.Screen name="Buy"component={BuyScreen}
        options = {{
            title:"Buy",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </BuyStack.Navigator>
)

export const SellStackScreen = ({navigation}) => (
    <SellStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <SellStack.Screen name="Sell"component={SellScreen}
        options = {{
            title:"Sell",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </SellStack.Navigator>
)