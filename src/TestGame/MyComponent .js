import { ActivityIndicator, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const MyComponent = () => {
  const devices = useCameraDevices()
  const device = devices.back
  const cameraRef = useRef(null)
  useEffect(() => {
    checkPermission()
  }, [])
  const checkPermission = async () => {
    const deviceType = parsePhysicalDeviceTypes(device.devices)
    const newCameraPermission = await Camera.requestCameraPermission()
    const newMicrophonePermission = await Camera.requestMicrophonePermission()
  };
  if (device == null) return <ActivityIndicator />

  const startRecoding = async () => {
    cameraRef.current.startRecording({
      flash: 'on',
      onRecordingFinished: (video) => console.log(video),
      onRecordingError: (error) => console.error(error),
    })
  }

  const stopRecoding = async () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording()
    }
  }
  return (
    <View >
      <View>
        <TouchableOpacity onPress={startRecoding} >
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopRecoding} >
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
      <Camera
        audio={true} // <-- optional
        device={device}
        isActive={true}
        ref={cameraRef} style={{ width: "50%", height: "70%", aspectRatio: 1 }}
      />


    </View>
  )
}

export default MyComponent

const styles = StyleSheet.create({})