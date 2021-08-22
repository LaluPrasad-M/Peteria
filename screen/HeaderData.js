import React, { useState } from 'react';
import { StyleSheet, Text,Image, View,ScrollView, TextInput, FlatList, TouchableOpacity,Dimensions  } from 'react-native';

import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: screenWidth} = Dimensions.get('window')

const imageWidth = screenWidth*.25;
const imageHeight = imageWidth*.8;

///////////////Top header in Buy Screen


export default function PetDetailsScreen({navigation}) {
    const DetailsScreen = firebase.database().ref("DetailsScreen");
 
    const [data,setData] = React.useState([])
    const [details,setDetails] = React.useState({});

    React.useEffect(() => {
       DetailsScreen.on("value",dataSnap => {
         var dataSnapVal = dataSnap.val();
         setDetails(dataSnapVal);
         const Data = firebase.database().ref(dataSnapVal.type);
         Data.on("value",dataSnapshot => {
             var data = dataSnapshot.val();
             setData(data);
         })
       });
    },[]);

    const screenHeight = Dimensions.get('window').height
    return(
    <View style={{height: screenHeight*.92}}>
      <ScrollView>
      {      
                  data.map((cartItem,index) => (
                    <View>
                        <View  style={{flexDirection:"row"}} key={index}>
                            <TouchableOpacity onPress={() => {
                                DetailsScreen.set({id:cartItem.id,type:details.type});
                                navigation.push('PetDetails');
                            }}>
                            <Image 
                                style={styles.image}
                                source={{uri:cartItem.imageUri}}
                                />
                            </TouchableOpacity>
                                <View style={{padding:"4px"}}>
                                     <Text style={{fontWeight:'bold'}}>{cartItem.name}</Text>
                                     <Text style={{fontWeight:'bold'}}>Rs. {cartItem.cost}</Text>
                                     <Text style={{fontWeight:'bold'}}>{cartItem.currentAge} old</Text>
                                </View>
                        </View>
                        <View style={{borderBottomColor:"#000",borderBottomWidth:"2px"}}></View>
                    </View>
                    ))
          }
      </ScrollView>
    </View>
  );

}


const styles= StyleSheet.create({
    container:{
        padding:"10px",
        flex:1,
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