import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigationMoreStack } from '../../routes/useNavigation'

import BBButton from '../../components/BBButton'

import useUserInfo from '../../contexts/userInfo'

import CrossIcon from '../../assets/icons/MoreStack/crossIcon.svg'
import CommentsIcon from '../../assets/icons/MoreStack/commentsIcon.svg'
import LogoutIcon from '../../assets/icons/MoreStack/logoutIcon.svg'
import MessagesIcon from '../../assets/icons/MoreStack/messagesIcon.svg'
import NotesIcon from '../../assets/icons/MoreStack/notesIcon.svg'
import OrganizationIcon from '../../assets/icons/MoreStack/organizationIcon.svg'
import SettingsIcon from '../../assets/icons/MoreStack/settingsIcon.svg'

const imageSize = 132

const MorePage: React.FC = () => {
  const { name, studentNumber, schoolDomain } = useUserInfo()

  const { navigate, goBack } = useNavigationMoreStack()

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>

        <View style={styles.pinkView}>
          <TouchableOpacity
            style={styles.crossIconContainer}
            onPress={goBack}
            activeOpacity={1}
          >
            <CrossIcon color={'#fff'} width={18} height={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.whiteView}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageText} numberOfLines={1}>{name}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.emailText}>{studentNumber}@{schoolDomain}</Text>
            <BBButton text="View Profile" darkMode={true} onPress={() => navigate('ProfilePage')}/>
          </View>

        </View>
      </View>

      <View style={styles.bottomMenu}>

        <View style={styles.bottomMenuRow}>

          <View style={styles.menuOptionContainer}>
            <OrganizationIcon color={'#666'} height={24} width={24}/>
            <Text style={styles.menuOptionText}>Organização</Text>
          </View>

          <View style={styles.menuOptionContainer}>
            <MessagesIcon color={'#666'} height={24} width={24}/>
            <Text style={styles.menuOptionText}>Mensagens</Text>
          </View>

          <View style={styles.menuOptionContainer}>
            <NotesIcon color={'#666'} height={24} width={24}/>
            <Text style={styles.menuOptionText}>Notas</Text>
          </View>

          <View style={styles.menuOptionContainer}>
            <SettingsIcon color={'#666'} height={24} width={24}/>
            <Text style={styles.menuOptionText}>Definição</Text>
          </View>

        </View>

        <View style={styles.bottomMenuRow}>

          <View style={styles.menuOptionContainer}>
            <CommentsIcon color={'#666'} height={24} width={24}/>
            <Text style={styles.menuOptionText}>Comentários</Text>
          </View>

          <View style={styles.menuOptionContainer}>
            <LogoutIcon color={'#666'} height={24} width={24}/>
            <View>
              <Text style={styles.menuOptionText}>Terminar</Text>
              <Text style={[styles.menuOptionText, { marginTop: 0 }]}>Sessão</Text>
            </View>
          </View>

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  topContainer: {
    height: '70%'
  },

  pinkView: {
    height: '55%',

    backgroundColor: '#fbf4fc'
  },

  crossIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 20,
    left: 20,
    width: 26,
    height: 26,

    backgroundColor: '#262626'
  },

  crossIcon: {
    height: '100%',
    width: '100%'
  },

  whiteView: {
    alignItems: 'center',
    justifyContent: 'center',

    height: '45%',

    backgroundColor: '#fff',

    borderBottomColor: '#dddddd',
    borderBottomWidth: 3,

    paddingTop: imageSize / 2
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    width: imageSize,
    height: imageSize,

    backgroundColor: '#262626',

    position: 'absolute',
    top: -(imageSize / 2),

    borderRadius: (imageSize / 2),
    borderWidth: 8,
    borderColor: '#fff',

    overflow: 'hidden'
  },

  imageText: {
    width: '1000%',

    textAlign: 'center',

    color: '#fff',
    fontSize: 18
  },

  userInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%'
  },

  nameText: {
    paddingBottom: 12,

    color: '#757575',
    fontSize: 18
  },

  emailText: {
    paddingBottom: 12,

    fontSize: 12,
    color: '#757575'
  },

  bottomMenu: {
    flex: 1,
    width: '100%'
  },

  bottomMenuRow: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',

    backgroundColor: '#fff'

  },

  menuOptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '25%',
    height: '100%'
  },

  menuOptionText: {
    marginTop: 8,

    color: '#666',
    fontSize: 10
  }
})

export default MorePage
