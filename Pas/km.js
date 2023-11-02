
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import axios from "axios";
  
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Made by Karim Mustafin</Text>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        
    },
    text:{
        fontSize:25
    }
});