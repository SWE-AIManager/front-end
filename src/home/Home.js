import React, { useState } from "react";
import{
    View,
    TouchableOpacity,
    Image,
    Text,
    Switch,
    StyleSheet,
} from "react-native";

export default function Home( {navigation} ){
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const onPress1 = () => navigation.push('Exercise');
    const onPress2 = () => navigation.push('Meal');
    const onPress3 = () => navigation.push('Cleaning');

    return (
        <View style={styles.container}>
            <View style={styles.control}>
                <Text style={styles.airCleaner}>Air Cleaner</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#fae500"}}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#e3e3e3"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
                <Text style={styles.airCleanerNo}>연결 기기:LG-E2BQPU22</Text>

                <Text style={styles.airConditioner}>Air Conditioner</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#fae500"}}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#e3e3e3"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
                <Text style={styles.airConditionerNo}>연결 기기:LG-FW17VCWWA1</Text>

                <Text style={styles.tv}>TV</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#fae500"}}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#e3e3e3"
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                />
                <Text style={styles.tvNo}>연결 기기:LG-OLED88Z2KNA</Text>
            </View>

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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bottomBar: {
        flex:1,
        flexDirection : "row",
        backgroundColor: 'white',
    },

    exercise: {
        width: 80,
        height: 80,
        marginLeft: 40,
    },

    meal: {
        width: 60,
        height: 60,
        marginTop: 10,
        marginLeft: 50,
    },

    cleaning: {
        width: 55,
        height: 55,
        marginTop: 10,
        marginLeft: 55,
    },

    control: {
        flex:8,
        alignItems: 'center',
        justifyContent: "center",
    },

    airCleaner: {
        height: 30,
        marginLeft: 10,
        marginTop: 100,
    },

    airCleanerNo: {
        fontSize: "13px",
        height:15,
        marginTop: 15,
        marginLeft: 10,
        color: "#808080",
    },

    airConditioner: {
        height: 30,
        marginTop: 70,
        marginLeft: 10,
    },

    airConditionerNo: {
        fontSize: "13px",
        height:15,
        marginTop: 15,
        marginLeft: 10,
        color: "#808080",
    },

    tv: {
        height: 30,
        marginTop: 70,
        marginLeft: 10,
    },

    tvNo: {
        fontSize: "13px",
        height:15,
        marginTop: 15,
        marginLeft: 10,
        color: "#808080",
    },
});