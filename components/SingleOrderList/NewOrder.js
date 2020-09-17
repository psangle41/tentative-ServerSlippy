import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions,TouchableOpacity,UIManager,LayoutAnimation} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Arrow from '../img/arrow'



const NewOrder=({orderDetail,navigation,pageRoutedFrom})=>{
    const [selectedId, setSelectedId] = useState(null);
    let Order = orderDetail;

    const handleNewView = () => {
        if (pageRoutedFrom === "ChefNew") {
          navigation.push("OrderChefInfo", {
            order: Order,
            navigation: navigation,
            pageTitle: "Order Details",
          });
        } else {
          //name based on order state and server is routing
          navigation.push("OrderInfo", {
            order: Order,
            navigation: navigation,
            pageTitle: "Order Details",
            tableNo: Order.tableNo,
            finalOrder: Order,
          });
        }
      };
    
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../../assets/fonts/Poppins-Light.ttf'),
        
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }


      const renderItem = ({ item }) => {
        const backgroundColor = item.orderState === "prep"? "#f7a500" : item.orderState === "ready"?"#00b406":"#e81156";
        
        return (
            item.orderState=="new"?

            <View style={styles.tabbContainer}>
                <View style={styles.numberContainer}>
                <Text style={styles.numText}>
                        {item.tableNo}
                    </Text>
                </View>
                <View style={styles.statusBox}>
                <View style={{height:windowHeight*0.12,width:windowWidth*0.016,backgroundColor:backgroundColor}} />
                <View style={styles.stateContainer}>
                    <Text style={styles.stateText}>{item.orderState}</Text>
                </View>
                </View>
                <TouchableOpacity style={styles.texxt} onPress={() => handleNewView()}> 
                <Text style={styles.dishText}>{item.dishSelected[0].name},{item.dishSelected[1].name},...</Text>
                <Text style={styles.dishText}>{item.code}/ ${item.total}</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:windowWidth*0.8,justifyContent:"center"}}  onPress={() => navigation.navigate('AddCustom')}> 
                <Arrow/>
                </TouchableOpacity>
            
            </View>
            

            :null
        );
      };

    return(
        
        <FlatList
                data={Order}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
        />
    )
}

const styles=StyleSheet.create({
    tabbContainer:{
        flex:1,
        backgroundColor: "#ffffff",
        height:windowHeight*0.15,
        borderBottomWidth:2,
        borderBottomColor:'#a9a9a9',
        flexDirection:'row'

    },
    
    statusBox:{
        backgroundColor: "#ffffff",
        alignItems:'center',
        height:windowHeight*0.15,
        width:windowWidth*0.13,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderRightColor:'#a9a9a9',
        borderBottomColor:'#a9a9a9',
        backgroundColor:"#ffffff",
        flexDirection:'row',  
        elevation:10   
        
    },
    numberContainer:{
        position:"absolute",
        top:windowHeight*0.01,
        width:windowWidth*0.23,
        backgroundColor: "#ffffff",
        height:windowHeight*0.108,
        borderTopWidth:2,
        borderBottomColor:'#a9a9a9',
        borderTopColor:'#a9a9a9',
        borderRightWidth:2,
        borderRightColor:'#a9a9a9',
        borderBottomWidth:2,
        borderBottomColor:'#a9a9a9',
        alignItems:"flex-end",
        justifyContent:"center",
        borderBottomRightRadius:50,
        borderTopRightRadius:50,
        elevation:10
    },
    texxt:{
        position:'absolute',
        height:windowHeight*0.25,
        left:100,
        backgroundColor: "#ffffff",
        height:windowHeight*0.13,
        borderRightColor:'#a9a9a9',
        justifyContent:"center",
        
    },
    expandText:{
        marginLeft:5,padding:5,justifyContent:"center",backgroundColor:'#ff264d',borderRadius:20
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


export default NewOrder;