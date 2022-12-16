import React, {useState} from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    style,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";

const Exercise = () => {
    const [exerciseCycle, setExerciseCycle] = useState(0);
    const confirm = async(  ) => {
        await axios.post("http://10.0.2.2:8000/app/goals/", {
            goal_id: "quu",
            meal: 0,
            exercise: 0,
            clean: exerciseCycle,
        })
        .then(function(response) {
            if(response.status == 201, 302, 304) {  //가능하면 400, 500번대 응답 빼고는 허용 그런식으로 하는게 좋다고 함
                Alert.alert("Exercise Cycle Saved");
            }
        }).catch(function(error){
            console.log(JSON.stringify(error.response));
        })
    };

    return(
        <ScrollView style={styles.container}>
            <View style={styles.enterExerciseCycle}>
                <Text style={styles.formText}> 목표 운동 주기 </Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholderTextColor="#D3D3D3"
                        onChangeText={(exerciseCycle) => setExerciseCycle(exerciseCycle)}
                    />
                </View>
                <TouchableOpacity style={styles.confirmBtn} onPress={confirm}>
                    <Text style={styles.confirmText}> ENTER </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.video}>
                <View flexDirection="row">
                    <TouchableOpacity style={styles.hashtag}>
                        <Text style={styles.tagText}> #스트레칭 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hashtag}>
                        <Text style={styles.tagText}> #요가 </Text>
                    </TouchableOpacity>
                </View>
                <YoutubePlayer
                    height={240}
                    width={320}
                    play={false}
                    videoId={"Hv5dNa_JqFs"}
                />

                <View flexDirection="row">
                    <TouchableOpacity style={styles.hashtag0}>
                        <Text style={styles.tagText}> #홈트 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hashtag}>
                        <Text style={styles.tagText}> #유산소 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hashtag}>
                        <Text style={styles.tagText}> #다이어트 </Text>
                    </TouchableOpacity>
                </View>
                <YoutubePlayer
                    height={240}
                    width={320}
                    play={false}
                    videoId={"lKwZ2DU4P-A"}
                />

                <View flexDirection="row">
                    <TouchableOpacity style={styles.hashtag}>
                        <Text style={styles.tagText}> #근력 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hashtag0}>
                        <Text style={styles.tagText}> #맨몸운동 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hashtag}>
                        <Text style={styles.tagText}> #전신 </Text>
                    </TouchableOpacity>
                </View>
                <YoutubePlayer
                    height={240}
                    width={320}
                    play={false}
                    videoId={"CYcLODSeC-c"}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    enterExerciseCycle: {
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

    videoContainer: {
        flex: 10,
        backgroundColor: "#fff",
    },

    video: {
        marginTop: 20,
        marginLeft: 33,
    },

    hashtag0: {
        width: 70,
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginLeft: 3,
        backgroundColor: "#D3D3D3",
        marginBottom: 4,
    },

    hashtag: {
        width: 70,
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginLeft: 13,
        backgroundColor: "#D3D3D3",
        marginBottom: 4,
    },

    tagText: {
        color: "#808080",
    },
});

export default Exercise;