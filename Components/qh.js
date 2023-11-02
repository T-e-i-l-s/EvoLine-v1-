import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();




export default function App({navigation}) {
  const [name  ,sname  ] =   useState("Загрузка...")
  const [descrip,sdescrip] = useState("-")
  const txt = "Квесты-это в первую очередь инструмент,при помощи которого вы можете проверить свои знания и найти пробелы в них,а так же при всем этом получить призы."
  
  var cell = db.collection("Evo1").doc("kvest");
    cell.get().then((doc) => {
    var q = doc.data()
    sname(q.name);
    sdescrip(q.description);
  })
  

  const toreg = () => {
    navigation.navigate("reg")
  }


  return (
    <View style={styles.background}>
      <Text  style={styles.warning}>Нажмите на квест,что бы начать!</Text>
      <View style={styles.block}>
        <Text style={styles.title} onPress={toreg}>{name}</Text>
        <Text style={styles.text} onPress={toreg}>{descrip}</Text>
      </View>


      <View style={styles.block}>
        <Text style={styles.title}>В чем плюс проходить квесты?</Text>
        <Text style={styles.text}>{txt}</Text>
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
  warning:{
    fontSize:17,
    textAlign:"center",
    color:"white",
    paddingTop:9,
    fontFamily:"ubuntu-light",
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
  title:{
    fontSize:37,
    padding:20,
    color:"#800000",
    textAlign:"center",
    fontFamily:"ubuntu-bold",
  },
  text:{
    fontSize:22,
    padding:7,
    color:"black",
    textAlign:"center",
    fontFamily:"ubuntu-light",
  },
});
