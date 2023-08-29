import React, { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet, Pressable, Image, StatusBar, TouchableOpacity, Alert, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
const MyComponent = () => {
  const [disabled1, setDisabled1] = useState(false);
  const handleButtonPress = () => {
    Alert.alert("123")
    setDisabled1(true)
  };

  return (
    <View>
      <Button title="Bấm vào đây" onPress={handleButtonPress} disabled = {disabled1} />
    </View>
  );
};


export default MyComponent;