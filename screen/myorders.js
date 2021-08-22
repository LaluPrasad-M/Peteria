import React, { useState } from 'react';
import { StyleSheet, Text,Image, View,ScrollView, TextInput, FlatList, TouchableOpacity,Dimensions  } from 'react-native';

import firebase from 'firebase';

const { width: screenWidth} = Dimensions.get('window')

const imageWidth = screenWidth*.25;
const imageHeight = imageWidth*.8;


export default function PetDetailsScreen() {
    const BagScreen = firebase.database().ref("Bag");
 
    const [data,setData] = React.useState([])
 
    React.useEffect(() => {
       BagScreen.on("value",dataSnap => {
         var dataSnapVal = dataSnap.val();
         if(dataSnapVal){
           setData(Object.values(dataSnapVal));
         }
       });
    },[]);
    const screenHeight = Dimensions.get('window').height

    return(

      <ScrollView contentContainerStyle={{height: screenHeight*.92}}>
        <View style={styles.container}>
          {
            data.length?
                  data.map((bagItem,index) => (
                    <View>

                          <View  style={{flexDirection:"row",justifyContent:"space-between"}} key={index}>
                                    <Image 
                                      style={styles.image}
                                      source={{uri:bagItem.imageUri}}
                                      />
                                  <View>
                                      {(bagItem.name)?       <Text style={{fontWeight:'bold'}}>{bagItem.name}</Text>: null}
                                      {(bagItem.cost)?       <Text style={{fontWeight:'bold'}}>Rs. {bagItem.cost}</Text>: null}
                                      {(bagItem.currentAge)? <Text style={{fontWeight:'bold'}}>{bagItem.currentAge} old</Text>: null}
                                  </View>
                          </View>

                           <View style={{borderBottomColor:"#000",borderBottomWidth:"2px"}}></View>
                      </View>
                    ))
                    :
                    <View>
                          <View>No Items in Bag.</View>
                          <View>Please Add something to Bag!</View>
                    </View>
          }


        </View>
        </ScrollView>
    );
}


const styles= StyleSheet.create({
    container:{
        padding:"10px",
    },

    image:{
        borderRadius:"10px",
        width:imageWidth,
        height:imageHeight,
        margin:"2px",
    },
    shadow:{
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: "10px",
        shadowOpacity: 1.0,
    },
    name:{
        top:-30,
        backgroundColor:"#fff",
        borderRadius:"30px",
        height:'40px',
        width:"250px",
        margin:"3px",
        justifyContent:"center",
        alignContent:"center",
    },
    nameTag:{
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:20,
    }


});