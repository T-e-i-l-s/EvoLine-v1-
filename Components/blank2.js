
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
  
export default function App({navigation}) {

    const toHome = () => {
        navigation.navigate("home")
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Спасибо за отзыв!</Text>
            <Text style={styles.text2} onPress={toHome}>Выход</Text>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#800000",
        alignItems: "center",
        justifyContent: "center",
        color:"white"
    },
    text2:{
        fontSize:22,
        padding:7,
        color:"#800000",
        backgroundColor:"white",
        margin:13,
        fontSize:30,
        borderRadius:10,
        fontFamily:"ubuntu-bold"
      },
    text1:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        fontFamily:"ubuntu-light",
    }
});