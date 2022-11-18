import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import{
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    style,
} from "react-native";

export default function Login(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("C:\\Users\\nyung\\AIMom\\assets\\logo.png")}/>

            <StatusBar style="auto"/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Id."
                    placeholderTextColor="#003f5c"
                    onChangeText={(id) => setId(id)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View>
                <Text style={styles.loginFailed}>Login Failed. Please re-enter Id & Password.</Text>
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#fcebca",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding:10,
        marginLeft: 20,
    },

    loginFailed: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#fca503",
    },
});