import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,Switch} from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {AuthContext} from './context'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const RoleSelectionScreen=({navigation})=>{
    const { RoleSelected } = React.useContext(AuthContext)

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const isSelected=true

    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
        
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    
        return (
            <View style={{flex:1}}>
                <View style={styles.TitleContainer}>
                    
                </View>
                <View>
                    <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontFamily:'Poppins-Light',color:'#000000',fontSize:14,lineHeight:29,marginTop:windowHeight*0.1}}>Please Select your Roles</Text>
                        <Text style={{fontFamily:'Poppins-Light',color:'#000000',fontSize:14,lineHeight:29}}>Multiple selection is available</Text>

                       
                      <View style={{width: windowWidth, height:30,flexDirection:"row",marginTop:windowHeight*0.1}}> 
                      <Text style={styles.roleText} >Server</Text>
                      <Switch
                            thumbColor='#ffffff'
                            trackColor={{ false: "#767577", true: "#ff264d" }}
                            thumbColor={isEnabled ? "#ffffff" : "#c4c4c4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{width:90,height:30,left:80}}
                        />
                        </View>
                        <View style={styles.roleContainer}> 
                      <Text style={styles.roleText}>chef</Text>
                      <Switch
                            thumbColor='#ffffff'
                            trackColor={{ false: "#767577", true: "#ff264d" }}
                            thumbColor={isEnabled1 ? "#ffffff" : "#c4c4c4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                            style={{width:90,height:30,left:98}}
                        />
                        </View>
                        <View style={styles.roleContainer}> 
                      <Text style={styles.roleText}>Billing</Text>
                      <Switch
                            thumbColor='#ffffff'
                            trackColor={{ false: "#767577", true: "#ff264d" }}
                            thumbColor={isEnabled2 ? "#ffffff" : "#c4c4c4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                            style={{width:90,height:30,left:89}}
                        />
                        </View>
                        {isEnabled||isEnabled1||isEnabled2?
                        
                        <TouchableOpacity style={styles.saveButton}  onPress={()=>{RoleSelected(isSelected,isEnabled,isEnabled1,isEnabled2)}}>
                            <Text style={styles.saveText}>save</Text> 
                        </TouchableOpacity>:
                        <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveText}>save</Text> 
                         </TouchableOpacity>

                        }

                    </View>
                </View>
             </View>
        );
    

    
}

const styles=StyleSheet.create({
    TitleContainer:{
        width:windowWidth,
        height:windowHeight*0.1,
        paddingTop: windowHeight*0.05,
        alignItems:'center',
        backgroundColor:'#ff264d',
        flexDirection:"row",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20    
    },
    title:{
        fontFamily: 'Poppins-Light',
        color:'#ffffff',
        fontSize:24,
        lineHeight:28,
        left:windowWidth*0.28  
    },
    saveButton:{
        width:windowWidth*0.25,
        height:windowHeight*0.055,
        marginTop:windowHeight*0.1,
        backgroundColor:"#ff264d",
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'

    },
    saveText:{
        fontFamily: 'Poppins-Light',
        color:'#ffffff',
        fontSize:18,
        lineHeight:28,
    },
    roleContainer:{
        width: windowWidth, 
        height:30,
        flexDirection:"row",
        marginTop:windowHeight*0.025
    },
    roleText:{
        fontFamily:'Poppins-Light',
        color:'#ff264d',
        fontSize:19,
        lineHeight:29,
        left:50
    }

})

function useFonts(fontMap) {
    let [fontsLoaded, setFontsLoaded] = useState(false);
    (async () => {
      await Font.loadAsync(fontMap);
      setFontsLoaded(true);
    })();
    return [fontsLoaded];
  }


export default RoleSelectionScreen;