import React, { useState } from "react";
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import id from "C:\\Users\\ziziz\\Jansori\\src\\login\\Login.js";

export default function Home( {navigation} ){
    const onPress1 = () => navigation.push('Exercise');
    const onPress2 = () => navigation.push('Meal');
    const onPress3 = () => navigation.push('Cleaning');
    const onPress4 = () => navigation.push('Control');
    const confirmExercise = async() => {
        var date = new date();
        var dateStr = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + " "
                        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        await axios.post("http://10.0.2.2:8000/app/exercise/", {
            recent_exercise_id: id,
            recent_exercise: dateStr
        })
        .then(function(response) {
            if(response.statusCode = 200, 304) {
                Alert.alert("Exercise Saved");
            }
        }).catch(function(error){
            console.log(error);
        })
    };
    const confirmMeal = async() => {
        var date = new date();
        var dateStr = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + " "
                        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        axios.post("http://10.0.2.2:8000/app/meal/", {
            recent_meal_id: id,
            recent_meal: dateStr
        })
        .then(function(response) {
            if(response.statusCode = 200, 304) {
                Alert.alert("Meal Saved");
            }
        }).catch(function(error){
            console.log(error);
        })
    };
    const confirmCleaning = async() => {
        var date = new date();
        var dateStr = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + " "
                        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        axios.post("http://10.0.2.2:8000/app/clean/", {
            recent_clean_id: id,
            recent_clean: dateStr
        })
        .then(function(response) {
            if(response.statusCode = 200, 304) {
                Alert.alert("Cleaning Saved");
            }
        }).catch(function(error){
            console.log(error);
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.question}> 운동했어~? </Text>
                <View style={styles.yesOrNo}>
                    <TouchableOpacity style={styles.yesBtn} onPress={confirmExercise}>
                        <Text style={styles.yesText}>YES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noBtn}>
                        <Text style={styles.noText}>NO</Text>
                    </TouchableOpacity>
                </View>
            <Text style={styles.question}> 밥 먹었어~? </Text>
                <View style={styles.yesOrNo}>
                    <TouchableOpacity style={styles.yesBtn} onPress={confirmMeal}>
                        <Text style={styles.yesText}>YES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noBtn}>
                        <Text style={styles.noText}>NO</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.question}> 청소했어~? </Text>
                <View style={styles.yesOrNo}>
                    <TouchableOpacity style={styles.yesBtn} onPress={confirmCleaning}>
                        <Text style={styles.yesText}>YES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noBtn}>
                        <Text style={styles.noText}>NO</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomBar}>
                <TouchableOpacity onPress={onPress1}>
                    <Image style={styles.exercise} source={require("C:\\Users\\ziziz\\Jansori\\assets\\exercise.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress2}>
                    <Image style={styles.meal} source={require("C:\\Users\\ziziz\\Jansori\\assets\\meal.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress3}>
                    <Image style={styles.cleaning} source={require("C:\\Users\\ziziz\\Jansori\\assets\\cleaning.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress4}>
                    <Image style={styles.controller} source={require("C:\\Users\\ziziz\\Jansori\\assets\\controller.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    box: {
        flex: 7,
        justifyContent: "center",
    },

    question: {
        fontSize: 18,
        marginTop: 60,
        marginLeft: 70,
    },

    yesOrNo: {
        flexDirection : "row",
    },

    yesBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        marginTop: 10,
        marginLeft: 70,
        backgroundColor: "#fca503",
        alignItems: "center",
        justifyContent: "center",
    },

    noBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: "#fcebca",
        alignItems: "center",
        justifyContent: "center",
    },

    bottomBar: {
        flex: 1,
        flexDirection : "row",
        backgroundColor: 'white',
    },

    exercise: {
        width: 80,
        height: 80,
        marginTop: 13,
        marginLeft: 30,
    },

    meal: {
        width: 60,
        height: 60,
        marginTop: 23,
        marginLeft: 20,
    },

    cleaning: {
        width: 55,
        height: 55,
        marginTop: 23,
        marginLeft: 30,
    },

    controller: {
        width: 55,
        height: 55,
        marginTop: 23,
        marginLeft: 25,
    },
});