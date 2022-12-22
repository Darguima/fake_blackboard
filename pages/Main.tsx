import React from "react"
import { View, StyleSheet, Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Constants from 'expo-constants';

interface InputsProps {
  name: string
  setNumber: React.Dispatch<React.SetStateAction<number>>
}

const imageSize = 140


const Main: React.FC<InputsProps> = ({ name, setNumber }) => {

  const { height, width } = useWindowDimensions();
  const styles = generateStyles(width, height)

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const number = getRandomInt(100000, 108000);

  return (
    <View style={styles.container}>


      <View style={styles.topContainer}>
        <View style={styles.pinkView}>
          <View style={styles.cross}><Image source={require("../assets/cross.jpg")} style={styles.x} /></View>
        </View>


        <View style={styles.whiteView}>
          <View style={styles.center}>
            <Text style={styles.textImage} numberOfLines={1}>{name}</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>a{number}@alunos.uminho.pt</Text>
            <TouchableOpacity style={styles.button} onPress={() => (setNumber(number))}><Text style={styles.buttonText}>View Profile</Text></TouchableOpacity>

          </View>
        </View>
      </View>

      <Image source={require("../assets/bottomMenu.jpg")} style={styles.bottomImage} resizeMode={"stretch"} />
    </View>
  )
}

const generateStyles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      width: "100%"
    },

    topContainer: {
      height: "65%",
    },

    pinkView: {
      height: "55%",
      backgroundColor: "#fbf4fc"

    },

    cross: {
      position: "absolute",
      top: Constants.statusBarHeight + 16,
      left: 16,
      width: 32,
      height: 32,
      backgroundColor: "#262626",
      justifyContent: "center",
      alignItems: "center"
    },

    x: {
      height: 32,
      width: 32
    },

    center: {
      position: "absolute",

      width: imageSize,
      height: imageSize,
      backgroundColor: "#262626",

      margin: "auto",
      justifyContent: "center",
      alignItems: "center",

      top: -(imageSize / 2),

      borderRadius: (imageSize / 2),

      borderWidth: 8,
      borderColor: "#fff",

      overflow: "hidden"
    },

    textImage: {
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 24,

      width: "1000%"
    },

    whiteView: {
      position: "relative",
      height: "45%",
      backgroundColor: "white",
      borderBottomColor: "#dddddd",
      borderBottomWidth: 3,

      alignItems: "center"
    },

    texts: {
      height: "100%",
      width: "100%",

      paddingTop: 35,

      justifyContent: "center",
      alignItems: "center"
    },

    name: {
      color: "#757575",
      paddingBottom: 15,
      fontSize: 18

    },

    email: {
      fontSize: 12,
      color: "#757575",
      paddingBottom: 15,

    },

    button: {
      width: 105,
      height: 37,
      backgroundColor: "#262626",

      justifyContent: "center",
      alignItems: "center",

      borderRadius: 4
    },

    buttonText: {
      color: "white",
      fontSize: 12
    },

    bottomImage: {
      width: width,
      height: height * 0.35,
      backgroundColor: "red"
    }
  })

export default Main
