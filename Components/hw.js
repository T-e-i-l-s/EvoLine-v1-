
import { useState } from 'react';
import { Alert, StyleSheet, Text, View ,ScrollView,} from 'react-native';

const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();

export default function App() {

  const bio = () =>{Alert.alert( "Биология     ",        bi)}
  const tur1 = () =>{Alert.alert("Турецкий(рус)", tu1)}
  const tur2 = () =>{Alert.alert("Турецкий(тат)", tu2)}
  const geo = () =>{Alert.alert( "География    ",       ge)}
  const art = () =>{Alert.alert( "ИЗО          ",             ar)}
  const eng1 = () =>{Alert.alert("Англ(сред)   ",    en1)}
  const eng2 = () =>{Alert.alert("Англ(продв)  ",   en2)}
  const his = () =>{Alert.alert( "История      ",         hi)}
  const lit = () =>{Alert.alert( "Литература   ",      li)}
  const gmat = () =>{Alert.alert("Геометрия    ",      geomet)}
  const amat = () =>{Alert.alert("Алгебра      ",      algeb)}
  const mus = () =>{Alert.alert( "Музыка       ",          mu)}
  const obs = () =>{Alert.alert( "Общество     ",        ob)}
  const rl1 = () =>{Alert.alert( "Род.лит(рус)",  rol1)}
  const rl2 = () =>{Alert.alert( "Род.лит(тат) ",  rol2)}
  const r1 = () =>{Alert.alert(  "Род.яз(рус)  ",     ro1)}
  const r2 = () =>{Alert.alert(  "Род.яз(тат)  ",     ro2)}
  const rus = () =>{Alert.alert( "Русский язык ",    ru)}
  const tec = () =>{Alert.alert( "Технология   ",      te)}
  const pe = () =>{Alert.alert(  "Физ.культура ",      p)}
  const phys = () =>{Alert.alert("Физика       ",      ph)}
  const info = () =>{Alert.alert("Информатика  ",      inf)}


 const [  bi,setbi  ] = useState("-")
  const [ tu1,settu1  ] = useState("-")
  const [ tu2,settu2  ] = useState("-")
  const [  ge,setge  ] = useState("-")
  const [  ar,setar  ] = useState("-")
  const [ en1,seten1  ] = useState("-")
  const [ en2,seten2  ] = useState("-")
  const [  hi,sethi  ] = useState("-")
  const [  li,setli  ] = useState("-")
  const [  algeb,setalgeb  ] = useState("-")
  const [  geomet,setgeomet  ] = useState("-")
  const [  mu,setmu  ] = useState("-")
  const [  ob,setob  ] = useState("-")
  const [rol1,setrol1] = useState("-")
  const [rol2,setrol2] = useState("-")
  const [ ro1,setro1 ] = useState("-")
  const [ ro2,setro2 ] = useState("-")
  const [  ru,setru  ] = useState("-")
  const [  te,sette  ] = useState("-")
  const [   p,setp   ] = useState("-")
  const [   ph,setph   ] = useState("-")
  const [   inf,setinfo   ] = useState("-")

  var cell = db.collection("Evo1").doc("hw");
  cell.get().then((doc) => {
    var q = doc.data()
    setbi(    q.bio  );
    settu1(   q.tur1 );
    settu2(   q.tur2 );
    setge(    q.geo  );
    setar(    q.art  );
    seten1(   q.eng1 );
    seten2(   q.eng2 );
    sethi(    q.his  );
    setli(    q.lit  );
    setgeomet(q.geom );
    setalgeb( q.alge );
    setmu(    q.mus  );
    setob(    q.obs  );
    setrol1(  q.rl1  );
    setrol2(  q.rl2  );
    setro1(   q.r1   );
    setro2(   q.r2   );
    setru(    q.rus  );
    sette(    q.tec  );
    setp(     q.pe   );
    setph(    q.physic);
    setinfo(  q.info  );
  }) 


  return (
    <ScrollView>
      <View style={styles.background}>
        <Text style={styles.title}>
          Твое ДЗ:
        </Text>
        <Text  style={styles.warning}>Для получения дз нажмите на название предмета!</Text>
        <Text style={styles.subs} onPress={bio } >Биология</Text>
        <Text style={styles.subs} onPress={tur1}>Турецкий(рус)</Text>
        <Text style={styles.subs} onPress={tur2}>Турецкий(тат)</Text>
        <Text style={styles.subs} onPress={geo }>География</Text>
        <Text style={styles.subs} onPress={art }>ИЗО</Text>
        <Text style={styles.subs} onPress={eng1}>Английский(сред)</Text>
        <Text style={styles.subs} onPress={eng2}>Английский(продв)</Text>
        <Text style={styles.subs} onPress={his }>История</Text>
        <Text style={styles.subs} onPress={lit }>Литература</Text>
        <Text style={styles.subs} onPress={amat }>Алгебра</Text>
        <Text style={styles.subs} onPress={gmat }>Геометрия</Text>
        <Text style={styles.subs} onPress={mus }>Музыка</Text>
        <Text style={styles.subs} onPress={obs }>Обществознание</Text>
        <Text style={styles.subs} onPress={rl1 }>Родная.лит(рус)</Text>
        <Text style={styles.subs} onPress={rl2 }>Родная.лит(тат)</Text>
        <Text style={styles.subs} onPress={r1  }>Родной.яз(рус)</Text>
        <Text style={styles.subs} onPress={r2  }>Родной.яз(тат)</Text>
        <Text style={styles.subs} onPress={rus }>Русский.яз</Text>
        <Text style={styles.subs} onPress={tec }>Технология</Text>
        <Text style={styles.subs} onPress={pe  }>Физ.культура</Text>
        <Text style={styles.subs} onPress={phys  }>Физика</Text>
        <Text style={styles.subs} onPress={info}>Информатика</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  background:{
    backgroundColor:"#800000",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    fontSize:27,
    textAlign:"center",
    backgroundColor:"white",
    color:"#800000",
    width:"93%",
    height:"4%",
    margin:7,
    marginTop:15,
    padding:10,
    borderRadius:20,
    justifyContent:"center",
    fontFamily:"ubuntu-bold",
  },
  warning:{
    fontSize:17,
    textAlign:"center",
    color:"white",
    paddingBottom:9,
    fontFamily:"ubuntu-light",
  },
  subs:{
    width:"100%",
    fontSize:30,
    backgroundColor:"white",
    color:"#800000",
    borderColor:"#800000",
    borderWidth:2,
    padding:"4%",
    fontFamily:"ubuntu-bold",
  },
});

