import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableOpacity, FlatList, Dimensions, ToastAndroid, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getbida } from '../Navigation/NewService';
import { deleteitem } from '../Navigation/NewService';
import AxiosInstance from '../AxiosIntance/AxiosInstance';
const ListGame = (props) => {
  const [fontSizeScore, setfontSizeScore] = useState();
  const [fontSizeRaceTo, setfonsizeracto] = useState();
  const [fontSizeAll, setfontsizeall] = useState();
  const [fontSizeName, setfonsizename] = useState();
  const [fontSizeAvg, setfonsizesvg] = useState();
  const [fontSizeIcon, setfonsizeicon] = useState();
  const { navigation, route } = props;
  const { params } = route;
  const [loading, setLoading] = useState(false);
  const [bida, setbida] = useState();
  const [onRefresh, setonRefresh] = useState(false);


  const ongetbida = async () => {
    setLoading(true);
    const news = await getbida();
    setbida(news);
    setLoading(false);

  }
  const refreshing = () => {
    setonRefresh(true);
    ongetbida();
    setonRefresh(false);
  }


  useEffect(() => {
    ongetbida();
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
  if (!bida) {
    return <Text>Loading...</Text>
  } else if (bida == null) {
    return <Text>Danh sách đang trống</Text>
  }
  const renderItem = ({ item }) => {
    const handledelete = async (id) => {
      Alert.alert("Thông báo", "Bạn có chắc muốn xoá trận đấu này không", [
        {
          text: "Không",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "Có",
          onPress: async () => {
            const respone = await AxiosInstance().get(`/bida/delete?id=` + item._id);
            ToastAndroid.show("Xoá thành công", ToastAndroid.SHORT);
            refreshing();
          }

        }
      ]);
    }
    return (
      <View style={{ width: "33%", height: "auto", alignItems: "center", marginTop: "1%" }} >
        <TouchableOpacity style={{ width: "100%", height: "auto", alignItems: "center", marginTop: "1%" }} onPress={() =>
          navigation.navigate('Libre',
            { id: item._id, Score1: item.Score1, Score2: item.Score2, text1: item.name1, text2: item.name2, raceto: item.raceto, second: item.Second1, imageSource: item.image, imageSource1: item.image1, imageSource2: item.image2, tongluotco: item.totalnumber })}>
          <View style={styles.viewdate}>
            <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Tên trận : {item.title}</Text>
            <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Name 1 : {item.name1}</Text>
            <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Name 2 : {item.name2}</Text>
            <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Score 1 : {item.Score1}</Text>
            <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Score 2 : {item.Score2}</Text>
            <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Race to : {item.raceto}</Text>
            <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Tổng lượt cơ : {item.totalnumber}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.custom} onPress={handledelete}>
          <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Xoá</Text>
        </TouchableOpacity>
      </View>

    )
  }
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
      <View style={styles.viewdate1}>
        <Text style={[styles.txtdate1, { fontSize: fontSizeScore }]}>Danh sách thi đấu</Text>
      </View>
      <FlatList
        style={{ width: "85%", height: "80%", marginTop: "-5%" }}
        data={bida}
        numColumns={3}
        refreshing={loading}
        onRefresh={ongetbida}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem} keyExtractor={item => item._id} />
    </View>
  )
}

export default ListGame

const styles = StyleSheet.create({
  custom: {
    width: "50%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "2%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: "2%",
    marginBottom: "5%"
  },
  txtdate: {
    color: "black",
  },
  txtdate1: {
    color: "black",
    fontWeight: "bold",
  },
  viewdate: {
    width: "80%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: "2%",
    marginBottom: "5%"
  },
  viewdate1: {
    width: "80%",
    height: "13%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: "2%",
    marginBottom: "5%"
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