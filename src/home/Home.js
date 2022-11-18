import React, { useState } from "react";
import{ View, Text, Switch, StyleSheet } from "react-native";

const Home = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    return (
        <View style={styles.container}>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    airCleaner: {
        height: 30,
        marginLeft: 10,
        marginTop: 100,
    },

    airCleanerNo: {
        fontSize: "13px",
        height:15,
        marginLeft: 10,
        marginTop: 15,
        color: "#808080",
    },

    airConditioner: {
        height: 30,
        marginLeft: 10,
        marginTop: 50,
    },

    airConditionerNo: {
        fontSize: "13px",
        height:15,
        marginLeft: 10,
        marginTop: 15,
        color: "#808080",
    },

    tv: {
        height: 30,
        marginLeft: 10,
        marginTop: 50,
    },

    tvNo: {
        fontSize: "13px",
        height:15,
        marginLeft: 10,
        marginTop: 15,
        color: "#808080",
    },
});

export default Home;