import { useState } from 'react';
import { StyleSheet } from 'react-native';

import Inputs from "./pages/Inputs"
import Main from "./pages/Main"
import Profile from "./pages/Profile"

export default function App() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [number, setNumber] = useState(0)

  if (name == "" && number == 0) {
    return <Inputs setName={setName} setImage={setImage} />
  }
  else if (number == 0) {
    return <Main name={name} setNumber={setNumber} />
  }
  else {
    return <Profile name={name} number={number} />
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
