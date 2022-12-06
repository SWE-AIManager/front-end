import React, { useState } from 'react';
import{
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    style,
    Alert,
} from 'react-native';
import axios from "axios";
//import {useNavigate} from 'react-router-dom'

export default function SignUp( {navigation} ){
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const back = () => navigation.push('Login');

    const confirm = async( {navigation} ) => {
        await axios.post("http://10.0.2.2:8000/app/users/", {
            user_id: id,
            name: name,
            pw: password,
            location: address 
        })
        .then(function(response) {
            if(response.status == 201, 302, 304) {  //가능하면 400, 500번대 응답 빼고는 허용 그런식으로 하는게 좋다고 함
                Alert.alert("Jansori의 회원이 되신 것을 환영합니다!");
            }
        }).catch(function(error){
            console.log(JSON.stringify(error.response));
        })
        
    };

    return(
        <View style={styles.container}>
            <Text style={styles.formText}> Username </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="2자 이상"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <Text style={styles.formText}> Id </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="영문, 숫자 포함"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={(id) => setId(id)}
                />
            </View>
            <Text style={styles.formText}> Password </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <Text style={styles.formText}> Confirm Password </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry={true}
                />
            </View>
            <Text style={styles.formText}> Address </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="주소(OO시 XX구 **동)"
                    placeholderTextColor="#D3D3D3"
                    onChangeText={(address) => setAddress(address)}
                />
            </View>

            <TouchableOpacity style={styles.SignUpBtn} onPress={confirm}>
                <Text style={styles.SignUpText}> SIGN UP </Text>
            </TouchableOpacity><TouchableOpacity style={styles.LoginBtn} onPress={back}>
                <Text style={styles.LoginText}> LOGIN </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },

    formText: {
        marginLeft: 35,
    },

    inputView: {
        backgroundColor: "#fcebca",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginLeft: 35,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding:10,
        marginLeft: 20,
    },

    SignUpBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        marginTop: 40,
        marginLeft: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fca503",
    },

    SignUpText: {
        fontSize: 18,
    },
    
    LoginBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        marginTop: 20,
        marginLeft: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#808080",
    },

    LoginText: {
        fontSize: 18,
        color: "#fca503",
    },
});