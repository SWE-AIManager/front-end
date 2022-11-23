import React from "react";
import {
    View,
    Text,
    style,
    StyleSheet,
    Image,
} from "react-native";
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";

const Detail = () => {

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
            <Text style={styles.category2}>Meal</Text>
            <Image style={styles.image} source={require("C:\\Users\\nyung\\AIManager\\assets\\chicken.jpg")}/>
            <Image style={styles.image} source={require("C:\\Users\\nyung\\AIManager\\assets\\sushi.jpeg")}/>
            <Text style={styles.category3}>Cleaning</Text>
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

    category2: {
        fontSize: "25px",
        height:30,
        color: "#808080",
        marginLeft: 10,
    },

    category3: {
        fontSize: "25px",
        height:30,
        color: "#808080",
        marginLeft: 10,
    },

    video: {
        width: 200,
        height: 150,
    },
});

export default Detail;