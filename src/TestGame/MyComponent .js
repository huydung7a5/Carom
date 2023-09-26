import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CameraScreen from './CameraScreen'
const MyComponent = () => {
  return (
    <View style={styles.continer}>
      <CameraScreen />
    </View>
  )
}

export default MyComponent

const styles = StyleSheet.create({
  continer:{
    flex: 1
  }
})