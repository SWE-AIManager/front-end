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
            <Text style={styles.category2}>Meal</Text>
            <Image style={styles.image} source={require("C:\\Users\\nyung\\AIManager\\assets\\chicken.jpg")}/>
            <Image style={styles.image} source={require("C:\\Users\\nyung\\AIManager\\assets\\sushi.jpeg")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    category2: {
        fontSize: "25px",
        height:30,
        marginTop: 50,
        color: "#808080",
        marginLeft: 10,
    },
});

export default Meal;