import React from "react";
import {
    View,
    Text,
    style,
    StyleSheet,
    Image,
} from "react-native";

const Meal = () => {
    return(
        <View style={styles.container}>
            <View style={{alignItems: "center"}}>
                <Image style={styles.image} source={require("C:\\Users\\nyung\\AIManager\\assets\\chicken.jpg")}/>
                <Text style={styles.text}> ▲ Chicken </Text>
                <Image style={styles.image} source={require("C:\\Users\\nyung\\AIManager\\assets\\sushi.jpeg")}/>
                <Text style={styles.text}> ▲ Sushi </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    image: {
        width: 300,
        height: 200,
        marginTop:20,
    },

    name: {
        fontSize: "15px",
        height: 20,
        marginTop: 15,
        color: "#808080",
    }
});

export default Meal;