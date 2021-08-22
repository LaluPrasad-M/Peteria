import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';

import{
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    AuthContext
} from './Context';


export default function DrawerContent(props){
    
    const { signOut } = React.useContext( AuthContext );

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source = {{
                                    uri:"https://avatars3.githubusercontent.com/u/33774869?s=460&u=242f8e0baabc815a910372bfb5ffe49ed37bb8d1&v=4"
                                }}
                                size={50}
                            />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>LaluPrasad M</Title>
                                <Caption style={styles.caption}>@Peteria</Caption>
                        </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="home-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="Home"
                          onPress={() => {props.navigation.navigate('Home')}}
                      /> 
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="account-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="My Profile"
                          onPress={() => {props.navigation.navigate('Profile')}}
                      />
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="cart-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="My Cart"
                          onPress={() => {props.navigation.navigate('Cart')}}
                      />
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="heart-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="My Orders"
                          onPress={() => {props.navigation.navigate('Orders')}}
                      />
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="plus"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="More About Us!"
                          onPress={() => {props.navigation.navigate('More')}}
                      />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>

                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });