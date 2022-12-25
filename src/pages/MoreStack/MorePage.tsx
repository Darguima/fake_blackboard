import React from "react"
import { View, StyleSheet, Image, Text } from 'react-native';
import { useNavigationMoreStack } from "../../routes/useNavigation";

import BBButton from "../../components/BBButton";

import useUserInfo from "../../contexts/userInfo";

const imageSize = 132

const MorePage:React.FC = () => {
  const {name, studentNumber, schoolDomain} = useUserInfo()

  const { navigate } = useNavigationMoreStack()

  return(
    <View style={styles.container}>

      <View style={styles.topContainer}>
        
        <View style={styles.pinkView}>
          <View style={styles.crossIconContainer}>
            <Image source={require("../../assets/icons/cross.jpg")} style={styles.crossIcon} />
          </View>
        </View>

        <View style={styles.whiteView}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageText} numberOfLines={1}>{name}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.emailText}>{studentNumber}@{schoolDomain}</Text>
            <BBButton text="View Profile" darkMode={true} onPress={() => navigate("ProfilePage")}/>
          </View>

        </View>
      </View>

      <Image source={require("../../assets/bottomMenu.jpg")} style={styles.bottomImageMenu} resizeMode={"stretch"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  topContainer: {
    height: "70%",
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
    alignItems: "center",
    justifyContent: "center",
    
    height: "45%",

    backgroundColor: "#fff",

    borderBottomColor: "#dddddd",
    borderBottomWidth: 3,  
    
    paddingTop: imageSize / 2
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
    flex: 1,
    width: "100%",
  }
})

export default MorePage
