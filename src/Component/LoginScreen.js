import React,{Component   } from "react";
import { View, Image,AsyncStorage,StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Content, Button, Text, Spinner,Container }  from 'native-base';


export default class LoginScreen extends Component{
    
    render(){
        return(
        <View style={styles.mBackground}>
            <View style={{height: 150, marginTop:30}} >
                <Text style={styles.tWelcome}>HOŞGELDİN</Text>
                <Text style={styles.tSubText}>Giriş Yaparak İndirimleri </Text>
                <Text style={styles.tSubText}>Dilediğin Gibi Kullanabilirsin</Text>
            </View>
             <View style={{height: 150, backgroundColor: 'skyblue'}} >
                <View></View>
             </View>
         
        </View>
        );
    }
}

const styles = StyleSheet.create({
    mBackground:{
        backgroundColor:"#FF2F63",
        flex: 1,
        flexDirection: 'column',
      

    },
    tWelcome:{
        fontSize:24,
        color:'#fff',
        fontWeight: '800',
        fontFamily: 'Raleway',
        marginLeft:25,
    },
    tSubText:{
        color:'#fff',
        fontFamily:'Open sans',
        fontSize:16,
        marginLeft:25
    },

    red: {
      color: 'red',
    },
  });