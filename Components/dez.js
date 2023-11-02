import { useState } from 'react';
import { Alert, StyleSheet, Text, View ,ScrollView,} from 'react-native';

const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();

export default function App() {

    const [d1,setD1] = useState("-");
    const [d2,setD2] = useState("-");
    const [d3,setD3] = useState("-");
    const [d4,setD4] = useState("-");
    const [d5,setD5] = useState("-");
    const [d6,setD6] = useState("-");

    var cell = db.collection("Evo1").doc("dez");
    cell.get().then((doc) => {
      var q = doc.data()
      setD1("Пн: " + q.mon)
      setD2("Вт: " + q.tue)
      setD3("Ср: " + q.wed)
      setD4("Чт: " + q.thu)
      setD5("Пт: " + q.fri)
      setD6("Сб: " + q.sat)
    })

  return (
    <View style={styles.background}>
      <View style = {styles.block} paddingBottom={20}>
        <Text style={styles.title2}>Дежурство:</Text>
        <Text style={styles.text}>{d1}</Text>
        <Text style={styles.text}>{d2}</Text>
        <Text style={styles.text}>{d3}</Text>
        <Text style={styles.text}>{d4}</Text>
        <Text style={styles.text}>{d5}</Text>
        <Text style={styles.text}>{d6}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  background:{
    backgroundColor:"#800000",
    flex:1,
    alignItems:"center"
  },
  title:{
    fontSize:27,
    textAlign:"center",
    backgroundColor:"white",
    color:"#800000",
    width:"93%",
    margin:7,
    marginTop:15,
    padding:10,
    borderRadius:20,
    justifyContentz:"center"
  },
  block:{
    textAlign:"center",
    backgroundColor:"white",
    width:"93%",
    marginTop:20,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:30
  },
  text:{
    fontSize:22,
    padding:7,
    color:"black",
  },
  title2:{
    fontSize:37,
    padding:20,
    color:"#800000"
  }
});

