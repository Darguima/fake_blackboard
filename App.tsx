import { useState } from 'react';
import { StyleSheet } from 'react-native';

import Inputs from "./pages/Inputs"
import Main from "./pages/Main"

export default function App() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  return name == "" ?
  <Inputs setName={setName} setImage={setImage} />
  :
  <Main name={name} image={image} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
