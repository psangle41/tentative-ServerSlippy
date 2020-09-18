import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import All from '../SingleOrderList/All'
import NewOrder from '../SingleOrderList/NewOrder'
import Ready from '../SingleOrderList/Ready'
import Preparingtab from '../SingleOrderList/Preparingtab'
import ServerImg from '../img/server'
import Menu from '../img/menu'
import {CustomerOrder} from '../CustomerOrder/CustomerOrder'



const Chef=({navigation})=>{
    
   const [tab, setTab] = React.useState(3);

   
   let [fontsLoaded] = useFonts({
    "Poppins-Light": require('../../assets/fonts/Poppins-Light.ttf')
  });
   

  fontColor1=fontColor2=fontColor3=fontColor4="#9a9795"

    switch (tab) {
        case 0:{
        var  fontColor1 = "#ffffff";
        var leftShift=0;
          break;}
        case 1:{
        var  fontColor2 = "#ffffff";
        var leftShift=0+windowWidth/4;
            break;}
        case 2:{
            var  fontColor3 = "#ffffff";
            var leftShift=0+windowWidth/2;
            break;}
        case 3:{
            var  fontColor4 = "#ffffff";
            var leftShift=3*windowWidth/4;
            break;}

      }
      if (!fontsLoaded) {
        return <AppLoading />;}
        else{

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.ContainerTwo}>
                    <TouchableOpacity >
                        <Menu style={styles.menuImg}/>
                    </TouchableOpacity>
                    <Text style={styles.name}>54th Ave, Marques St..</Text>
                    <View style={{flexDirection:"row",top:35}}>
                        <View style={styles.titleTag}>
                            <Text style={{fontFamily:'Poppins-Light',color:'#ff264d',fontSize:19,lineHeight:29}}>Mike's cafe</Text>
                        </View>
                        <ServerImg style={{left: windowWidth*0.45}} />
                    </View>
                </View>
            </View>

            <View style={styles.statusContainer}>
                <View style={styles.tabContainer}>
                    <View style={{flex:1,backgroundColor:'#ff264d',position:"absolute",top:windowHeight*0.005,width:windowWidth/4-5,height:windowHeight*0.05,left:leftShift,borderRadius:20}}/>
                    
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(0)}> 
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:fontColor1, textAlign:"center"}} >New Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(1)} >
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:fontColor2, textAlign:"center",}}>Preparing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(2)} >
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:fontColor3, textAlign:"center",}}>Ready</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => setTab(3)}>
                        <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:fontColor4, textAlign:"center",}}>All</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.stateList}>
                    {tab==0?<NewOrder 
                    orderDetail={CustomerOrder}
                    navigation={navigation}
                    pageRoutedFrom={"ChefNew"}/>
                    :tab==1?<Preparingtab
                    orderDetail={CustomerOrder}
                    navigation={navigation}
                    pageRoutedFrom={"ChefNew"}/>
                    :tab==2?<Ready  
                    orderDetail={CustomerOrder}
                    navigation={navigation}
                    pageRoutedFrom={"ChefNew"}/>:
                    <All  orderDetail={CustomerOrder}
                    navigation={navigation}
                    pageRoutedFrom={"ChefNew"}/>}

                </View>
            </View>   
        </View>

          
    );
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    
    ContainerTwo:{
        flex:1,
        backgroundColor:'#ff264d',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,

    },
    titleContainer:{
        width: windowWidth,
        height: windowWidth / 2,
        borderBottomLeftRadius: windowWidth / 9,
        borderBottomRightRadius: windowWidth / 9,
        backgroundColor: "#FF264D",
        elevation: 5,
    },
    name:{
        color: '#ffffff',
        fontFamily:"Poppins-Light",
        fontSize:19,lineHeight:29, 
        left:0.12*windowWidth, 
        top:10
    },
    menuImg:{
        top:0.015*windowHeight,
        left:0.85*windowWidth,
    },
    titleTag:{
        backgroundColor:'#ffffff',
        width:0.32*windowWidth,
        left:0.12*windowWidth,
        height:0.06*windowHeight,
        borderRadius:20,
        alignItems:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    serverImg:{ 
        height:140, 
        width:70,
        left:0.45*windowWidth,
        resizeMode:"cover",
        alignItems:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    
    statusContainer:{
        height:windowHeight/1.67
    },
    
    tabContainer:{
        flexDirection:"row",
        borderBottomColor:'#989494',
        borderBottomWidth:2
    },
    button:{
        flex:1,
        height:0.06*windowHeight, 
        alignItems:"center", 
        justifyContent:"center",

    },
    stateList:{
        flex:2,
        flexDirection:"row",
        backgroundColor:'#e5e5e5', 
        borderBottomColor:5}
})

function useFonts(fontMap) {
    let [fontsLoaded, setFontsLoaded] = useState(false);
    (async () => {
      await Font.loadAsync(fontMap);
      setFontsLoaded(true);
    })();
    return [fontsLoaded];
  }
export default Chef;