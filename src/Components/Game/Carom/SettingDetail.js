import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from '../../Helpers/AxiosInstance';
const Settingdetail = (props) => {
  const [fontSizeScore, setfontSizeScore] = useState();
  const [fontSizeRaceTo, setfonsizeracto] = useState();
  const [fontSizeAll, setfontsizeall] = useState();
  const [fontSizeName, setfonsizename] = useState();
  const [fontSizeAvg, setfonsizesvg] = useState();
  const [fontSizeIcon, setfonsizeicon] = useState();
  const { navigation, route } = props;
  const { params } = route;
  const [datesDetail, setdatesDetail] = useState(null);
  const onGetNewsDetail = async () => {

    const respone = await AxiosInstance().get(`/bida/detail/date?iddate=` + params.id);
   
    setdatesDetail(respone);
  }
  useEffect(() => {
    onGetNewsDetail();
    const { width, height } = Dimensions.get('window');
    if (width < 400) {
      setfontSizeScore((width + height) * 0.02); // Tính toán kích thước chữ cho màn hình nhỏ
      setfonsizeracto((width + height) * 0.09); // Tính toán kích thước chữ cho màn hình nhỏ
      setfontsizeall((width + height) * 0.007);
      setfonsizename((width + height) * 0.02);
      setfonsizesvg((width + height) * 0.015);
      setfonsizeicon((width + height) * 0.01);
    } else {
      setfontSizeScore((width + height) * 0.02); // Tính toán kích thước chữ cho màn hình nhỏ
      setfonsizeracto((width + height) * 0.09); // Tính toán kích thước chữ cho màn hình nhỏ
      setfontsizeall((width + height) * 0.007);
      setfonsizename((width + height) * 0.02);
      setfonsizesvg((width + height) * 0.015);
      setfonsizeicon((width + height) * 0.01);
    }
  }, [fontSizeScore, fontSizeRaceTo, fontSizeAll, fontSizeName]);
  if (!datesDetail) {
    return <Text>Loading...</Text>
  } else if (datesDetail == null) {
    return <Text>Danh sách đang trống</Text>
  }
  const renderItem = ({ item }) => {
    return (
      <View style={{ width: "100%", height: "auto", alignItems: "center" }}>
        <View style={styles.viewdate}>
          <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Tên trận : {item.title}</Text>
          <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Name 1 : {item.name1}</Text>
          <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Name 2 : {item.name2}</Text>
          <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Score 1 : {item.Score1}</Text>
          <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Score 2 : {item.Score2}</Text>
          <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Race to : {item.raceto}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{ width: "100%", height: "auto", alignItems: "center" }}>
      <View style={styles.viewdate}>
        <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Lịch thi đấu ngày hôm nay</Text>
      </View>
      <FlatList
        style={{ width: "100%", height: "80%" }}
        data={datesDetail}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem} keyExtractor={item => item._id} />
    </View>
  )
}

export default Settingdetail

const styles = StyleSheet.create({
  txtdate: {
    color: "black"
  },
  viewdate: {
    width: "60%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: "2%"
  },
  txtdate1: {
    alignItems: "center",
    fontWeight: "bold",
  },
  viewtitle: {
    width: "90%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  }
})