import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const MyComponent = () => {
  const devices = useCameraDevices();
  const device = devices.back
  useEffect(() => {
    checkPermission()
  }, [])
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission()
    const newMicrophonePermission = await Camera.requestMicrophonePermission()
  };
  if (device == null) return <ActivityIndicator />

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  )
}

export default MyComponent

const styles = StyleSheet.create({})