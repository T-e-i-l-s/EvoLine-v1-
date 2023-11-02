
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();



export default function App({navigation}) {

  const [m1,setm1] = useState("-")
  const [m2,setm2] = useState("-")
  const [m3,setm3] = useState("-")
  const [m4,setm4] = useState("-")
  const [m5,setm5] = useState("-")
  const [m6,setm6] = useState("-")
  const [m7,setm7] = useState("-")
  const [m8,setm8] = useState("-")
  const [m9,setm9] = useState("-")

  const [tue1,settu1] = useState("-")
  const [tue2,settu2] = useState("-")
  const [tue3,settu3] = useState("-")
  const [tue4,settu4] = useState("-")
  const [tue5,settu5] = useState("-")
  const [tue6,settu6] = useState("-")
  const [tue7,settu7] = useState("-")
  const [tue8,settu8] = useState("-")
  const [tue9,settu9] = useState("-")

  const [w1,setw1] = useState("-")
  const [w2,setw2] = useState("-")
  const [w3,setw3] = useState("-")
  const [w4,setw4] = useState("-")
  const [w5,setw5] = useState("-")
  const [w6,setw6] = useState("-")
  const [w7,setw7] = useState("-")
  const [w8,setw8] = useState("-")
  const [w9,setw9] = useState("-")

  const [thu1,setth1] = useState("-")
  const [thu2,setth2] = useState("-")
  const [thu3,setth3] = useState("-")
  const [thu4,setth4] = useState("-")
  const [thu5,setth5] = useState("-")
  const [thu6,setth6] = useState("-")
  const [thu7,setth7] = useState("-")
  const [thu8,setth8] = useState("-")
  const [thu9,setth9] = useState("-")

  const [f1,setf1] = useState("-")
  const [f2,setf2] = useState("-")
  const [f3,setf3] = useState("-")
  const [f4,setf4] = useState("-")
  const [f5,setf5] = useState("-")
  const [f6,setf6] = useState("-")
  const [f7,setf7] = useState("-")
  const [f8,setf8] = useState("-")
  const [f9,setf9] = useState("-")

  const [s1,sets1] = useState("-")
  const [s2,sets2] = useState("-")
  const [s3,sets3] = useState("-")
  const [s4,sets4] = useState("-")
  const [s5,sets5] = useState("-")
  const [s6,sets6] = useState("-")
  const [s7,sets7] = useState("-")
  const [s8,sets8] = useState("-")
  const [s9,sets9] = useState("-")


  var cell = db.collection("Evo1").doc("timetable");
  cell.get().then((doc) => {
    var q = doc.data()
    setm1(q.m1);
    setm2(q.m2);
    setm3(q.m3);
    setm4(q.m4);
    setm5(q.m5);
    setm6(q.m6);
    setm7(q.m7);
    setm8(q.m8);
    setm9(q.m9);

    settu1(q.tu1);
    settu2(q.tu2);
    settu3(q.tu3);
    settu4(q.tu4);
    settu5(q.tu5);
    settu6(q.tu6);
    settu7(q.tu7);
    settu8(q.tu8);
    settu9(q.tu9);

    setw1(q.w1);
    setw2(q.w2);
    setw3(q.w3);
    setw4(q.w4);
    setw5(q.w5);
    setw6(q.w6);
    setw7(q.w7);
    setw8(q.w8);
    setw9(q.w9);

    setth1(q.th1);
    setth2(q.th2);
    setth3(q.th3);
    setth4(q.th4);
    setth5(q.th5);
    setth6(q.th6);
    setth7(q.th7);
    setth8(q.th8);
    setth9(q.th9);

    setf1(q.f1);
    setf2(q.f2);
    setf3(q.f3);
    setf4(q.f4);
    setf5(q.f5);
    setf6(q.f6);
    setf7(q.f7);
    setf8(q.f8);
    setf9(q.f9);

    sets1(q.s1);
    sets2(q.s2);
    sets3(q.s3);
    sets4(q.s4);
    sets5(q.s5);
    sets6(q.s6);
    sets7(q.s7);
    sets8(q.s8);
    sets9(q.s9);
  })
  return (
    <ScrollView>
      <View style={styles.background}>

        <View style={styles.timetable}>
          <Text numberOfLines={1} style={styles.tabletitle}>Понедельник</Text>
          <Text numberOfLines={1} style={styles.num}>{m1}</Text>
          <Text numberOfLines={1} style={styles.num}>{m2}</Text>
          <Text numberOfLines={1} style={styles.num}>{m3}</Text>
          <Text numberOfLines={1} style={styles.num}>{m4}</Text>
          <Text numberOfLines={1} style={styles.num}>{m5}</Text>
          <Text numberOfLines={1} style={styles.num}>{m6}</Text>
          <Text numberOfLines={1} style={styles.num}>{m7}</Text>
          <Text numberOfLines={1} style={styles.num}>{m8}</Text>
          <Text numberOfLines={1} style={styles.num}>{m9}</Text>
        </View>
        <View style={styles.timetable}>
          <Text numberOfLines={1} style={styles.tabletitle}>Вторник</Text>
          <Text numberOfLines={1} style={styles.num}>{tue1}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue2}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue3}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue4}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue5}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue6}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue7}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue8}</Text>
          <Text numberOfLines={1} style={styles.num}>{tue9}</Text>
        </View>
        <View style={styles.timetable}>
          <Text numberOfLines={1} style={styles.tabletitle}>Среда</Text>
          <Text numberOfLines={1} style={styles.num}>{w1}</Text>
          <Text numberOfLines={1} style={styles.num}>{w2}</Text>
          <Text numberOfLines={1} style={styles.num}>{w3}</Text>
          <Text numberOfLines={1} style={styles.num}>{w4}</Text>
          <Text numberOfLines={1} style={styles.num}>{w5}</Text>
          <Text numberOfLines={1} style={styles.num}>{w6}</Text>
          <Text numberOfLines={1} style={styles.num}>{w7}</Text>
          <Text numberOfLines={1} style={styles.num}>{w8}</Text>
          <Text numberOfLines={1} style={styles.num}>{w9}</Text>
        </View>
        <View style={styles.timetable}>
          <Text numberOfLines={1} style={styles.tabletitle}>Четверг</Text>
          <Text numberOfLines={1} style={styles.num}>{thu1}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu2}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu3}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu4}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu5}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu6}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu7}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu8}</Text>
          <Text numberOfLines={1} style={styles.num}>{thu9}</Text>
        </View>
        <View style={styles.timetable}>
          <Text numberOfLines={1} style={styles.tabletitle}>Пятница</Text>
          <Text numberOfLines={1} style={styles.num}>{f1}</Text>
          <Text numberOfLines={1} style={styles.num}>{f2}</Text>
          <Text numberOfLines={1} style={styles.num}>{f3}</Text>
          <Text numberOfLines={1} style={styles.num}>{f4}</Text>
          <Text numberOfLines={1} style={styles.num}>{f5}</Text>
          <Text numberOfLines={1} style={styles.num}>{f6}</Text>
          <Text numberOfLines={1} style={styles.num}>{f7}</Text>
          <Text numberOfLines={1} style={styles.num}>{f8}</Text>
          <Text numberOfLines={1} style={styles.num}>{f9}</Text>
        </View>
        <View style={styles.timetable}>
          <Text numberOfLines={1} style={styles.tabletitle}>Суббота</Text>
          <Text numberOfLines={1} style={styles.num}>{s1}</Text>
          <Text numberOfLines={1} style={styles.num}>{s2}</Text>
          <Text numberOfLines={1} style={styles.num}>{s3}</Text>
          <Text numberOfLines={1} style={styles.num}>{s4}</Text>
          <Text numberOfLines={1} style={styles.num}>{s5}</Text>
          <Text numberOfLines={1} style={styles.num}>{s6}</Text>
          <Text numberOfLines={1} style={styles.num}>{s7}</Text>
          <Text numberOfLines={1} style={styles.num}>{s8}</Text>
          <Text numberOfLines={1} style={styles.num}>{s9}</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#800000",
    flex:1,
    alignItems:"center"
  },
  timetable:{
    backgroundColor:"white",
    width:"93%",
    padding:20,
    borderRadius:20,
    margin:20,
    alignItems:"center",
    justifyContent:"center"
  },
  tabletitle:{
    fontSize:30,
    color:"#800000",
    fontFamily:"ubuntu-bold",
  },
  num:{
    fontSize:21,
    color:"black",
    marginTop:"1.5%",
    fontFamily:"ubuntu-light",
  },
  
});
