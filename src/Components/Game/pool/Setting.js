import { StyleSheet, Text, onPress, Number, View, TextInput, TouchableOpacity, Pressable, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Setting = (props, route) => {
  StatusBar.setHidden(true);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [second, setsecond] = useState('');
  const [secondthem, setsecondthem] = useState('');
  const [raceto, setraceto] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [imageSource1, setImageSource1] = useState(null);
  StatusBar.setHidden(true);
  const { navigation } = props;
  const Start = () => {
    if (text1 === '' || text2 === '' || second === '' || raceto === '' || secondthem === '') {
      alert('Không được để trống thông tin');
    } else if (isNaN(raceto) || raceto <= 0 || raceto % 1 !== 0 || raceto > 1000) {
      alert('Raceto phải là số, và là số dương và nhỏ hơn 1000');
    } else if (isNaN(second) || isNaN(secondthem)) {
      alert('Thời gian xin thêm và thời gian ra cơ phải là số');
    } else {
      navigation.navigate('Pool', { text1, text2, second, raceto, imageSource, imageSource1, secondthem });
    }
  }
  const layanh = () => {
    let options = {
      storageOptions: {
        path: 'images',
      }
    }
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        return;
      } else {
        setImageSource(response.assets[0].uri);
      }
    });
  }
  const layanh2 = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        return;
      } else {
        setImageSource1(response.assets[0].uri);
      }
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
      <View style={styles.pr1}>
        <TouchableOpacity onPress={layanh}>
          {imageSource === null ?
            (<Image style={styles.img} source={require('../../../Media/Images/anhnguoidung.jpg')} />)
            : (<Image style={styles.img} source={{ uri: imageSource }} />)}
        </TouchableOpacity>
        <TouchableOpacity onPress={layanh2}>
          {imageSource1 === null ?
            (<Image style={styles.img} source={require('../../../Media/Images/anhnguoidung.jpg')} />)
            : (<Image style={styles.img} source={{ uri: imageSource1 }} />)}
        </TouchableOpacity>
      </View>
      <View style={styles.pr2}>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text>Ảnh đội 1</Text>
        </View>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text>Ảnh đội 2</Text>
        </View>
      </View>
      <View style={styles.thoigianthem}>
        <View style={{ width: "90%", justifyContent: "space-evenly", flexDirection: "row" }}>
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
          <View style={styles.item3}>
            <View style={styles.pickeritem}>
              <View style={styles.item4}>
                <TextInput value={raceto} keyboardType="numeric" onChangeText={setraceto} style={styles.txtinput5} placeholder='Nhập Số Race To'></TextInput>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pr}>
        <Pressable style={styles.btnstart} onPress={Start}>
          <Text style={styles.txtbtn}>Bắt Đầu</Text>
        </Pressable>
      </View>
    </View>
  )
}
export default Setting
const styles = StyleSheet.create({
  item4: {
    width: "100%",
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
    textAlign: "center",

  },
  thoigianthem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '13%',
    alignItems: 'center'
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
  pickeritemcon: {
    width: '60%',
  },
  pickeritem: {
    width: '100%',
    marginTop: '-2%',
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
    justifyContent: 'space-around',
  },
  pr1: {
    marginTop: '4%',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtbtn: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  btnstart: {
    borderRadius: 10,
    backgroundColor: 'yellow',
    width: '18%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    marginTop: '-2%',
  },
  item3: {
    marginTop: '2%',
    width: '30%',
    flexDirection: 'row',
    height: '40%',
  },
  txtinput1: {
    width: "90%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    textAlign: "center",
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