import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
    ProfileStackScreen,
    CartStackScreen,
    OrdersStackScreen,
    MoreStackScreen 
} from "./StackNav"; 

import DrawerContent from "../components/DrawerContents";
import nav from "./MaterialBottomTabNav";

const Drawer = createDrawerNavigator();

export default function MyDrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent { ...props} /> } >
                <Drawer.Screen name="Home" component={nav} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen} />
                <Drawer.Screen name="Cart" component={CartStackScreen} />
                <Drawer.Screen name="Orders" component={OrdersStackScreen} />
                <Drawer.Screen name="More" component= {MoreStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
  }