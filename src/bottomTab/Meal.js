import React, {useState} from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    style,
    StyleSheet,
    Image,
} from "react-native";


const Meal = () => {
    const [mealCycle, setMealCycle] = useState(0);
    const confirm = async(  ) => {
        await axios.post("http://10.0.2.2:8000/app/goals/", {
            goal_id: "quu",
            meal: 0,
            exercise: 0,
            clean: mealCycle,
        })
        .then(function(response) {
            if(response.status == 201, 302, 304) {  //가능하면 400, 500번대 응답 빼고는 허용 그런식으로 하는게 좋다고 함
                Alert.alert("Meal Cycle Saved");
            }
        }).catch(function(error){
            console.log(JSON.stringify(error.response));
        })
    };

    return(
        <ScrollView style={styles.container}>
            <View style={styles.enterMealCycle}>
                <Text style={styles.formText}> 목표 하루 식사 횟수 </Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholderTextColor="#D3D3D3"
                        onChangeText={(mealCycle) => setMealCycle(mealCycle)}
                    />
                </View>
                <TouchableOpacity style={styles.confirmBtn} onPress={confirm}>
                    <Text style={styles.confirmText}> ENTER </Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: "center"}}>
                <Image style={styles.image} source={require("C:\\Users\\ziziz\\Jansori\\assets\\ttoekbokki.jpg")}/>
                <Text style={styles.text}> ▲ 떡볶이 </Text>
                <Image style={styles.image} source={require("C:\\Users\\ziziz\\Jansori\\assets\\bossam.jpg")}/>
                <Text style={styles.text}> ▲ 보쌈 </Text>
                <Image style={styles.image} source={require("C:\\Users\\ziziz\\Jansori\\assets\\sandwich.jpg")}/>
                <Text style={styles.text}> ▲ 샌드위치 </Text>
                <Image style={styles.image} source={require("C:\\Users\\ziziz\\Jansori\\assets\\juk.jpg")}/>
                <Text style={styles.text}> ▲ 죽 </Text>
                <Image style={styles.image} source={require("C:\\Users\\ziziz\\Jansori\\assets\\chicken.jpg")}/>
                <Text style={styles.text}> ▲ 치킨 </Text>
                <Image style={styles.image} source={require("C:\\Users\\ziziz\\Jansori\\assets\\sushi.jpeg")}/>
                <Text style={styles.text}> ▲ 초밥 </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    enterMealCycle: {
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


    image: {
        width: 300,
        height: 200,
        marginTop:20,
    },

    name: {
        fontSize: 15,
        height: 20,
        marginTop: 15,
        color: "#808080",
    }
});

export default Meal;