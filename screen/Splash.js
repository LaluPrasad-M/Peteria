import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions,StyleSheet, StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable';
// import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const darkgreencolor = '#00b020';
const lightgreencolor = '#57FF89';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.33;

export default function AdoptScreen({navigation}) {
    return (
      <View style={styles.container}>

        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration = {2000}
            source={require("../assets/adaptive-icon.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
          <View style={{left:-50}}>
            <Text style={styles.tagname}>
              Peteria
            </Text>
          </View>
          <View >
            <Text style={styles.subtagname}>
              Making lives better
            </Text>
          </View>
        </View>
 
        <Animatable.View 
          animation="fadeInUpBig"
          style={styles.footer}>
          <Animatable.Image
            source={require("../assets/paw.png")}
            style={{width:height_logo*.3,height:height_logo*.3}}
            resizeMode="stretch"
          />
          <Animatable.Image
            source={require("../assets/paw.png")}
            style={{width:height_logo*.45,height:height_logo*.45,left:50,top:-15}}
            resizeMode="stretch"
          />
          <View style={styles.button}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignInScreen')}}>
              <Text style={styles.textSign}>Getting Started
              <Text style={{fontSize:28}}> ></Text></Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>

      </View>
    );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: lightgreencolor
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  tagname:{
    fontFamily:"Tempus Sans ITC",
    color:darkgreencolor,
    fontSize:65,
  },
  subtagname:{
    fontFamily:'Tempus Sans ITC',
    color:darkgreencolor,
    fontSize:20
  },
  footer: {
      flex: 1,
      backgroundColor: darkgreencolor,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      // borderRadius:height_logo*2,
      // backgroundColor: '#57FF8977'
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
  },
  signIn: {
      width: 150,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      // color: 'white',
      fontFamily:"Tempus Sans ITC",
      fontWeight: 'bold',
      fontSize:25,
      padding:8,
      borderRadius:50,
      width:250,
      textAlign:"center",
      backgroundColor:lightgreencolor,
      borderWidth:'1px',
      borderColor:"#777"
  }
})