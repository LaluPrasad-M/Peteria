import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import ProfileScreen from "../screen/profile";
import CartScreen from "../screen/cart";
import OrdersScreen from "../screen/myorders";
import MoreScreen from "../screen/More About Us";

import AdoptScreen from "../screen/adopt";
import BuyScreen from "../screen/Buy";
import NotificationScreen from "../screen/notification";

import PetDetailsScreen from "../screen/PetsDetails";
import AdoptionPetDetailsScreen from "../screen/adoptionPetDetails";

import AdoptedPetsListScreen from "../screen/myAdoptions";
import HeaderDataScreen from "../screen/HeaderData";


const ProfileStack = createStackNavigator();
const CartStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const MoreStack = createStackNavigator();

const AdoptStack = createStackNavigator();
const BuyStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const PetDetailsStack = createStackNavigator();
const AdoptionPetDetailsStack = createStackNavigator();

const AdoptedPetsListStack = createStackNavigator();
const HeaderDataStack = createStackNavigator();

const darkgreencolor = '#00b020';
const lightgreencolor = '#57FF89';

const backgroundColor = darkgreencolor;
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

export const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <NotificationStack.Screen name="Notification"component={NotificationScreen}
        options = {{
            title:"Notification",
            headerLeft:() => (
                <Icon.Button name="md-menu" size={25}
                backgroundColor={backgroundColor} onPress={() => navigation.openDrawer()}
                ></Icon.Button>
            )
        }} />
    </NotificationStack.Navigator>
)

export const PetDetailsStackScreen = ({navigation}) => (
    <PetDetailsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <PetDetailsStack.Screen name="Pet Details"component={PetDetailsScreen}
        options = {{
            title:"PetDetails",
            headerLeft:() => (
                <Icon.Button name="md-arrow-back" size={25}
                    backgroundColor={backgroundColor} onPress={() => navigation.goBack()}
                ></Icon.Button>
            )
        }} />
    </PetDetailsStack.Navigator>
)

export const AdoptionPetDetailsStackScreen = ({navigation}) => (
    <AdoptionPetDetailsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <AdoptionPetDetailsStack.Screen name="Adopt Me"component={AdoptionPetDetailsScreen}
        options = {{
            title:"AdoptionPetDetails",
            headerLeft:() => (
                <Icon.Button name="md-arrow-back" size={25}
                    backgroundColor={backgroundColor} onPress={() => navigation.goBack()}
                ></Icon.Button>
            )
        }} />
    </AdoptionPetDetailsStack.Navigator>
)

export const AdoptedPetsListStackScreen = ({navigation}) => (
    <AdoptedPetsListStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <AdoptedPetsListStack.Screen name="Adopted Pets"component={AdoptedPetsListScreen}
        options = {{
            title:"PetDetails",
            headerLeft:() => (
                <Icon.Button name="md-arrow-back" size={25}
                    backgroundColor={backgroundColor} onPress={() => navigation.goBack()}
                ></Icon.Button>
            )
        }} />
    </AdoptedPetsListStack.Navigator>
)

export const HeaderDataStackScreen = ({navigation}) => (
    <HeaderDataStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:backgroundColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle:{
            fontWeight:'bold',
        }
    }} >
        <HeaderDataStack.Screen name="Pets"component={HeaderDataScreen}
        options = {{
            title:"PetDetails",
            headerLeft:() => (
                <Icon.Button name="md-arrow-back" size={25}
                    backgroundColor={backgroundColor} onPress={() => navigation.goBack()}
                ></Icon.Button>
            )
        }} />
    </HeaderDataStack.Navigator>
)