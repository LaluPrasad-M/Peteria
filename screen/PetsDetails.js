import React, { useState } from 'react';
import { StyleSheet, Text,Image, View,ScrollView, TextInput, FlatList, TouchableOpacity,Dimensions  } from 'react-native';

import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: screenWidth} = Dimensions.get('window')

const imageWidth = screenWidth-20;
const imageHeight = imageWidth*.8;


export default function PetDetailsScreen({navigation}) {
    // const { itemId, otherParam } = route.params;
    const DetailsScreen = firebase.database().ref("DetailsScreen");
    const [details,setDetails] = React.useState({
        id:"Loading",
        type:"Loading"
    });

    const [data,setData] = React.useState("Loading")
    
    React.useEffect(() => {
        DetailsScreen.on("value",detailsSnap => {
            setDetails(detailsSnap.val());
            console.log(detailsSnap.val())
            if(detailsSnap.val().id[0]==="0"){
                const Dogs = firebase.database().ref("Dogs");
                Dogs.on("value",dogsSnapshot => {
                    var dogs = dogsSnapshot.val();
                    var requiredPet = dogs.filter(dog => detailsSnap.val().id === dog.id)
                    setData(requiredPet[0]);
                })
            }
            else if(detailsSnap.val().id[0]==="1"){
                const Cats = firebase.database().ref("Cats");
                Cats.on("value",catsSnapshot => {
                    var cats = catsSnapshot.val();
                    var requiredPet = cats.filter(cat => detailsSnap.val().id === cat.id)
                    setData(requiredPet[0]);
                })
            }
            else if(detailsSnap.val().id[0]==="2"){
                const Fishes = firebase.database().ref("Fishes");
                Fishes.on("value",fishesSnapshot => {
                    var fishes = fishesSnapshot.val();
                    var requiredPet = fishes.filter(fish => detailsSnap.val().id === fish.id)
                    setData(requiredPet[0]);
                })
            } 
            else if(detailsSnap.val().id[0]==="3"){
                const Accessories = firebase.database().ref("Accessories");
                Accessories.on("value",accessoriesSnapshot => {
                  var accessories = accessoriesSnapshot.val();
                  var requiredPet = accessories.filter(accessory => detailsSnap.val().id === accessory.id)
                  setData(requiredPet[0]);
                })
              } 
        })  
    },[]);

    const handleCartPress = () => {
        const myCart = firebase.database().ref("Cart"); 
        myCart.push(data); 
        navigation.navigate("Root",{screen:"Cart"})
    }

    const handleBuyPress = () => {
        const myBag = firebase.database().ref("Bag"); 
        myBag.push(data); 
        navigation.navigate("Root",{screen:"Orders"})
    }

    return(
        <View style={styles.container}>
            <View style={[{borderRadius:"10px"},styles.shadow]}>
                <Image 
                    style = {styles.image}
                    source={{uri:data.imageUri}}
                />
            </View>
            <View style={[styles.name,styles.shadow]}>
                <Text style={styles.nameTag}>{data.name}</Text>
            </View>

            <View style={[{alignSelf:"flex-start",width:"100%",padding:"10px"},styles.shadow]}>
                {(data.cost)?   <Text><Text style={{fontWeight:"bold",fontSize:17}}>Cost:         Rs. </Text>{data.cost}</Text>: null}
                {(data.lifeSpan)?   <Text><Text style={{fontWeight:"bold",fontSize:17}}>Life Span:     </Text>{data.lifeSpan}</Text>: null}
                {(data.currentAge)? <Text><Text style={{fontWeight:"bold",fontSize:17}}>Current Age:   </Text>{data.currentAge}</Text>: null}
                {(data.location)?   <Text><Text style={{fontWeight:"bold",fontSize:17}}>Location:      </Text>{data.location}</Text>: null}
                {(data.delivery)?   <Text><Text style={{fontWeight:"bold",fontSize:17}}>Delivery:      </Text>{data.delivery}</Text>: null}
            </View>

            <TouchableOpacity onPress = {() => handleCartPress()}>
                <View 
                    style={[styles.name,styles.shadow,{top:10,flexDirection:"row",paddingTop:"9px"}]}
                    onPress = {() => handleCartPress()}
                    >
                    <Icon
                        size={20}
                        name="cart-outline"  
                        />
                        <Text style={{fontWeight:"bold",fontSize:17}}>Add to cart</Text>
                </View>
            </TouchableOpacity>            

            <TouchableOpacity onPress = {() => handleBuyPress()}>
                <View style={[styles.name,styles.shadow,{top:10,flexDirection:"row",paddingTop:"9px"}]}>
                    <Icon
                        size={20}
                        name="cart-outline"  
                        />
                    <Text style={{fontWeight:"bold",fontSize:17}}>Buy</Text>
            </View>
            </TouchableOpacity>            

        </View>
    );
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:"10px",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ccc",
    },

    image:{
        borderRadius:"10px",
        width:imageWidth,
        height:imageHeight,
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