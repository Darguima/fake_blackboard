import React from "react"
import { View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native';

import BBButton from "../Components/BBButton";

interface ProfilePageProps {
  name: string
  studentNumber: string
  schoolDomain: string
}

const imageSize = 132

const ProfilePage:React.FC<ProfilePageProps> = ({name, studentNumber, schoolDomain}) => {
  const {height, width} = useWindowDimensions();
  const styles = generateStyles(width, height)

  return(
    <View style={styles.container}>

      <View style={styles.topContainer}>
        
        <View style={styles.pinkView}>
          <View style={styles.crossIconContainer}>
            <Image source={require("../assets/cross.jpg")} style={styles.crossIcon} />
          </View>
        </View>


        <View style={styles.whiteView}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageText} numberOfLines={1}>{name}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.emailText}>{studentNumber}@{schoolDomain}</Text>
            <BBButton text="View Profile" darkMode={true}/>
          </View>

        </View>
      </View>

      <Image source={require("../assets/bottomMenu.jpg")} style={styles.bottomImageMenu} resizeMode={"stretch"}/>
    </View>
  )
}

const generateStyles = (width: number, height: number) => 
StyleSheet.create({
  container: {
    flex: 1
  },

  topContainer: {
    height: "65%",
  },

  pinkView: {
    height: "55%",

    backgroundColor: "#fbf4fc"
  },
  
  crossIconContainer: {
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 20,
    left: 20,
    width: 26,
    height: 26,

    backgroundColor: "#262626",
  },

  crossIcon: {
    height: "100%",
    width: "100%"
  },

  whiteView: {
    height: "45%",
    alignItems: "center",
    justifyContent: "flex-end",

    backgroundColor: "#fff",

    borderBottomColor: "#dddddd",
    borderBottomWidth: 3,    
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",

    width: imageSize,
    height: imageSize,
    
    backgroundColor: "#262626",

    position: "absolute",
    top: -(imageSize / 2),

    borderRadius: (imageSize / 2),
    borderWidth: 8,
    borderColor: "#fff",

    overflow: "hidden"
  },

  imageText: {
    width: "1000%",

    textAlign: "center",

    color: "#fff",
    fontSize: 18,
  },

  userInfoContainer: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 30,

    width: "100%",
  },

  nameText: {
    paddingBottom: 12,

    color: "#757575",
    fontSize: 18
  },

  emailText: {
    paddingBottom: 12,

    fontSize: 12,
    color: "#757575",
  },

  bottomImageMenu: {
    width: width,
    height: height * 0.35,
  }
})

export default ProfilePage
