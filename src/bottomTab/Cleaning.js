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
                Alert.alert("Save Clean Cycle");
            }
        }).catch(function(error){
            console.log(JSON.stringify(error.response));
        })
        
    };

    return(
        <View style={styles.container}>
            <View style={styles.enterCleanCycle}>
                <Text style={styles.formText}> 청소주기입력 </Text>
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
        justifyContent: "center",
    },

    enterCleanCycle: {
        flexDirection : "row",
    },

    formText: {
        marginLeft: 50,
    },

    TextInput: {
        height: 30,
        flex: 1,
        padding:10,
        marginLeft: 10,
    },

    inputView: {
        backgroundColor: "#fcebca",
        borderRadius: 10,
        width: "30%",
        height: 30,
        marginLeft: 10,
    },

    confirmBtn: {
        width: "30%",
        borderRadius: 10,
        height: 30,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fca503",
    },

    SignUpText: {
        fontSize: 13,
    },

    checkbox: {
        marginLeft: 90,
        marginBottom: 50,
    },
});

export default Cleaning;