import React, { useState } from "react"
import { View, StyleSheet, TextInput, Text, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import Constants from 'expo-constants';



interface InputsProps {
    name: string
    number: number
}

const imageSize = 140


const Profile: React.FC<InputsProps> = ({ name, number }) => {
    const { height, width } = useWindowDimensions();
    const styles = generateStyles(width, height)

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.blackView}>
                    <Text style={styles.perfil}>Perfil</Text>
                </View>
                <View style={styles.pinkView}>
                    <View>
                        <Image source={require("../assets/person.png")} style={styles.personImage} resizeMode={"stretch"} />
                    </View>
                    <View style={styles.pinkTexts}>
                        <Text style={styles.pinkName}>{name}</Text>
                        <Text style={styles.pinkUni}>Universidade do Minho</Text>
                    </View>
                </View>
                <View style={styles.whiteView}>
                    <View style={styles.whiteInfo}>
                        <Text style={styles.info}>INFORMAÇÃO BÁSICA</Text>
                    </View>
                    <View style={styles.texts}>
                        <View style={styles.flex}>
                            <Image source={require("../assets/person.png")} style={styles.textImage} resizeMode={"stretch"} />
                            <Text style={styles.name}>{name} .</Text>
                        </View>
                        <View style={styles.flex}>
                            <Image source={require("../assets/envelope.png")} style={styles.textImage} resizeMode={"stretch"} />
                            <Text style={styles.email}>a{number}@alunos.uminho.pt</Text>
                        </View>
                        <View style={styles.flex}>
                            <Image source={require("../assets/identifica.png")} style={styles.textImage} resizeMode={"stretch"} />
                            <Text style={styles.id}>ID: A{number}</Text>
                        </View>
                    </View>
                </View>
                <Image source={require("../assets/bottom2.png")} style={styles.bottomImage} resizeMode={"stretch"} />
            </View>
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
            backgroundColor: "#282828",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        },
        pinkTexts: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: -(width * 0.4) }, { translateY: -(height * 0.2) }],
            width: width * 0.8,
            height: height * 0.4,
            backgroundColor: "#282828",
            alignItems: "center",
            marginTop: 190
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
        whiteInfo: {
            top: 0,
            left: 0,
            width: width * 1,
            height: height * 0.05,
            backgroundColor: "#F0F0F0",
            justifyContent: "center",
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
        info: {
            color: "#484848",
            paddingLeft: 10,
            fontSize: 13,
        },
        perfil: {
            color: "#fff",
            fontSize: 18,
            marginTop: 15
        },
        blackView: {
            position: "relative",
            height: "25%",
            backgroundColor: "#282828",
            borderBottomColor: "#202020",
            borderBottomWidth: 3,
            justifyContent: "center",
            alignItems: "center"
        },
        textImage: {
            height: height * 0.06,
            width: height * 0.06,
        },

        whiteView: {
            position: "relative",
            height: "135%",
            backgroundColor: "#F0F0F0",
            borderBottomColor: "#dddddd",
            borderBottomWidth: 3,

            alignItems: "center"
        },

        texts: {
            width: width,
            height: height * 0.28,
            paddingTop: 15,
            paddingLeft: 10,
            backgroundColor: "white",
            borderTopColor: "#E8E8E8",
            borderTopWidth: 3,
            borderBottomColor: "#E8E8E8",
            borderBottomWidth: 3,
        },

        name: {
            color: "#484848",
            paddingBottom: 25,
            fontSize: 18,
            paddingLeft: 15,
            paddingTop: 20
        },
        pinkName: {
            color: "#fff",
            paddingTop: 15,
            fontSize: 18
        },
        pinkUni: {
            color: "#fff",
            marginBottom: 15,
            fontSize: 14
        },
        email: {
            fontSize: 18,
            color: "#484848",
            paddingBottom: 25,
            paddingLeft: 15,
            paddingTop: 20
        },
        id: {
            fontSize: 18,
            color: "#484848",
            paddingBottom: 25,
            paddingLeft: 15,
            paddingTop: 20
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
            width: width * 1,
            height: height * 0.1,
        },
        personImage: {
            width: imageSize,
            height: imageSize,
            borderRadius: (imageSize / 2),
            overflow: "hidden",
        },
        flex: {
            flexDirection: "row",
            alignItems: "center",
        }

    })


export default Profile