import React from 'react'
import { View, StyleSheet, ListRenderItem, Text } from 'react-native'

import BBButton from '../../../components/BBButton'

import MegaphoneIcon from '../../../assets/icons/LandingStack/megaphoneIcon.svg'
import FilesIcon from '../../../assets/icons/LandingStack/filesIcon.svg'
import WarningHeaderComponent from './WarningHeaderComponent'

import { WarningSchema } from '../warning'

const WarningComponent: ListRenderItem<WarningSchema> = ({ item: { type, headerTitle, subject, title, content, time, color, ignoreButton } }) => {
  return (
  <>

  {headerTitle &&
    <WarningHeaderComponent type={type} text={headerTitle} />
  }

  <View style={styles.warningContainer}>
    <View style={styles.leftContainer}>

      {type === 'warning' &&
        <MegaphoneIcon color={'#fff'} height={36} width={36}/>
      }

      {type === 'files' &&
        <FilesIcon color={'#767676'} height={36} width={36}/>
      }

      <View style={[styles.leftStrip, { backgroundColor: type === 'warning' ? '#ead0cf' : '#ccc' }]} />
    </View>

    <View style={[styles.rightContainer, { borderLeftColor: color }]}>
      { subject &&
        <Text numberOfLines={2} style={styles.subjectText}>{subject}</Text>
      }

      { title &&
        <Text numberOfLines={2} style={styles.titleText}>{title}</Text>
      }

      { content &&
        <Text numberOfLines={2} style={styles.contentText}>{content}</Text>
      }

      { time &&
        <Text numberOfLines={2} style={styles.timeText}>{time}</Text>
      }

      { !ignoreButton &&
        <BBButton text='Ignorar' containerStyle={styles.buttonContainer}/>
      }
    </View>

  </View>

  </>
  )
}

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: 'row'
  },

  leftContainer: {
    alignItems: 'center',
    width: 70
  },

  leftStrip: {
    flex: 1,
    width: 1,

    marginVertical: 4
  },

  rightContainer: {
    flex: 1,

    paddingHorizontal: 8,
    marginBottom: 30,
    borderLeftWidth: 4

    // borderLeftColor: '#fff'
  },

  subjectText: {
    fontWeight: '500',
    fontSize: 18,

    paddingVertical: 1
  },

  titleText: {
    fontSize: 16,

    paddingVertical: 1
  },

  contentText: {
    color: '#767676',

    paddingVertical: 1
  },

  timeText: {
    color: '#767676',
    fontStyle: 'italic',

    paddingVertical: 1
  },

  buttonContainer: {
    alignItems: 'flex-start',

    paddingVertical: 1
  }
})

export default WarningComponent
