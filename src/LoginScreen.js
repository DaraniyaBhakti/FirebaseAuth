import { NavigationContainer } from '@react-navigation/native';
import React,{useState, useEffect} from 'react';
import {Text,View,KeyboardAvoidingView,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { auth } from '../firebase';
// import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = () =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user){
                NavigationContainer.navigate('Home');
            }
        })
        return unsubscribe
    },[])

    const handleSignUp  = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error =>  alert(error.message))
    }

    const handleSignin  = () => {
        auth.signInWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log("Logged in with : "+user.email);
        })
        .catch(error =>  alert(error.message))
    }
    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleSignin}
                    style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}>
                        <Text style={[styles.buttonOutlineText]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
        )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1

    },
    inputContainer:{
        width:'80%'
    },
    input:{
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
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2
    },
    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16
    }

})
export default LoginScreen;