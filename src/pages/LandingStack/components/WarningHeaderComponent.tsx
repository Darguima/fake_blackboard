import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import WarningIcon from '../../../assets/icons/LandingStack/warningIcon.svg'
import CircleIcon from '../../../assets/icons/LandingStack/circleIcon.svg'

interface WarningHeaderComponentProps {
  type: 'warning' | 'files'
  text: string
}

const WarningHeaderComponent: React.FC<WarningHeaderComponentProps> = ({ type, text }) => {
  return (
  <View style={styles.warningContainer}>
    <View style={styles.leftContainer}>
      {type === 'warning' &&
        <WarningIcon height={18} width={18}/>
      }

      {type === 'files' &&
        <CircleIcon color={'#ccc'} height={7} width={7}/>
      }

      <View style={[styles.leftStrip, { backgroundColor: type === 'warning' ? '#ead0cf' : '#ccc' }]} />
    </View>

    <View style={styles.rightContainer}>

      <Text
        style={type === 'warning' ? styles.titleTextWarning : styles.titleTextInfo }
      >
        {text}
      </Text>

    </View>

  </View>
  )
}

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: 'row',

    marginTop: 16,
    marginBottom: 4
  },

  leftContainer: {
    alignItems: 'center',
    width: 70,

    marginTop: 12
  },

  leftStrip: {
    flex: 1,
    width: 1,

    marginTop: 6
  },

  rightContainer: {
    flex: 1,

    paddingHorizontal: 8,
    marginBottom: 30
  },

  titleTextWarning: {
    fontSize: 26,
    fontWeight: '300',
    color: '#e45547'
  },

  titleTextInfo: {
    fontSize: 26,
    fontWeight: '200'
  }
})

export default WarningHeaderComponent
