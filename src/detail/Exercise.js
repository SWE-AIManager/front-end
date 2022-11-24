import React from "react";
import {
    View,
    Text,
    style,
    StyleSheet,
} from "react-native";
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";

const Exercise = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.category1}>Exercise</Text>
            <YoutubePlayer
                height={300}
                width={400}
                play={false}
                videoId={"Hv5dNa_JqFs"}
            />
            <YoutubePlayer
                height={300}
                width={400}
                play={false}
                videoId={"lKwZ2DU4P-A"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    category1: {
        fontSize: "25px",
        height:30,
        color: "#808080",
        marginTop: 50,
        marginLeft: 10,
    },

    video: {
        width: 200,
        height: 150,
    },
});

export default Exercise;