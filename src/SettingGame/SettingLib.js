import { StyleSheet, Text, onPress, View, TextInput, TouchableOpacity, Pressable, StatusBar, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AxiosInstance from '../AxiosIntance/AxiosInstance';
const SettingLib = (props, item) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [second, setsecond] = useState('');
  const [secondthem, setsecondthem] = useState('');
  const [raceto, setraceto] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [imageSource1, setImageSource1] = useState(null);
  const [imageSource2, setimageSource2] = useState(null);
  const [tongluotco, settongluotco] = useState('');
  StatusBar.setHidden(true);
  const { navigation, route } = props;
  const { params } = route;
  const Start = () => {
    if (text1 === '' || text2 === '' || second === '' || raceto === '' || secondthem === '' || tongluotco === '') {
      alert('Không được để trống thông tin');
    } else if (isNaN(raceto) || raceto <= 0 || raceto % 1 !== 0) {
      alert('Raceto phải là số, và là số dương');
    } else if (isNaN(second) || isNaN(secondthem) || isNaN(tongluotco) || isNaN(raceto)) {
      alert('Thời gian xin thêm và thời gian ra cơ phải là số');
    } else {
      themtrandau();
      navigation.navigate('HomeStack');
    }
  }
  const themtrandau = async () => {
   
    const respone = await AxiosInstance().post('/bida/add',
      { name1: text1, name2: text2, Second1: second, Second2: second, raceto: tongluotco, title: "Chưa nghĩ ra tên", iddate: params.id, Score1: 0, Score2: 0 });
      
  }
  const layanh = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
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
  const layanh3 = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        return;
      } else {
        setimageSource2(response.assets[0].uri);
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
        <View style={styles.item2}>
          <TextInput value={raceto} keyboardType="numeric" onChangeText={setraceto} style={styles.txtinput1} placeholder='Nhập Số điểm tổng'></TextInput>
        </View>
      </View>
      <View style={styles.pr1}>
        <TouchableOpacity onPress={layanh} style={{ width: "30%", alignItems: "center" }}>
          {imageSource === null ?
            (<Image style={styles.img} source={require('../../media/anhnguoidung.jpg')} />)
            : (<Image style={styles.img} source={{ uri: imageSource }} />)}
        </TouchableOpacity>
        <TouchableOpacity onPress={layanh2} style={{ width: "30%", alignItems: "center" }}>
          {imageSource1 === null ?
            (<Image style={styles.img} source={require('../../media/anhnguoidung.jpg')} />)
            : (<Image style={styles.img} source={{ uri: imageSource1 }} />)}
        </TouchableOpacity>
        <TouchableOpacity onPress={layanh3} style={{ width: "30%", alignItems: "center" }}>
          {imageSource2 === null ?
            (<Image style={styles.img} source={require('../../media/anhnguoidung.jpg')} />)
            : (<Image style={styles.img} source={{ uri: imageSource2 }} />)}
        </TouchableOpacity>
      </View>
      <View style={styles.pr2}>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text>Ảnh đội 1</Text>
        </View>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text>Ảnh đội 2</Text>
        </View>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text>Logo Công ty</Text>
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
                <TextInput value={tongluotco} keyboardType="numeric" onChangeText={settongluotco} style={styles.txtinput5} placeholder='Tổng lượt cơ'></TextInput>
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
      </View>
      <View style={styles.pr}>
        <Pressable style={styles.btnstart} onPress={Start}>
          <Text style={styles.txtbtn}>Bắt Đầu</Text>
        </Pressable>
      </View>
    </View>
  )
}
export default SettingLib
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
    justifyContent: 'space-evenly',
    height: '13%',
  },
  img: {
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
    width: '18%',
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
    width: '30%',
    flexDirection: 'row',
    height: '40%',
  },
  item6: {
    marginTop: '2%',
    marginLeft: '-3%',
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '40%',
    backgroundColor: 'red',
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