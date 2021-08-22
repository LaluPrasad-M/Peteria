import React, { useState } from 'react';
import { StyleSheet, Text,Image, View,ScrollView, TextInput, FlatList, TouchableOpacity,Dimensions  } from 'react-native';

import firebase from "firebase";

export default function App() {
  const [user,setUser] = useState({
    displayName:"",
    email:"",
    phoneNumber:"",
    photoURL:"",
  });

  const userFB = firebase.auth().currentUser;
  


  const handleNameChange = (val) => {
    setUser({
      ...user,
      displayName:val,
    })
    userFB.updateProfile(user);
    console.log(userFB);
  }
  
  const handlePhotoUrlChange = (val) => {
    setUser({
      ...user,
      photoURL:val,
    })
    userFB.updateProfile(user);
    console.log(userFB);
  }  
  const handlePhoneNumberChange = (val) => {
    setUser({
      ...user,
      phoneNumber:val,
    })
    userFB.updateProfile(user);
    console.log(user);
  }  

  React.useEffect(() => {
    console.log(userFB)
    setUser({
      displayName:userFB.displayName,
      email:userFB.email,
      phoneNumber:userFB.phoneNumber,
      photoUrl:userFB.photoURL,
    })
 },[]);


  return (
     <ScrollView>
       <View style={styles.container}>
          <View style={styles.section}>
            
            <View style={styles.sectionItemLeft}>
              <Text style={styles.text}>Name</Text>
            </View>
            <View style={styles.sectionItemRight}>
                <TextInput 
                  style={styles.input}
                  onChangeText = {(val) => handleNameChange(val)}
                  value={user.displayName}
                  placeholder="Mr. ABC"
                  />
            </View>
          
          </View>
          <View style={styles.section}>
            
            <View style={styles.sectionItemLeft}>
              <Text style={styles.text}>E-Mail</Text>
            </View>
            <View style={styles.sectionItemRight}>
                <Text
                  style={styles.input}
                >{user.email}</Text>
            </View>
          
          </View>
          <View style={styles.section}>
            
            <View style={styles.sectionItemLeft}>
              <Text style={styles.text}>Profile pic Url</Text>
            </View>
            <View style={styles.sectionItemRight}>
                <TextInput 
                  style={styles.input}
                  onChangeText = {(val) => handlePhotoUrlChange(val)}
                  value={user.photoURL}
                  placeholder="https://My-Profile-Picture.jpg"
                  />
            </View>
          
          </View>
          <View style={styles.section}>
            
            <View style={styles.sectionItemLeft}>
              <Text style={styles.text}>Ph. Number</Text>
            </View>
            <View style={styles.sectionItemRight}>
                <TextInput 
                  style={styles.input}
                  onChangeText = {(val) => handlePhoneNumberChange(val)}
                  value={user.phoneNumber}
                  placeholder="9876543210"
                  />
            </View>
          
          </View>
 

       </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ddd",
    padding:"8px",
  },
  section:{
    flex:1,
    // flexDirection:"row",
    // justifyContent:"space-between",
    marginBottom:"15px",
  },
  sectionItemLeft:{
    flex:1,
    padding:"5px",
  },
  sectionItemRight:{
    flex:3,
  },

  text:{
    fontWeight:"bold",
  },
  input:{
    padding:"5px",
  },
});

