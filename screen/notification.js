import React, { useState } from 'react';
import { StyleSheet, Text,Image, View,ScrollView, TextInput, FlatList, TouchableOpacity,Dimensions  } from 'react-native';


import firebase from 'firebase';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const darkgreencolor = '#00b020';
const lightgreencolor = '#57FF89';

export default function NotificationScreen({navigation}) {
  const [messages,setMessages] = useState([""]);

  const myMessages = firebase.database().ref("notifications");

  React.useEffect(() => {
    
      // myMessages.set([
      //     "Welcome to pateria😉",
      //   "HOpe u are doing well😉",
      //   "Welcome to pateria😉",
      //   "HOpe u are doing well😉",
      //   "Welcome to pateria😉",
      //   "HOpe u are doing well😉",
      //   "Welcome to pateria😉",
      //   "HOpe u are doing well😉",
      //   "Welcome to pateria😉",
      //   "HOpe u are doing well😉",
      //   "Welcome to pateria😉",
      //   "HOpe u are doing well😉",
      //   "Welcome to pateria😉",
      //   "HOpe u are doing well😉",
      //   "Welcome to pateria😉",
      // ])


      // To retrieve data
      myMessages.on("value",datasnap => {
        console.log(Object.values(datasnap.val()))
        setMessages(Object.values(datasnap.val()));
      })
    
  },[]);
  
    return (

      <View style={styles.container}>
        
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>Updates</Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>Messages</Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>App Notifications</Text>
          </View>
        </View>

        <ScrollView style={styles.body}>
          {
            messages.map((message,index) => (
              <View key={index}>
                <View style={styles.body}>
                  <View style={styles.messageItemOutLine}>
                      <View style={styles.messageItem}>
                        {console.log(message)}
                        <Text style={styles.messageText}>{message}</Text>
                      </View>
                  </View>
                </View>

                <View style={{borderBottomColor:lightgreencolor,borderBottomWidth:"2px"}}></View>
              </View>
            ))
          } 
      </ScrollView>

      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  header:{
    height:"50px",
    backgroundColor:lightgreencolor,
    flexDirection:"row",
    justifyContent:"space-around",
    borderBottomColor:darkgreencolor,
    borderBottomWidth:"3px",
  },
  body:{
    padding:"3px",
  },
  
  headerItem:{
    margin:"5px",
    width: screenWidth/3.3,
    backgroundColor:darkgreencolor,
    borderRadius:"6px",
    justifyContent:"center",
    alignItems: 'center',
  },
  headerText:{
    color:"#fff",
  },

  messageItemOutLine:{
    margin:"10px",
    borderColor:darkgreencolor,
    borderWidth:"2px",
    borderRadius:"7px"
  },
  messageItem:{
    borderColor:lightgreencolor,
    backgroundColor:darkgreencolor,
    borderWidth:"2px",
    borderRadius:"7px",
    padding:"8px",
  },
  messageText:{
    color:"#fff",
  },
});