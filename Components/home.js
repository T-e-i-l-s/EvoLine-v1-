
import { SafeAreaView } from 'react-native-safe-area-context';


import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

//import useSound from 'use-sound';
//import mp3 from './open.mp3';
//
//const [play] = useSound(mp3);
//play()




const firebase = require("firebase")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCfZ1GVgwffHq5h2mcJHjIaNc0SgkH-4-0",
  authDomain: "evoline-bd9c1.firebaseapp.com",
  projectId: "evoline-bd9c1",
  storageBucket: "evoline-bd9c1.appspot.com",
  messagingSenderId: "661077431736",
  appId: "1:661077431736:web:446a532725153626a3ab4d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


var p = 0

var d = new Date();
var day = d.getDay();
var hours = d.getHours();
if (day == 0){
  day = 7
}

var interval = 0

var ev = 0

export default function App({navigation}) {

  const facts = [ //тут 52 факта
  
    "Кость в 5 раз  прочнее стали",
    "В мире всего 7% левшей",
    "Емкость мозга человека > 4 терабайта",
    "Ваш череп состоит из 29 костей",
    "Скорость нервного импульса 274 км/ч",
    "Человек забывает 90% своих снов",
    "Чарльз Осборн икал в течение 68 лет",
    "Человеку необходимо 7 минут,чтобы заснуть",
    "Аромат яблок и бананов помогает похудеть",
    "Крысы могут жить без воды дольше,чем верблюд",
    "100+ различных вирусов,вызывают насморк",
    "За жизнь кожа человека сменяется около 1000 раз",
    "У блондинов борода растет быстрее всех",
    "Сильнейшая мышца в человеческом теле-язык",
    "В Канаде озер больше всего в мире",
    "Дети растут быстрее всего весной",
    "Человек говорит около 4800 слов за 24 часа",
    "Вросшие ногти - наследственная черта",
    "Невозможно чихнуть с открытыми глазами",
    "Слоны - самые социальные животные",
    "Google зарабатывает 700 долларов в сек.",
    "В Гамбурге есть детский сад для мужчин",
    "Кошки не чувствуют сладкого вкуса",
    "Глаз страуса больше,чем его мозг",
    "Верблюжье молоко не скисает",
    "Страусы не прячут голову в песок",
    "В Японии есть парики для собак",
    "Леонардо да Винчи создал ножницы",
    "У комаров есть зубы",
    "Мухаммед-самое распространенное имя",
    "Эйфелеву башню перекрашивают раз в 7 лет",
    "Коала спит около 20 часов в сутки",
    "Плутон меньше, чем Россия",
    "Белки, как и кошки, умеют мурлыкать",
    "Дети до 3 месяцев плачут без слез",
    "В небе звезд больше,чем песчинок на земле",
    "Колибри-единсвенная птица летающая назад",
    "Между Россией и США всего 4км",
    "Самое шумное сущесво в океане-креветка",
    "В городе Чунцин метро проходит через жилые дома",
    "Кошки могут пить даже морскую воду",
    "Человек моргает 14-15 тысяч раз за день",
    "Изначально кетчуп готовили из грибов",
    "Летом Эйфелева башня выше, чем зимой",
    "Муравей не может умереть от падения",
    "Страпонтен - откидное сиденье",
    "Альберт Эйнштейн никогда не носил носков",
    "Большенство гекконов не могут моргать",
    "В городе Кюриц(Германия) есть 'Музей Лжи'",
    "Бамбук цветет раз в 60-130 лет",
    "Кабаны моют свою еду перед тем,как ее съесть",
    "Акулы появились на Земле раньше деревьев"
  ]
  
    const NextHW = () => {
      navigation.navigate("nexthw")
    }
    const tonews = () => {
      navigation.navigate("news")
    }
    const tohw = () => {
      navigation.navigate("Домашнее задание")
    }
    const totimetable = () => {
      navigation.navigate("time")
    }
    const toholi = () => {
      navigation.navigate("holi")
    }
    const toDez = () => {
      navigation.navigate("dez")
    }
    const toKM = () => {
      navigation.navigate("km")
    }
    const toqh = () => {
      navigation.navigate("qh")
    }
    const toBlank1 = () => {
      navigation.navigate("blank1")
    }

    const p1 = () => {
      p = p + 1
      if (p==5){
        toKM()
        p = 0
      }
    }



    const [l1,setl1] = useState("-")
    const [l2,setl2] = useState("-")
    const [l3,setl3] = useState("-")
    const [l4,setl4] = useState("-")
    const [l5,setl5] = useState("-")
    const [l6,setl6] = useState("-")
    const [l7,setl7] = useState("-")
    const [l8,setl8] = useState("-")
    const [l9,setl9] = useState("-")
   

    var cell = db.collection("Evo1").doc("timetable");
    cell.get().then((doc) => {
      var q = doc.data()
      if((day == 6 || day == 7) || (day == 1 && hours < 14)){
        setl1(q.m1)
        setl2(q.m2)
        setl3(q.m3)
        setl4(q.m4)
        setl5(q.m5)
        setl6(q.m6)
        setl7(q.m7)
        setl8(q.m8)
        setl9(q.m9)
      }else if(day == 1 || (day == 2 && hours < 14)){ 
        setl1(q.tu1)
        setl2(q.tu2)
        setl3(q.tu3)
        setl4(q.tu4)
        setl5(q.tu5)
        setl6(q.tu6)
        setl7(q.tu7)
        setl8(q.tu8)
        setl9(q.tu9)
      }else if(day == 2 || (day == 3 && hours < 14)){
        setl1(q.w1)
        setl2(q.w2)
        setl3(q.w3)
        setl4(q.w4)
        setl5(q.w5)
        setl6(q.w6)
        setl7(q.w7)
        setl8(q.w8)
        setl9(q.w9)
      }else if(day == 3 || (day == 4 && hours < 14)){
        setl1(q.th1)
        setl2(q.th2)
        setl3(q.th3)
        setl4(q.th4)
        setl5(q.th5)
        setl6(q.th6)
        setl7(q.th7)
        setl8(q.th8)
        setl9(q.th9)
      }else if(day == 4 || (day == 5 && hours < 14)){
        setl1(q.f1)
        setl2(q.f2)
        setl3(q.f3)
        setl4(q.f4)
        setl5(q.f5)
        setl6(q.f6)
        setl7(q.f7)
        setl8(q.f8)
        setl9(q.f9)
      }else if(day == 5 || (day == 6 && hours < 14)){
        setl1(q.s1)
        setl2(q.s2)
        setl3(q.s3)
        setl4(q.s4)
        setl5(q.s5)
        setl6(q.s6)
        setl7(q.s7)
        setl8(q.s8)
        setl9(q.s9)
      }
    })

    //const [ev, setEv] = useState("-");

    const [nowdez,setNowd] = useState("-");
    const [nexdez,setNexd] = useState("-");

    const [top,setTop] = useState("-")
    

    cell = db.collection("Evo1").doc("dez");
    cell.get().then((doc) => {
      q = doc.data()
      if (day == 1){
        setNowd("Деж.сегодня: " + q.mon)
        setNexd( "Деж.завтра: " + q.tue)
      }else if (day == 2){
        setNowd("Деж.сегодня: " + q.tue)
        setNexd( "Деж.завтра: " + q.wed)
      }else if (day == 3){
        setNowd("Деж.сегодня: " + q.wed) 
        setNexd( "Деж.завтра: " + q.thu)
      }else if (day == 4){
        setNowd("Деж.сегодня: " + q.thu)
        setNexd( "Деж.завтра: " + q.fri)
      }else if (day == 5){
        setNowd("Деж.сегодня: " + q.fri)
        setNexd( "Деж.завтра: " + q.sat)
      }else if (day == 6){
        setNowd("Деж.сегодня: " + q.sat)
      }else if (day == 7){
        setNexd( "Деж.завтра: " + q.mon)
      }
    })

    if (ev == 0){
      ev = 1
      cell = db.collection("Evo1").doc("news");
      cell.get().then((doc) => {
        q = doc.data()
        setTop(q.event);
      })
    }
    

    

    

    
    var showfact = 0
    var showev = 1
    var random = 51
    

    const upd = () =>{
      if (showev == 1){
        setTop(facts[random])
        showev = 1
        showfact = 0
        random = random - 1
        if (random == 0){
          random = 51
        }
      }else if(showfact == 1){
        cell = db.collection("Evo1").doc("news");
        cell.get().then((doc) => {
          q = doc.data()
          setTop(q.event);
        })
        showev = 1
        showfact = 0
      }
    }

    if (interval == 0){
      interval = 1
      setInterval(()=>{
        upd()
      },6000)
    }
    

    

    return (
      <SafeAreaView style={styles.background}>

        <Text style={styles.event}>
          {top}
        </Text>

        <Text numberOfLines={1} style={styles.tabletitle}>Следующие уроки:</Text>
        <View style={styles.timetable}>
          <Text numberOfLines={1} style={styles.num}>{l1}</Text>
          <Text numberOfLines={1} style={styles.num}>{l2}</Text>
          <Text numberOfLines={1} style={styles.num}>{l3}</Text>
          <Text numberOfLines={1} style={styles.num}>{l4}</Text>
          <Text numberOfLines={1} style={styles.num}>{l5}</Text>
          <Text numberOfLines={1} style={styles.num}>{l6}</Text>
          <Text numberOfLines={1} style={styles.num}>{l7}</Text>
          <Text numberOfLines={1} style={styles.num}>{l8}</Text>
          <Text numberOfLines={1} style={styles.num}>{l9}</Text>
        </View>
        <Text style={styles.nexthw} onPress={NextHW}>Узнать дз на завтра</Text>

        <View style={styles.deztable}>
          <Text numberOfLines={1} onPress={toDez} style={styles.dez}>{nowdez}</Text>
          <Text numberOfLines={1} onPress={toDez} style={styles.dez}>{nexdez}</Text>
        </View>

        <Text style={styles.feedback} onPress={toBlank1}>Написать отзыв</Text>

        <View style={styles.navbuts}>
          <Text style={styles.anavbut} alignItems={"flex-start"} onPress={p1}>Главная</Text>
          <Text style={styles.navbut} alignItems={"center"} onPress={tonews}>Новоcти</Text>
          <Text style={styles.navbut} alignItems={"center"} onPress={tohw}>ДЗ</Text>
          <Text style={styles.navbut} alignItems={"center"} onPress={totimetable}>Распис.</Text>
          <Text style={styles.navbut} alignItems={"center"} onPress={toholi}>Празд.</Text>
          <Text style={styles.navbut} alignItems={"flex-end"} onPress={toqh}>Квест</Text>
        </View>

        <View backgroundColor={"white"} height={25}></View>
        
      </SafeAreaView>
    );
}


  
const styles = StyleSheet.create({
  background:{
    backgroundColor:"#800000",
    flex:1,
    alignItems:"center"
  },
  event:{
    fontSize:25,
    textAlign:"center",
    backgroundColor:"white",
    color:"#800000",
    width:"93%",
    height:"18%",
    margin:7,
    padding:20,
    borderRadius:20,
    fontFamily:"ubuntu-bold",
  },
  timetable:{
    backgroundColor:"white",
    width:"93%",
    height:"37%",
  },
  tabletitle:{
    fontSize:25,
    color:"#800000",
    backgroundColor:"white",
    width:"93%",
    height:"6%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    textAlign:"center",
    fontFamily:"ubuntu-bold",
    justifyContent:"center",
    padding:5
  },
  num:{
    fontSize:21,
    color:"black",
    marginLeft:"5%",
    marginVertical:2,
    fontFamily:"ubuntu-light",
  },
  //
  nexthw:{
    backgroundColor:"#9B3333",
    padding:20,
    fontSize:22,
    color:"white",
    width:"93%",
    height:"10%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    textAlign:"center",
    fontFamily:"ubuntu-bold",
  },
  deztable:{
    backgroundColor:"white",
    width:"93%",
    height:"10%",
    marginTop:11,
    marginBottom:10,
    borderRadius:20,
    justifyContent:"center",
  },
  dez:{
    fontSize:20,
    color:"#800000",
    marginLeft:"5%",
    fontFamily:"ubuntu-light",
  },
  feedback:{
    fontSize:20,
    textAlign:"center",
    backgroundColor:"#9B3333",
    color:"white",
    width:"93%",
    height:"7%",
    justifyContent:"center",
    padding:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    fontFamily:"ubuntu-bold",
  },
  anavbut:{
    color:"#800000",
    flex:1,
    textAlign:"center",
    paddingTop:15,
    borderColor:"white",
    borderWidth:4,
  },
  navbut:{
    color:"black",
    flex:1,
    textAlign:"center",
    paddingTop:15,
  },
  navbuts:{
    backgroundColor:"white",
    justifyContent:"flex-end",
    flexDirection:"row",
    width:"100%",
    height:"8%"
  }
});