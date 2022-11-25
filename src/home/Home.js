import React, { useState } from "react";
import{
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";

export default function Home( {navigation} ){
    const onPress1 = () => navigation.push('Exercise');
    const onPress2 = () => navigation.push('Meal');
    const onPress3 = () => navigation.push('Cleaning');
    const onPress4 = () => navigation.push('Control');

    return (
        <View style={styles.container}>
            <View style={styles.empty}/>
            <View style={styles.bottomBar}>
                <TouchableOpacity onPress={onPress1}>
                    <Image style={styles.exercise} source={require("C:\\Users\\nyung\\AIManager\\assets\\exercise.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress2}>
                    <Image style={styles.meal} source={require("C:\\Users\\nyung\\AIManager\\assets\\meal.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress3}>
                    <Image style={styles.cleaning} source={require("C:\\Users\\nyung\\AIManager\\assets\\cleaning.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress4}>
                    <Image style={styles.controller} source={require("C:\\Users\\nyung\\AIManager\\assets\\controller.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    empty: {
        flex: 8,
    },

    bottomBar: {
        flex: 1,
        flexDirection : "row",
        backgroundColor: 'white',
    },

    exercise: {
        width: 80,
        height: 80,
        marginLeft: 30,
    },

    meal: {
        width: 60,
        height: 60,
        marginTop: 10,
        marginLeft: 20,
    },

    cleaning: {
        width: 55,
        height: 55,
        marginTop: 10,
        marginLeft: 30,
    },

    controller: {
        width: 55,
        height: 55,
        marginTop: 10,
        marginLeft: 25,
    },
});