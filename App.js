import Base from "./navigate";

import * as Font from 'expo-font';



Font.loadAsync({
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  'ubuntu-light': require('./assets/fonts/Ubuntu-Light.ttf'),
});


export default function App() {
  
  return (
    <Base/>
  );
}

