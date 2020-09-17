import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,Image, KeyboardAvoidingView,TextInput,TouchableOpacity,Dimensions} from 'react-native';

import {AuthContext} from './context'
import User from '../components/img/user'
import Pass from '../components/img/pass'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SignInScreen=({navigation})=>{

    const { signIn } = React.useContext(AuthContext)
    
    const [data, setData] = React.useState({
        username: '',
        password: '',
        
    });
    const screenName="Role Selection"
    
    const textInputChange = (val) => {       
        setData({
            ...data,
            username: val,
        });
        
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        }); 
    }

    const loginHandle=(username, password) =>{
        signIn(username, password)
    }

    

        
    return (
        
        <ImageBackground source= {require('../components/img/background.png')} style={styles.image}>
            <View style={styles.container}>
                <View>
                    <Image style ={styles.logo} source= {require('../components/img/swiggy.png')}/>            
                    <Text style={styles.tagline}>Own the best Experience</Text>
                </View>
                <View style={styles.ipScreen} >
                    <User />
                    <TextInput style ={styles.inputBox} placeholder="Username" placeholderTextColor="#000000" onChangeText={(val) => textInputChange(val)} />
                </View>
                <View style={styles.ipScreen} >
                <Pass />
                    <TextInput style ={styles.inputBox} placeholder="Password" placeholderTextColor="#000000" secureTextEntry={true}  onChangeText={(val) => handlePasswordChange(val)}  />
                </View>
                <TouchableOpacity  style={styles.button} onPress={()=>{loginHandle(data.username, data.password,screenName)}}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
          
    );

}

const styles=StyleSheet.create({
    
    image:{
        flex:1,   
    },
    container:{
        flex:1,
        backgroundColor:"rgba(16,16,16,0.88)",
        alignItems:"center",
    },
    logo:{
        width: 125,
        height: 184,
        left:windowWidth*0.2,
        marginTop: windowHeight*0.15,
        
    },
    tagline:{
        width: 289,
        height: 55,
        marginTop: windowHeight*0.05,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 26,
        lineHeight: 30,
        display: 'flex',
        alignItems: 'center',
        textAlign: "center",
        color: '#ffffff'

    },
    ipScreen:{
        height:windowHeight*0.07,
        width:windowWidth*0.8,
        borderStyle: "solid",
        borderColor:"#ffffff",
        borderWidth: 1.5,
        backgroundColor:"#ffffff",
        borderRadius:39,
        paddingLeft:20,
        alignItems:"center",        
        flexDirection:"row",
        marginTop:windowHeight*0.05
    },
    inputBox:{
        fontFamily: "Roboto",
        fontSize: 18,
        color:"#000000",
        backgroundColor:"#ffffff",
        borderRadius:39,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:windowWidth*0.2
           
    },

    button:{
        height:windowHeight*0.07,
        width:windowWidth*0.5,
        marginTop: windowHeight*0.08,
        backgroundColor:"#ffffff",
        borderRadius:39,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center"

    },
    continueText:{
        fontFamily: "Roboto",
        textAlign:"center",
        fontSize: 18,
        lineHeight: 20,
        alignItems: 'center',
        justifyContent:"center",
        alignContent:"center",
        textAlign: "center",
        color: '#000000'

    },

})
export default SignInScreen;