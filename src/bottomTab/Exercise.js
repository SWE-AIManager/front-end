import React from "react";
import {
    View,
    Text,
    style,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";

const Exercise = () => {
    return(
        <View style={styles.container}>
            <View style={styles.video}>
                <View flexDirection="row">
                    <TouchableOpacity style={styles.hashtag0}>
                        <Text style={styles.tagText}> #홈트 </Text>
                    </TouchableOpacity>
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
                        <Text style={styles.tagText}> #다이어트 </Text>
                    </TouchableOpacity>
                </View>
                <YoutubePlayer
                    height={240}
                    width={320}
                    play={false}
                    videoId={"lKwZ2DU4P-A"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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