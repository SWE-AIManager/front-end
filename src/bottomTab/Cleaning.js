import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    style,
    StyleSheet,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import id from "C:\\Users\\ziziz\\Jansori\\src\\login\\Login.js";


const Cleaning = () => {
    const [cleanCycle, setCleanCycle] = useState(0);
    const confirm = async(  ) => {
        await axios.post("http://10.0.2.2:8000/app/goals/", {
            goal_id: "quu",
            meal: 0,
            exercise: 0,
            clean: cleanCycle,
        })
        .then(function(response) {
            if(response.status == 201, 302, 304) {  //가능하면 400, 500번대 응답 빼고는 허용 그런식으로 하는게 좋다고 함
                Alert.alert("Clean Cycle Saved");
            }
        }).catch(function(error){
            console.log(JSON.stringify(error.response));
        })
    };

    return(
        <View style={styles.container}>
            <View style={styles.enterCleanCycle}>
                <Text style={styles.formText}> 허유영님의 청소주기 </Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholderTextColor="#D3D3D3"
                        onChangeText={(cleanCycle) => setCleanCycle(cleanCycle)}
                    />
                </View>
                <TouchableOpacity style={styles.confirmBtn} onPress={confirm}>
                    <Text style={styles.confirmText}> ENTER </Text>
                </TouchableOpacity>
            </View>

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
        },

        enterCleanCycle: {
            flexDirection : "row",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 50,
        },

        formText: {
            marginLeft: 90,
            fontSize: 17,
            fontWeight: "bold",
            color: "#606060"
        },

        TextInput: {
            height: 30,
            flex: 1,
            padding:5,
            marginLeft: 20,
        },

        inputView: {
            backgroundColor: "#fcebca",
            borderRadius: 10,
            width: "15%",
            height: 30,
            marginLeft: 5,
        },

        confirmBtn: {
            width: "15%",
            borderRadius: 10,
            height: 30,
            marginLeft: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fca503",
        },

        confirmText: {
            fontSize: 13,
            fontWeight: "bold",
            color: "#606060"
        },

        checkbox: {
            marginLeft: 110,
            marginTop: 50,
        },
});

export default Cleaning;