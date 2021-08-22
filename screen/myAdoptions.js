import React, { useState } from 'react';
import { StyleSheet, Text,Image, View,ScrollView, TextInput, FlatList, TouchableOpacity,Dimensions  } from 'react-native';

import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: screenWidth} = Dimensions.get('window')

const imageWidth = screenWidth*.25;
const imageHeight = imageWidth*.8;


export default function PetDetailsScreen() {
    const AdoptedPetScreen = firebase.database().ref("AdoptedPets");
 
    const [data,setData] = React.useState([])

    const deleteAdoptedPetHandler = (id) => {
      
        var dataVal = data.filter(function (element){
          return element.id !== id;
        });      
        AdoptedPetScreen.set(dataVal);
        setData(dataVal);
    }

    React.useEffect(() => {
       AdoptedPetScreen.on("value",dataSnap => {
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
                  data.map((adoptedPetItem,index) => (
                        <View>

                            <View  style={{flexDirection:"row",justifyContent:"space-between"}} key={index}>
                                <Image 
                                    style={styles.image}
                                    source={{uri:adoptedPetItem.imageUri}}
                                    />
                                <View>
                                <Text style={{fontWeight:'bold'}}>{adoptedPetItem.name}</Text>
                                <Text style={{fontWeight:'bold'}}>Rs. {adoptedPetItem.cost}</Text>
                                <Text style={{fontWeight:'bold'}}>{adoptedPetItem.currentAge} old</Text>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={() => deleteAdoptedPetHandler(adoptedPetItem.id)}>
                                    <Icon
                                    size={30}
                                    name="minus-circle-outline"  
                                    /><Text>Un-Adopt</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{borderBottomColor:"#000",borderBottomWidth:"2px"}}></View>
                        </View>
                    ))
                    :
                    <View>
                          <View>No Items in AdoptedPet.</View>
                          <View>Please Add something to AdoptedPet!</View>
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