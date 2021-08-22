import React, { useState } from 'react';
import { StyleSheet, Text,Image, View,ScrollView, FlatList, TouchableOpacity,Dimensions  } from 'react-native';

import firebase from 'firebase';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const imageWidth = screenWidth / 3
const imageHeight = imageWidth/1.8


const darkgreencolor = '#00b020';
const lightgreencolor = '#57FF89';


export default function App({navigation}) {
  
  // const [header,setHeader] = useState([
  //   {name:"",uri:""}
  // ]);

  const [categories,setCategories] = useState(
    [
      {name:"",data:""}
    ]);


  const pressHandler = (id) => {
    const DetailsScreen = firebase.database().ref("DetailsScreen");
    DetailsScreen.set({id:id})
    navigation.push('AdoptionPetDetails');
  }


  // const myHeader = firebase.database().ref("adoptScreenHeaders");
  const myCategories = firebase.database().ref("adoptScreenCategories");
  const Dogs = firebase.database().ref("Dogs");
  const Cats = firebase.database().ref("Cats");
  const Fishes = firebase.database().ref("Fishes");
  const Accessories = firebase.database().ref("Accessories");
  
  React.useEffect(() => {
        
        // // To push data
        // myCategories.set([
        //   {name: "Recommended",data:["000001","200008","100003","000004","100001","100005","000003"]},
        //   {name: "Most Liked",data:["000001","200008","100003","000004","100001","100005","000003"]},
        //   {name: "Recommended",data:["000001","200008","100003","000004","100001","100005","000003"]},
        //   {name: "Recommended",data:["000001","200008","100003","000004","100001","100005","000003"]},
        //   {name: "Recommended",data:["000001","200008","100003","000004","100001","100005","000003"]},
        // ])

      // // To push data
      // myHeader.set([
      //   {name:"Dogs",uri:'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'},
      //   {name:"Cats",uri:'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'},
      //   {name:"Fish",uri:'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'},
      //   {name:"Whales",uri:'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'},
      // ])

        // To retrieve data
        myCategories.on("value",datasnap => {
          var categories = Object.values(datasnap.val());
          var myCategoriesData = [];
          categories.map(category => {
                      var myCategoryData = {name:category.name,data:[]}  
                      category.data.map(petId =>{
                                  if(petId[0]==="0"){
                                    Dogs.on("value",dogsSnapshot => {
                                      var dogs = dogsSnapshot.val();
                                      var requiredPet = dogs.filter(dog => petId === dog.id)
                                      myCategoryData.data.push(requiredPet[0])
                                    })
                                  }
                                  else if(petId[0]==="1"){
                                    Cats.on("value",catsSnapshot => {
                                      var cats = catsSnapshot.val();
                                      var requiredPet = cats.filter(cat => petId === cat.id)
                                      myCategoryData.data.push(requiredPet[0])
                                    })
                                  }
                                  else if(petId[0]==="2"){
                                    Fishes.on("value",fishesSnapshot => {
                                      var fishes = fishesSnapshot.val();
                                      var requiredPet = fishes.filter(fish => petId === fish.id)
                                      myCategoryData.data.push(requiredPet[0])
                                    })
                                  }
                                  else if(petId[0]==="3"){
                                    Accessories.on("value",accessoriesSnapshot => {
                                      var accessories = accessoriesSnapshot.val();
                                      var requiredPet = accessories.filter(accessory => petId === accessory.id)
                                      myCategoryData.data.push(requiredPet[0])
                                    })
                                  } 
                      })
                      myCategoriesData.push(myCategoryData);
            })
          setCategories(myCategoriesData);
        })

      // myHeader.on("value",datasnap => {
      //   console.log(Object.values(datasnap.val()))
      //   setHeader(Object.values(datasnap.val()));
      // }) 

  },[]);

  return (
      <ScrollView>
      
        <View style={styles.container}>

          <View style={styles.header}>
            
            <View style={styles.headerItems}>
            
              <View style={[styles.headerItem,{marginRight:"25px",}]}>
                <TouchableOpacity onPress={() => {
                  navigation.push("AdoptedPets");
                  }}>
                  <Text style={{color:"#fff"}}>Adopted Pets</Text>

                </TouchableOpacity>
              </View>


              <View style={styles.headerItem}>
                <Text style={{color:"#fff"}}>Donations</Text>
              </View>

              <View style={[styles.headerItem,styles.headerIcon]}>
                <View style={{left:-22}}>

                <Icon color="#fff" size={45}name="heart"/>
                </View>
              </View>

            </View>
          </View>
{/*         
          <View style={styles.headerAndBody}>
            {
              header.map((data,index) => (
                <View key={index} style={styles.headerAndBodyItem}>
                  <Image 
                    style = {styles.HeaderAndBodyImage}
                    source={{uri:data.uri}}
                    />
                  <Text style={{fontWeight:'bold'}}>{data.name}</Text>
                </View>
              ))
            }
          </View>
         */}


          <View style={styles.body}>
            {  
              categories.map((category,index) => (
                <View key={index}>
                  <View style={styles.FeatureHeader}>
                    <Text style={{fontWeight:'bold'}}>{category.name}</Text>
                  </View> 
                  <FlatList 
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    data = {category.data}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        {console.log(item.id)}
                        <Image 
                          style = {styles.FeatureImage}
                          source={{uri:item.imageUri}}
                        />
                        {/* <Text>{item.name}</Text> */}
                      </TouchableOpacity>
                     )}
                  /> 
                </View>
              ))
            }
          </View> 
        
        </View>
      </ScrollView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ddd',
  },

  header:{
    height:"140px",
    backgroundColor:darkgreencolor,
  },
  // headerAndBody:{
  //   backgroundColor:"#fff",
  //   margin:"15px",
  //   flexDirection:'row',
  //   height:"100px",
  //   justifyContent:"space-around",
  //   top:-65,
  //   zIndex:99,
  //   borderColor:"#666",
  //   borderWidth:"1px",
  //   borderRadius: "10px",
  // },
  body:{
    backgroundColor: '#ddd',
    paddingHorizontal:5,
    margin:'8px',
    AlignItems:"flex-start",
    top:-60,
  },

  headerItems:{
    flexDirection:"row",
    marginTop:"25px",
    alignSelf:"center",
  },
  headerItem:{
    height:"35px",
    padding:"4px",
    paddingLeft:"25px",
    paddingRight:"25px",
    borderColor:"#fff",
    borderRadius:"12px",
    borderWidth:"3px",
  },
  headerIcon:{
    borderRadius:"50%",
    borderWidth:"5px",
    height:"60px",
    width:"60px",
    left:-12,
    top:-12,
    zIndex:99,
    backgroundColor:darkgreencolor,
  },

  // HeaderAndBodyImage:{
  //   width:65,
  //   height:50,
  //   justifyContent:"space-between",
  //   borderRadius:"5px",
  // }, 
  // headerAndBodyItem:{
  //   alignItems:'center',
  //   paddingTop:"15px",
  // },

  FeatureHeader:{
    marginLeft:'8px',
  },
  FeatureImage:{
    width: imageWidth,
    height: imageHeight,
    margin:"5px",
    borderRadius:"8px",
  },
    
  person:{
      marginTop:24,
      backgroundColor:'pink',
      padding:30,
      marginHorizontal:10,
      borderWidth:1,
      fontSize:24,
    },
  });

