import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';

import firebase from 'firebase';


const RootStack = createStackNavigator();


import DrawerNavigator from "./DrawerNav";

import SplashScreen from "../screen/Splash";
import SignInScreen from "../screen/SignIn";
import SignUpScreen from "../screen/SignUp";

import { AuthContext } from "../components/Context";


import {PetDetailsStackScreen,
        HeaderDataStackScreen,
        AdoptionPetDetailsStackScreen,
        AdoptedPetsListStackScreen,
} from './StackNav';

const Stack = createStackNavigator();

function StackScreens() {
    return (
            <Stack.Navigator
                initialRouteName="Root"
                headerMode="none"
                mode="card"
            >
                <Stack.Screen
                    name="Root"
                    component={DrawerNavigator}
                />
                <Stack.Screen
                    name="HeaderData"
                    component={HeaderDataStackScreen}
                    options={{
                        tabBarVisible: false
                    }}
                />
                <Stack.Screen
                    name="PetDetails"
                    component={PetDetailsStackScreen}
                    options={{
                        tabBarVisible: false
                    }}
                />
                <Stack.Screen
                    name="AdoptionPetDetails"
                    component={AdoptionPetDetailsStackScreen}
                    options={{
                        tabBarVisible: false
                    }}
                />
                <Stack.Screen
                    name="AdoptedPets"
                    component={AdoptedPetsListStackScreen}
                    options={{
                        tabBarVisible: false
                    }}
                />
             
            </Stack.Navigator>
    );
  }


export default function() {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);

    const initialLoginState = {
        isLoading: true,
        userEmail: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch( action.type ){
            case "RETRIEVE_TOKEN":
                return {
                    ...prevState,
                    userToken: action.token, 
                    isLoading:false,
                };
            case "LOGIN":
                return {
                    ...prevState,
                    userName:action.id,
                    userToken: action.token,
                    isLoading:false,
                };
            case "LOGOUT": 
            return {
                ...prevState,
                userName:null,
                userToken: null,
                isLoading:false,
            };
            case "REGISTER":
                return {
                    ...prevState,
                    userName:action.id,
                    userToken: action.token,
                    isLoading:false,
                };
        }
    }

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


    const authContext = React.useMemo(() => ({
        
        signUp: (email,password) => {

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                alert("User Registered Successfully.");
                let user = userCredential.user; 
                console.log(user);
                dispatch({type: 'REGISTER', id:user.email, token: user.refreshToken});
                })
            .catch((error) => {
                alert(error.message);
            });

        },

        signIn: (email,password) => { 

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                alert("Login Successful.");
                let user = userCredential.user; 
                console.log(user);
                dispatch({type: 'LOGIN', id:user.email, token: user.refreshToken});
                // ...
            })
            .catch((error) => {
              alert(error.message);
            });
            
        },

        signOut: () => {
        
            firebase.auth().signOut()
            .then(() => {
                console.log("Token is null");
                dispatch({type:'LOGOUT'});
            })
            .catch((error) => {
                alert(error.message);
            });
       
        },

    }),[]);

    React.useEffect(() => {
        setTimeout(() => {
            let userToken=null;
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    userToken = user.refreshToken;
                }
                console.log(userToken);
                dispatch({type: 'RETRIEVE_TOKEN', token:userToken});
              });
        },1000);
    }, []);


    if( loginState.isLoading ){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    return(
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
            { loginState.userToken !== null ? 
                <StackScreens /> 
            :
                <RootStack.Navigator headerMode='none'>
                    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
                    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
                    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
                </RootStack.Navigator>
            }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}