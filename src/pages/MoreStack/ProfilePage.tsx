import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Header from '../../components/Header'

import useUserInfo from '../../contexts/userInfo'

import AvatarIcon from '../../assets/icons/MoreStack/avatarIcon.svg'
import PersonIcon from '../../assets/icons/MoreStack/personIcon.svg'
import CardIdIcon from '../../assets/icons/MoreStack/cardIdIcon.svg'
import MessagesThinIcon from '../../assets/icons/MoreStack/messagesThinIcon.svg'

const ProfilePage: React.FC = () => {
  const { name, studentNumber, schoolDomain } = useUserInfo()

  return (
        <View style={styles.container}>
            <Header title="Perfil"/>

            <View style={styles.blackView}>
                <AvatarIcon color={'#666'} width={55} height={55}/>

                <View style={styles.topText}>
                    <Text style={styles.topNameText}>{name} .</Text>
                    <Text style={styles.topUniName}>Universidade do Minho</Text>
                </View>
            </View>

            <View style={styles.whiteView}>

                <View style={styles.infoTitleContainer}>
                    <Text style={styles.infoTitle}>INFORMAÇÃO BÁSICA</Text>
                </View>

                <View>

                    <View style={styles.userInfoContainerFlex}>
                        <PersonIcon color={'#000'} width={24} height={24} style={styles.icon}/>
                        <Text style={styles.userInfoText}>{name} .</Text>
                    </View>

                    <View style={styles.userInfoContainerFlex}>
                        <MessagesThinIcon color={'#000'} width={24} height={24} style={styles.icon}/>
                        <Text style={styles.userInfoText}>{studentNumber}@{schoolDomain}</Text>
                    </View>

                    <View style={styles.userInfoContainerFlex}>
                        <CardIdIcon color={'#000'} width={24} height={24} style={styles.icon}/>
                        <Text style={styles.userInfoText}>ID: {studentNumber}</Text>
                    </View>

                </View>
            </View>

        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },

  blackView: {
    height: '30%',
    backgroundColor: '#282828',

    justifyContent: 'center',
    alignItems: 'center'
  },

  topText: {
    alignItems: 'center'
  },

  topNameText: {
    color: '#fff',
    paddingTop: 32,
    fontSize: 18
  },

  topUniName: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 14
  },

  whiteView: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },

  infoTitleContainer: {
    justifyContent: 'center',

    height: 36,
    width: '100%',
    backgroundColor: '#f8f8f8',

    borderBottomColor: '#cdcdcd',
    borderBottomWidth: 1
  },

  infoTitle: {
    paddingLeft: 16,
    fontSize: 12
  },

  userInfoContainerFlex: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#fff',

    height: 56,
    width: '100%'
  },

  icon: {
    marginHorizontal: 8
  },

  userInfoText: {
    color: '#333333',
    fontSize: 18
  }
})

export default ProfilePage
