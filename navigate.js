import Home from "./Components/home";
import HW from "./Components/hw";
import Time from "./Components/timetable";
import News from "./Components/news";
import NextHW from "./Components/nexthw";
import Holi from "./Components/holidays";
import Birth from "./Components/birth";
import Dez from "./Components/dez";
import Pas from "./Pas/km";
import QH from "./Components/qh";
import Que from "./Components/quests";
import Reg from "./Components/reg";
import Blank1 from "./Components/blank1";
import Blank2 from "./Components/blank2";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";




const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Домашнее задание"
                component={HW}
                options={{title:"Домашнее задание"}}
            />
            <Stack.Screen
                name="time"
                component={Time}
                options={{title:"Расписание"}}
            />
            <Stack.Screen
                name="news"
                component={News}
                options={{title:"Новости"}}
            />
            <Stack.Screen
                name="nexthw"
                component={NextHW}
                options={{title:"ДЗ на завтра"}}
            />
            <Stack.Screen
                name="holi"
                component={Holi}
                options={{title:"Праздники"}}
            />
            <Stack.Screen
                name="birth"
                component={Birth}
                options={{title:"Дни Рождения"}}
            />
            <Stack.Screen
                name="dez"
                component={Dez}
                options={{title:"Дежурство"}}
            />
            <Stack.Screen
                name="km"
                component={Pas}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="qh"
                component={QH}
                options={{title:"Квесты"}}
            />
            <Stack.Screen
                name="que"
                component={Que}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="reg"
                component={Reg}
                options={{title:"Регистрация"}}
            />
            <Stack.Screen
                name="blank1"
                component={Blank1}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="blank2"
                component={Blank2}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    </NavigationContainer>
}