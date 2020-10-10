import React from 'react';
import { Image, ImageBackground,StyleSheet,Text,View } from 'react-native';
import AppButton from '../components/AppButton';

const WelcomeScreen = (props) => {
    return (
        <ImageBackground blurRadius={5} source={require('../assets/background.jpg')} style={styles.background}>
         <View style={styles.logoContainer}>
          <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
          <Text style={styles.tagLine}>Sell what you don't need</Text>
         </View>
         <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={()=>console.log('Tapped')}/>
        <AppButton color='secondary' title='register' onPress={()=>console.log('Tapped')}/>
         </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonContainer:{
        padding:20,
        width:'100%'
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
    },
    tagLine:{
        fontSize:25,
        paddingVertical:20,
        fontWeight:'600'
    }
})

export default WelcomeScreen;