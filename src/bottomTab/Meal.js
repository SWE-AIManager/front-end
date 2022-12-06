import React from "react";
import {
    View,
    ScrollView,
    Text,
    style,
    StyleSheet,
    Image,
} from "react-native";


const Meal = () => {
    return(
        <ScrollView style={styles.container}>
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