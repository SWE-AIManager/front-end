import React from "react";
import {
    View,
    Text,
    style,
    StyleSheet,
} from "react-native";

export default function Detail(  ){
    return(
        <View style={styles.container}>
            <Text style={styles.category}>Exercise</Text>
            <Text style={styles.category}>Meal</Text>
            <Text style={styles.category}>Cleaning</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    category: {
        fontSize: "25px",
        height:30,
        color: "#808080",
        marginTop: 50,
        marginLeft: 10,
    },
});