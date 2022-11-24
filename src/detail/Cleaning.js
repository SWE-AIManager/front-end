import React from "react";
import {
    View,
    Text,
    style,
    StyleSheet,
} from "react-native";

const Cleaning = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.category3}>Cleaning</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    category3: {
        fontSize: "25px",
        height:30,
        marginTop: 50,
        color: "#808080",
        marginLeft: 10,
    },
});

export default Cleaning;