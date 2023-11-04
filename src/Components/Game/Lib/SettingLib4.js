import { StyleSheet, Text, onPress, Number, View, TextInput, TouchableOpacity, Pressable, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const SettingLib = (props, route) => {
  StatusBar.setHidden(true);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [second, setsecond] = useState('');
  const [secondthem, setsecondthem] = useState('');
  const [raceto, setraceto] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [imageSource1, setImageSource1] = useState(null);
  const [imageSource2, setimageSource2] = useState(null);
  StatusBar.setHidden(true);
  const { navigation } = props;
  const Start = () => {
    if (text1 === '' || text2 === '' || second === '' || raceto === '' || secondthem === '' || text3 === '' || text4 === '') {
      alert('Không được để trống thông tin');
    } else if (isNaN(raceto) || raceto <= 0 || raceto % 1 !== 0) {
      alert('Raceto phải là số, và là số dương');
    } else if (isNaN(second) || isNaN(secondthem)) {
      alert('Thời gian xin thêm và thời gian ra cơ phải là số');
    } else {
      navigation.navigate('Libre4', { text1, text2, second, raceto, imageSource, imageSource1, secondthem, imageSource2 });
    }
  }
  const layanh = () => {
    let options = {
      storageOptions: {
        path: 'images',
      }
    }
    launchImageLibrary(options, response => {
      setImageSource(response.assets[0].uri);
      //  console.log(response);
    });
  }
  const layanh2 = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      setImageSource1(response.assets[0].uri);
    });
  }
  const layanh3 = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      setimageSource2(response.assets[0].uri);
    });
  }
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.input1}>
        <View style={styles.item2}>
          <TextInput value={text1} onChangeText={setText1} style={styles.txtinput1} placeholder='Nhập tên đội 1'></TextInput>
        </View>
        <View style={styles.item2}>
          <TextInput value={text2} onChangeText={setText2} style={styles.txtinput1} placeholder='Nhập tên đội 2'></TextInput>
        </View>
      </View>
      <View style={styles.input1}>
        <View style={styles.item2}>
          <TextInput value={text3} onChangeText={setText3} style={styles.txtinput1} placeholder='Nhập tên đội 3'></TextInput>
        </View>
        <View style={styles.item2}>
          <TextInput value={text4} onChangeText={setText4} style={styles.txtinput1} placeholder='Nhập tên đội 4'></TextInput>
        </View>
      </View>
      <View style={styles.pr1}>
        <View style={styles.item2}>
          <TextInput value={raceto} keyboardType="numeric" onChangeText={setraceto} style={styles.txtinput1} placeholder='Nhập Số điểm tổng'></TextInput>
        </View>
      </View>
      <View style={styles.thoigianthem}>
        <View style={styles.item3}>
          <View style={styles.pickeritem}>
            <View style={styles.item4}>
              <TextInput value={second} keyboardType="numeric" onChangeText={setsecond} style={styles.txtinput5} placeholder='Nhập thời gian ra cơ'></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.item3}>
          <View style={styles.pickeritem}>
            <View style={styles.item4}>
              <TextInput value={secondthem} keyboardType="numeric" onChangeText={setsecondthem} style={styles.txtinput5} placeholder='Xin thêm thời gian'></TextInput>
            </View>
          </View>
        </View>
      </View>
      <Pressable style={styles.pr} onPress={Start}>
        <View style={styles.btnstart}>
          <Text style={styles.txtbtn}>Bắt Đầu</Text>
        </View>
      </Pressable>
    </View>
  )
}
export default SettingLib
const styles = StyleSheet.create({
  item4: {
    width: "85%",
    marginTop: "4%",
    alignItems: "center",
    height: '100%',
  },
  txtinput5: {
    width: "100%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "red",
    height: '100%',
  },
  thoigianthem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '13%',
  },
  img: {
    borderRadius: 10,
    width: 100,
    height: 100
  },
  input2: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'blue',
  },
  input1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '-2.5%',
  },
  pickeritem: {
    width: '70%',
    marginTop: '-2%',
    left: '70%',
  },
  pr: {
    marginTop: '4%',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  pr2: {
    marginTop: '3%',
    width: '100%',
    height: '3%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  pr1: {
    marginTop: '4%',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtbtn: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  btnstart: {
    borderRadius: 10,
    backgroundColor: 'yellow',
    width: '14%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    marginTop: '-2%',
  },
  txtitem3P: {
    width: '50%',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '20%',
  },
  item3: {
    marginTop: '2%',
    marginLeft: '-3%',
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '40%',
  },
  item6: {
    marginTop: '2%',
    marginLeft: '-3%',
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '40%',
  },
  txtinput1: {
    width: "90%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  item2: {
    width: "30%",
    marginTop: "4%",
    alignItems: "center",
    height: "75%"
  },
  item1: {
    marginTop: "4%",
    width: "30%",
    alignItems: "center",
  }
})