
import { Alert, StyleSheet, Text, View ,ScrollView,} from 'react-native';

const h = [
    "СаматМ-4сентября", 
    "Алексей-11 сентября",
    "Амир-23 октября",
    "Кирам-25 октября",
    "Нияз -2 ноября",
    "Арслан-23 ноября",
    "Марат,Динияр-5 декабря",
    "СаматХ-7 декабря",
    "КаримГ-10 декабря",
    "Руслан,Рустам-11 декабря",
    "Асгат-15 декабря",
    "Аяз-4 января",
    "Бобик-9 февраля",
    "Ислам-14 февраля",
    "Матвей-25 февраля",
    "Раиль-25 марта",
    "Кирилл-30 апреля",
    "КаримМус-7 мая",
    "КаримМиф-13 мая",
    "Рамиль-3 июня",
    "Хасан 11 июня",
    "Зуфар-18 июня",
    "Булат-9 августа"
]

























export default function App() {
  return (
    <ScrollView>
      <View style={styles.background}>
        <Text style={styles.subs}>{h[0]}</Text>
        <Text style={styles.subs}>{h[1]}</Text>
        <Text style={styles.subs}>{h[2]}</Text>
        <Text style={styles.subs}>{h[3]}</Text>
        <Text style={styles.subs}>{h[4]}</Text>
        <Text style={styles.subs}>{h[5]}</Text>
        <Text style={styles.subs}>{h[6]}</Text>
        <Text style={styles.subs}>{h[7]}</Text>
        <Text style={styles.subs}>{h[8]}</Text>
        <Text style={styles.subs}>{h[9]}</Text>
        <Text style={styles.subs}>{h[10]}</Text>
        <Text style={styles.subs}>{h[11]}</Text>
        <Text style={styles.subs}>{h[12]}</Text>
        <Text style={styles.subs}>{h[13]}</Text>
        <Text style={styles.subs}>{h[14]}</Text>
        <Text style={styles.subs}>{h[15]}</Text>
        <Text style={styles.subs}>{h[16]}</Text>
        <Text style={styles.subs}>{h[17]}</Text>
        <Text style={styles.subs}>{h[18]}</Text>
        <Text style={styles.subs}>{h[19]}</Text>
        <Text style={styles.subs}>{h[20]}</Text>
        <Text style={styles.subs}>{h[21]}</Text>
        <Text style={styles.subs}>{h[22]}</Text>
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
    margin:7,
    marginTop:15,
    padding:10,
    borderRadius:20,
    justifyContentz:"center",
    fontFamily:"ubuntu-bold",
  },
  warning:{
    fontSize:17,
    textAlign:"center",
    color:"white",
    paddingBottom:9,
  },
  subs:{
    width:"100%",
    fontSize:30,
    backgroundColor:"white",
    color:"#800000",
    borderColor:"#800000",
    borderWidth:2,
    padding:"4%",
    fontFamily:"ubuntu-light",
  },
});

