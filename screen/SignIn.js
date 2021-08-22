import * as React from 'react';
import { Text, View, StyleSheet,  TouchableOpacity, Dimensions, StatusBar, Platform} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

import { AuthContext } from '../components/Context';


const darkgreencolor = '#00b020';
const lightgreencolor = '#57FF89';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.33;


export default function signInScreen({navigation}) {

    const [data,setData] = React.useState({
      email: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true
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
    
    const updateSecureTextEntry = (val) => {
      setData({
        ...data,
        secureTextEntry:!data.secureTextEntry,
      })
    }
    const { signIn } = React.useContext( AuthContext );
    
    const loginHandle = (email, password) => {
      signIn(email,password);  
    }

    return (
      <View style={styles.container}>

        <StatusBar backgroundColor={darkgreencolor} barStyle="light-content"/>
        
        <View style={styles.header}>
          <View style={{justifyContent: 'center',alignItems: 'center'}}>
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
            style={{width:height_logo*.3,height:height_logo*.3,left:55,top:-25}}
            resizeMode="stretch"
            />
          <Animatable.Image
            source={require("../assets/paw.png")}
            style={{width:height_logo*.45,height:height_logo*.45,left:105,top:-45}}
            resizeMode="stretch"
            />
        </View>

        <View style={styles.footer}>
          <View style={styles.inputBox}>
            <View style={styles.action}>
                <FontAwesome
                  name="user-o"
                  color="#05375a"
                />
                <TextInput 
                  placeholder="E M A I L"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText = {(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                  <Animatable.View 
                    animation='bounceIn'
                  >
                    <Feather
                      name="check-circle"
                      color="green"
                      size={20}
                    />
                  </Animatable.View>
                  : null }
            </View>
          </View>

                  
          <View style={styles.inputBox}>
            <View style={styles.action}>
                <Feather
                  name="lock"
                  color="#05375a"
                />
                <TextInput 
                  placeholder="P A S S W O R D"
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
                      color="grey"
                      size={15}
                    />
                  :
                  <Feather
                      name="eye"
                      color="grey"
                      size={15}
                  />
                  }
                </TouchableOpacity>
            </View>
          </View>
          <Text style={{color:darkgreencolor,textAlign:"right",marginRight:"15px"}}>Forgot Password?</Text>

          <TouchableOpacity>
            <View style={[styles.inputBox,{backgroundColor:"#90f09e",borderWidth:"4px",padding:"10px",marginBottom:"20px"}]}>
              <Text 
                style={styles.signIn}
                onPress={() => {loginHandle(data.email,data.password)}} 
                >L O G I N</Text>
                </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate('SignUpScreen')}}>
              <Text style={styles.signIn}>S I G N U P</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: lightgreencolor
  },

  header: {
    flex:1,
  },
  footer:{
    flex:1
  },
  
  logo: {
    width: height_logo,
    height: height_logo,
  },
  inputBox: {
     borderWidth:'2px',
     borderColor:darkgreencolor,
     margin:'15px',
     marginBottom:"0px",
     paddingLeft:'8px',
     paddingRight:'8px',
  },

  action: {
      flexDirection: 'row',
      marginTop: 10,
      paddingBottom: 5
  },

  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      padding: 10,
      color: '#05375a',
  },
  signIn: {
    width: '100%',
    color: darkgreencolor,
    textAlignVertical:"center",
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:"center",
  }
});