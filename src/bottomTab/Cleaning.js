import React from "react";
import {
    View,
    Text,
    style,
    StyleSheet,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Cleaning = () => {
    return(
        <View style={styles.container}>
            <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="#fca503"
                unfillColor="#fcebca"
                text="바닥 청소하기"
                iconStyle={{ borderColor: "E3E3E3" }}
                onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="#fca503"
                unfillColor="#fcebca"
                text="빨래하기"
                iconStyle={{ borderColor: "E3E3E3" }}
                onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="#fca503"
                unfillColor="#fcebca"
                text="설거지하기"
                iconStyle={{ borderColor: "E3E3E3" }}
                onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="#fca503"
                unfillColor="#fcebca"
                text="책상 정리하기"
                iconStyle={{ borderColor: "E3E3E3" }}
                onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="#fca503"
                unfillColor="#fcebca"
                text="옷 정리하기"
                iconStyle={{ borderColor: "E3E3E3" }}
                onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="#fca503"
                unfillColor="#fcebca"
                text="쓰레기 버리기"
                iconStyle={{ borderColor: "E3E3E3" }}
                onPress={(isChecked: boolean) => {}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },

    checkbox: {
        marginLeft: 90,
        marginBottom: 50,
    },
});

export default Cleaning;