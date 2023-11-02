

import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();


var d = new Date();
var day = d.getDay();
if (day == 0){
  day = 7
}



export default function App({navigation}) {


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
    if(day == 6 || day == 7){
      setl1(q.m1)
      setl2(q.m2)
      setl3(q.m3)
      setl4(q.m4)
      setl5(q.m5)
      setl6(q.m6)
      setl7(q.m7)
      setl8(q.m8)
      setl9(q.m9)
    }else if(day == 1){ 
      setl1(q.tu1)
      setl2(q.tu2)
      setl3(q.tu3)
      setl4(q.tu4)
      setl5(q.tu5)
      setl6(q.tu6)
      setl7(q.tu7)
      setl8(q.tu8)
      setl9(q.tu9)
    }else if(day == 2){
      setl1(q.w1)
      setl2(q.w2)
      setl3(q.w3)
      setl4(q.w4)
      setl5(q.w5)
      setl6(q.w6)
      setl7(q.w7)
      setl8(q.w8)
      setl9(q.w9)
    }else if(day == 3){
      setl1(q.th1)
      setl2(q.th2)
      setl3(q.th3)
      setl4(q.th4)
      setl5(q.th5)
      setl6(q.th6)
      setl7(q.th7)
      setl8(q.th8)
      setl9(q.th9)
    }else if(day == 4){
      setl1(q.f1)
      setl2(q.f2)
      setl3(q.f3)
      setl4(q.f4)
      setl5(q.f5)
      setl6(q.f6)
      setl7(q.f7)
      setl8(q.f8)
      setl9(q.f9)
    }else if(day == 5){
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

  const [hw1,sethw1] = useState("-") 
  const [hw2,sethw2] = useState("-") 
  const [hw3,sethw3] = useState("-") 
  const [hw4,sethw4] = useState("-") 
  const [hw5,sethw5] = useState("-") 
  const [hw6,sethw6] = useState("-") 
  const [hw7,sethw7] = useState("-") 
  const [hw8,sethw8] = useState("-") 
  const [hw9,sethw9] = useState("-") 


  cell = db.collection("Evo1").doc("hw");
  cell.get().then((doc) => {
    q = doc.data()  
    if      (l1 == "Биология")      {sethw1(q.bio   )}
    else if (l1 == "География")     {sethw1(q.geo   )}
    else if (l1 == "ИЗО")           {sethw1(q.art   )}
    else if (l1 == "История")       {sethw1(q.his   )}
    else if (l1 == "Литература")    {sethw1(q.lit   )}
    else if (l1 == "Геометрия")     {sethw1(q.geom  )}
    else if (l1 == "Алгебра")       {sethw1(q.alge  )}
    else if (l1 == "Музыка")       {sethw1(q.mus   )}
    else if (l1 == "Общество")      {sethw1(q.obs   )}
    else if (l1 == "Русский язык")  {sethw1(q.rus   )}
    else if (l1 == "Технология")    {sethw1(q.tec   )}
    else if (l1 == "Физ.культура")  {sethw1(q.pe    )}
    else if (l1 == "Физика")        {sethw1(q.physic)}
    else if (l1 == "Информатика")   {sethw1(q.info  )}
    else if (l1 == "КЧ")            {sethw1("В приложении нет дз для этого урока.")}
    else if (l1 == "-")             {sethw1("-")}
    else                            {sethw1("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l2 == "Биология")      {sethw2(q.bio   )}
    else if (l2 == "География")     {sethw2(q.geo   )}
    else if (l2 == "ИЗО")           {sethw2(q.art   )}
    else if (l2 == "История")       {sethw2(q.his   )}
    else if (l2 == "Литература")    {sethw2(q.lit   )}
    else if (l2 == "Геометрия")     {sethw2(q.geom  )}
    else if (l2 == "Алгебра")       {sethw2(q.alge  )}
    else if (l2 == "Музыка ")       {sethw2(q.mus   )}
    else if (l2 == "Общество")      {sethw2(q.obs   )}
    else if (l2 == "Русский язык")  {sethw2(q.rus   )}
    else if (l2 == "Технология")    {sethw2(q.tec   )}
    else if (l2 == "Физ.культура")  {sethw2(q.pe    )}
    else if (l2 == "Физика")        {sethw2(q.physic)}
    else if (l2 == "Информатика")   {sethw2(q.info  )}
    else if (l2 == "КЧ")            {sethw2("В приложении нет дз для этого урока.")}
    else if (l2 == "-")             {sethw2("-")}
    else                            {sethw2("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l3 == "Биология")      {sethw3(q.bio   )}
    else if (l3 == "География")     {sethw3(q.geo   )}
    else if (l3 == "ИЗО")           {sethw3(q.art   )}
    else if (l3 == "История")       {sethw3(q.his   )}
    else if (l3 == "Литература")    {sethw3(q.lit   )}
    else if (l3 == "Геометрия")     {sethw3(q.geom  )}
    else if (l3 == "Алгебра")       {sethw3(q.alge  )}
    else if (l3 == "Музыка ")       {sethw3(q.mus   )}
    else if (l3 == "Общество")      {sethw3(q.obs   )}
    else if (l3 == "Русский язык")  {sethw3(q.rus   )}
    else if (l3 == "Технология")    {sethw3(q.tec   )}
    else if (l3 == "Физ.культура")  {sethw3(q.pe    )}
    else if (l3 == "Физика")        {sethw3(q.physic)}
    else if (l3 == "Информатика")   {sethw3(q.info  )}
    else if (l3 == "КЧ")            {sethw3("В приложении нет дз для этого урока.")}
    else if (l3 == "-")             {sethw3("-")}
    else                            {sethw3("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l4 == "Биология")      {sethw4(q.bio   )}
    else if (l4 == "География")     {sethw4(q.geo   )}
    else if (l4 == "ИЗО")           {sethw4(q.art   )}
    else if (l4 == "История")       {sethw4(q.his   )}
    else if (l4 == "Литература")    {sethw4(q.lit   )}
    else if (l4 == "Геометрия")     {sethw4(q.geom  )}
    else if (l4 == "Алгебра")       {sethw4(q.alge  )}
    else if (l4 == "Музыка ")       {sethw4(q.mus   )}
    else if (l4 == "Общество")      {sethw4(q.obs   )}
    else if (l4 == "Русский язык")  {sethw4(q.rus   )}
    else if (l4 == "Технология")    {sethw4(q.tec   )}
    else if (l4 == "Физ.культура")  {sethw4(q.pe    )}
    else if (l4 == "Физика")        {sethw4(q.physic)}
    else if (l4 == "Информатика")   {sethw4(q.info  )}
    else if (l4 == "КЧ")            {sethw4("В приложении нет дз для этого урока.")}
    else if (l4 == "-")             {sethw4("-")}
    else                            {sethw4("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l5 == "Биология")      {sethw5(q.bio   )}
    else if (l5 == "География")     {sethw5(q.geo   )}
    else if (l5 == "ИЗО")           {sethw5(q.art   )}
    else if (l5 == "История")       {sethw5(q.his   )}
    else if (l5 == "Литература")    {sethw5(q.lit   )}
    else if (l5 == "Геометрия")     {sethw5(q.geom  )}
    else if (l5 == "Алгебра")       {sethw5(q.alge  )}
    else if (l5 == "Музыка ")       {sethw5(q.mus   )}
    else if (l5 == "Общество")      {sethw5(q.obs   )}
    else if (l5 == "Русский язык")  {sethw5(q.rus   )}
    else if (l5 == "Технология")    {sethw5(q.tec   )}
    else if (l5 == "Физ.культура")  {sethw5(q.pe    )}
    else if (l5 == "Физика")        {sethw5(q.physic)}
    else if (l5 == "Информатика")   {sethw5(q.info  )}
    else if (l5 == "Кч")            {sethw5("В приложении нет дз для этого урока.")}
    else if (l5 == "-")             {sethw5("-")}
    else                            {sethw5("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l6 == "Биология")      {sethw6(q.bio   )}
    else if (l6 == "География")     {sethw6(q.geo   )}
    else if (l6 == "ИЗО")           {sethw6(q.art   )}
    else if (l6 == "История")       {sethw6(q.his   )}
    else if (l6 == "Литература")    {sethw6(q.lit   )}
    else if (l6 == "Геометрия")     {sethw6(q.geom  )}
    else if (l6 == "Алгебра")       {sethw6(q.alge  )}
    else if (l6 == "Музыка ")       {sethw6(q.mus   )}
    else if (l6 == "Общество")      {sethw6(q.obs   )}
    else if (l6 == "Русский язык")  {sethw6(q.rus   )}
    else if (l6 == "Технология")    {sethw6(q.tec   )}
    else if (l6 == "Физ.культура")  {sethw6(q.pe    )}
    else if (l6 == "Физика")        {sethw6(q.physic)}
    else if (l6 == "Информатика")   {sethw6(q.info  )}
    else if (l6 == "КЧ")            {sethw6("В приложении нет дз для этого урока.")}
    else if (l6 == "-")             {sethw6("-")}
    else                            {sethw6("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l7 == "Биология")      {sethw7(q.bio   )}
    else if (l7 == "География")     {sethw7(q.geo   )}
    else if (l7 == "ИЗО")           {sethw7(q.art   )}
    else if (l7 == "История")       {sethw7(q.his   )}
    else if (l7 == "Литература")    {sethw7(q.lit   )}
    else if (l7 == "Геометрия")     {sethw7(q.geom  )}
    else if (l7 == "Алгебра")       {sethw7(q.alge  )}
    else if (l7 == "Музыка ")       {sethw7(q.mus   )}
    else if (l7 == "Общество")      {sethw7(q.obs   )}
    else if (l7 == "Русский язык")  {sethw7(q.rus   )}
    else if (l7 == "Технология")    {sethw7(q.tec   )}
    else if (l7 == "Физ.культура")  {sethw7(q.pe    )}
    else if (l7 == "Физика")        {sethw7(q.physic)}
    else if (l7 == "Информатика")   {sethw7(q.info  )}
    else if (l7 == "КЧ")            {sethw7("В приложении нет дз для этого урока.")}
    else if (l7 == "-")             {sethw7("-")}
    else                            {sethw7("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l8 == "Биология")      {sethw8(q.bio   )}
    else if (l8 == "География")     {sethw8(q.geo   )}
    else if (l8 == "ИЗО")           {sethw8(q.art   )}
    else if (l8 == "История")       {sethw8(q.his   )}
    else if (l8 == "Литература")    {sethw8(q.lit   )}
    else if (l8 == "Геометрия")     {sethw8(q.geom  )}
    else if (l8 == "Алгебра")       {sethw8(q.alge  )}
    else if (l8 == "Музыка ")       {sethw8(q.mus   )}
    else if (l8 == "Общество")      {sethw8(q.obs   )}
    else if (l8 == "Русский язык")  {sethw8(q.rus   )}
    else if (l8 == "Технология")    {sethw8(q.tec   )}
    else if (l8 == "Физ.культура")  {sethw8(q.pe    )}
    else if (l8 == "Физика")        {sethw8(q.physic)}
    else if (l8 == "Информатика")   {sethw8(q.info  )}
    else if (l8 == "КЧ")            {sethw8("В приложении нет дз для этого урока.")}
    else if (l8 == "-")             {sethw8("-")}
    else                            {sethw8("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}


    if      (l9 == "Биология")      {sethw9(q.bio   )}
    else if (l9 == "География")     {sethw9(q.geo   )}
    else if (l9 == "ИЗО")           {sethw9(q.art   )}
    else if (l9 == "История")       {sethw9(q.his   )}
    else if (l9 == "Литература")    {sethw9(q.lit   )}
    else if (l9 == "Геометрия")     {sethw9(q.geom  )}
    else if (l9 == "Алгебра")       {sethw9(q.alge  )}
    else if (l9 == "Музыка ")       {sethw9(q.mus   )}
    else if (l9 == "Общество")      {sethw9(q.obs   )}
    else if (l9 == "Русский язык")  {sethw9(q.rus   )}
    else if (l9 == "Технология")    {sethw9(q.tec   )}
    else if (l9 == "Физ.культура")  {sethw9(q.pe    )}
    else if (l9 == "Физика")        {sethw9(q.physic)}
    else if (l9 == "Информатика")   {sethw9(q.info  )}
    else if (l9 == "КЧ")            {sethw9("В приложении нет дз для этого урока.")}
    else if (l9 == "-")             {sethw9("-")}
    else                            {sethw9("Урок сдвоенный,узнайте дз своей группы в разделе 'ДЗ'")}
  })

  return (
    <ScrollView>
      <View style={styles.background}>

        <View style={styles.block}>
          <Text  style={styles.tabletitle}>{l1}</Text>
          <Text  style={styles.hw}>{hw1}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l2}</Text>
          <Text style={styles.hw}>{hw2}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l3}</Text>
          <Text style={styles.hw}>{hw3}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l4}</Text>
          <Text style={styles.hw}>{hw4}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l5}</Text>
          <Text style={styles.hw}>{hw5}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l6}</Text>
          <Text style={styles.hw}>{hw6}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l7}</Text>
          <Text style={styles.hw}>{hw7}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l8}</Text>
          <Text style={styles.hw}>{hw8}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.tabletitle}>{l9}</Text>
          <Text style={styles.hw}>{hw9}</Text>
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
  block:{
    textAlign:"center",
    backgroundColor:"white",
    width:"93%",
    marginTop:10,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10

  },
  tabletitle:{
    fontSize:25,
    color:"#800000",
    paddingTop:10,
    fontFamily:"ubuntu-bold",
  },
  hw:{
    fontSize:21,
    color:"black",
    paddingHorizontal:20,
    paddingBottom:20,
    fontFamily:"ubuntu-light",
  },
  
});
