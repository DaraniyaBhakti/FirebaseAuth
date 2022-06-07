import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { auth } from '../firebase';

const HomeScreen = () =>{

    const navigation = useNavigation()

    const handleSignOut = () =>{
        auth.signOut()
        .then(() =>{
            navigation.replace('Login');
        }).catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Email : {auth.currentUser?.email}</Text>

            <TouchableOpacity onPress={handleSignOut}
                    style={styles.button}>
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1

    },
    text:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        marginTop:5,
        borderRadius:10
    },
    buttonContainer:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },


})
export default HomeScreen;