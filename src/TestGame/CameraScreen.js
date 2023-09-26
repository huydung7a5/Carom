import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';



const CameraScreen = () => {
    const [isrunning, setisrunning] = useState(false);
    this.camera = null;

    const startRecording = async () => {
        if (this.camera) {
            try {
                const { uri, codec = "mp4" } = await this.camera.recordAsync();
                console.log(uri);
            } catch (error) {
                console.warn(error);
            }
        }
    };

    const stopRecording = () => {
        this.camera.stopRecording();
    };


    return (
        <View style={{ flex: 1 }}>

            <RNCamera
                ref={ref => {
                    camera = ref;
                }}
                style={{  width: 100, height: 200 }}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
            />
            <Button title='Quay video' onPress={startRecording}>

            </Button>
            <Button title='Dừng quay' onPress={stopRecording}>

            </Button>
            <View>
                <Text>Đây là video</Text>
                
            </View>


        </View>
    );


}
export default CameraScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },




}) 