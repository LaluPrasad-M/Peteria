import 'react-native-gesture-handler';

import * as React from 'react';
import { Text, View, StyleSheet,  TouchableOpacity, Dimensions, StatusBar, Platform, Alert} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

import { AuthContext } from '../components/Context';


const darkgreencolor = '#00b020';
const lightgreencolor = '#57FF89';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.33;


export default function signUpScreen({navigation}) {

    const [data,setData] = React.useState({
      email: '',
      password: '',
      confirmPassword: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
      if( val.length !== 0){
        setData({
          ...data,
          email:val,
          check_textInputChange:true
        })
      } else {
        setData({
          ...data,
          email:val,
          check_textInputChange:false
        })
      } 
    }

    const handlePasswordChange = (val) => {
        setData({
          ...data,
          password:val,
        })
    }
     
    const handleConfirmPasswordChange = (val) => {
      setData({
        ...data,
        confirmPassword:val,
      })
    }

    const updateSecureTextEntry = (val) => {
      setData({
        ...data,
        secureTextEntry:!data.secureTextEntry,
      })
    }

    const updateConfirmSecureTextEntry = (val) => {
      setData({
        ...data,
        confirm_secureTextEntry:!data.confirm_secureTextEntry,
      })
    }
    const { signUp } = React.useContext( AuthContext );

    const signupHandle = (email,password,confirmPassword) => {
      if(password == confirmPassword){
        signUp(email,password);  
      } else {
        alert("Password not Matching")
      }
    }

    return (
      <View style={styles.container}>

        <StatusBar backgroundColor={darkgreencolor} barStyle="light-content"/>
        
        <View style={styles.header}>
          <View style={{justifyContent: 'center',alignItems: 'center',top:120}}>
            <Animatable.Image
              animation="bounceIn"
              duration = {2000}
              source={require("../assets/adaptive-icon.png")}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
          <Animatable.Image
            source={require("../assets/paw.png")}
            style={{width:height_logo*.3,height:height_logo*.3,alignSelf:"flex-end",top:50}}
            resizeMode="stretch"
            />
          <Animatable.Image
            source={require("../assets/paw.png")}
            style={{width:height_logo*.45,height:height_logo*.45,alignSelf:"flex-end",right:50,top:30}}
            resizeMode="stretch"
            />
          <Text style={styles.text_header}>Register Now!</Text>
        </View>

        <Animatable.View 
          animation="fadeInUpBig"
          style={styles.footer}>

          <Text style={styles.text_footer}>Email</Text>
          <View style={[styles.action,{height:20}]}>
              <FontAwesome
                name="user-o"
                color="#05375a"
              />
              <TextInput 
                placeholder="abc@email.domain"
                placeholderTextColor="#fff"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText = {(val) => textInputChange(val)}
                
              />
              {data.check_textInputChange ? 
                <Animatable.View 
                  animation='bounceIn'
                  style={{top:-8}}
                >
                  <Feather
                    name="check-circle"
                    color="green"
                    size={20}
                  />
                </Animatable.View>
                : null }
          </View>

          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
              <Feather
                name="lock"
                color="#05375a"
              />
              <TextInput 
                placeholder="Your Password"
                placeholderTextColor="#fff"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText = {(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updateSecureTextEntry}
              >
                {data.secureTextEntry ?
                  <Feather
                    name="eye-off"
                    color="white"
                    size={15}
                  />
                :
                <Feather
                    name="eye"
                    color="white"
                    size={15}
                 />
                }
              </TouchableOpacity>
          </View>

          <Text style={styles.text_footer}>Confirm Password</Text>
          <View style={styles.action}>
              <Feather
                name="lock"
                color="#05375a"
              />
              <TextInput 
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText = {(val) => handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updateConfirmSecureTextEntry}
              >
                {data.confirm_secureTextEntry ?
                  <Feather
                    name="eye-off"
                    color="white"
                    size={15}
                  />
                :
                <Feather
                    name="eye"
                    color="white"
                    size={15}
                 />
                }
              </TouchableOpacity>
          </View>

          <View style={[styles.inputBox,{backgroundColor:"#90f09e",borderWidth:"4px",padding:"10px",marginBottom:"20px"}]}>
            <TouchableOpacity onPress={()=> signupHandle(data.email,data.password,data.confirmPassword)}>
              <Text 
                style={styles.signIn}>
                  S I G N U P
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text 
              style={[styles.signIn,{color:"white"}]}
              >L O G I N</Text>
          </TouchableOpacity>
          
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
      flex: 5,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
  },
  footer: {
      flex: 4,
      backgroundColor: darkgreencolor,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      marginTop:20
  },
  
  logo: {
    width: height_logo,
    height: height_logo,
  },
  text_header: {
      color: '#000080',
      fontFamily:"Tempus Sans ITC",
      fontWeight: 'bold',
      fontSize: 30
  },
  
  text_footer: {
      color: 'white',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#fff',
  },


  inputBox: {
    borderWidth:'2px',
    borderColor:darkgreencolor,
    margin:'15px',
    marginBottom:"0px",
    paddingLeft:'8px',
    paddingRight:'8px',
    borderRadius:"15px",
  },
  signIn: {
    width: '100%',
    color: darkgreencolor,
    textAlignVertical:"center",
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:"center",
  },
  button: {
      // alignItems: 'center',
      marginTop: 50,
      borderRadius:10,
  },

});