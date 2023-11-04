import { StyleSheet, Text, View, Dimensions, FlatList, Pressable, StatusBar, TouchableOpacity, Alert, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getDate } from '../../Helpers/NewService';
import AxiosInstance from '../../Helpers/AxiosInstance';
const SettingDateGame = (props) => {
    const [fontSizeScore, setfontSizeScore] = useState();
    const [fontSizeRaceTo, setfonsizeracto] = useState();
    const [fontSizeAll, setfontsizeall] = useState();
    const [fontSizeName, setfonsizename] = useState();
    const [fontSizeAvg, setfonsizesvg] = useState();
    const [fontSizeIcon, setfonsizeicon] = useState();
    const [date, setdate] = useState();
    const { navigation } = props;
    const [onRefresh, setonRefresh] = useState(false);
    StatusBar.setHidden(true);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const ongetdate = async () => {
        setLoading(true);
        const news = await getDate();
        setNews(news);
        setLoading(false);
    }

    const refreshing = () => {
        setonRefresh(true);
        ongetdate();
        setonRefresh(false);
    }
    const adddate = async () => {
        if (date == null) {
            ToastAndroid.show("Không được để trống ngày", ToastAndroid.SHORT);
            return;
        } else {
            const respone = await AxiosInstance().post('/date/add',
                { date: date });
            ToastAndroid.show("Thêm thành công", ToastAndroid.SHORT);
        }
        refreshing();
    }
    useEffect(() => {
        ongetdate();
        const { width, height } = Dimensions.get('window');
        if (width < 400) {
            setfontSizeScore((width + height) * 0.02); // Tính toán kích thước chữ cho màn hình nhỏ
            setfonsizeracto((width + height) * 0.09); // Tính toán kích thước chữ cho màn hình nhỏ
            setfontsizeall((width + height) * 0.01);
            setfonsizename((width + height) * 0.02);
            setfonsizesvg((width + height) * 0.015);
            setfonsizeicon((width + height) * 0.01);
        } else {
            setfontSizeScore((width + height) * 0.02); // Tính toán kích thước chữ cho màn hình nhỏ
            setfonsizeracto((width + height) * 0.09); // Tính toán kích thước chữ cho màn hình nhỏ
            setfontsizeall((width + height) * 0.01);
            setfonsizename((width + height) * 0.02);
            setfonsizesvg((width + height) * 0.015);
            setfonsizeicon((width + height) * 0.01);
        }
    }, [fontSizeScore, fontSizeRaceTo, fontSizeAll, fontSizeName]);
    const renderItem = ({ item }) => {
        const handeleStart = () => {
            navigation.navigate('SettingLib', { id: item._id, date: item.date })
            refreshing();
        }
        const handledelete = async () => {
            Alert.alert("Thông báo", "Bạn có chắc muốn xoá trận đấu này không", [
                {
                    text: "Không",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "Có",
                    onPress: async () => {
                        const respone = await AxiosInstance().get(`/date/delete?id=` + item._id);
                        ToastAndroid.show("Xoá thành công", ToastAndroid.SHORT);
                        refreshing();
                    }

                }
            ]);
        }
        return (
            <View style={{ width: "33%", height: "auto", alignItems: "center", marginTop: "1%" }}>
                <TouchableOpacity style={styles.viewdate} onPress={handeleStart}>
                    <View style={styles.viewdate}>
                        <Text style={[styles.txtdate, { fontSize: fontSizeAvg }]}>Lịch thi đấu ngày: {item.date}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewdelete} onPress={handledelete}>
                    <Text style={[styles.txtdelete, { fontSize: fontSizeAvg }]}>xoá</Text>
                </TouchableOpacity>
            </View >
        )
    }
    return (
        <View style={{ width: "100%", height: "100%", marginTop: "1%" }}>
            <View style={styles.title}>
                <View style={styles.viewtitle}>
                    <Text style={[styles.txtdate1, { fontSize: fontSizeName }]}>Chọn ngày thi đấu để thêm</Text>
                </View>
            </View>
            <View style={styles.stylesadd}>
                <View style={styles.txtinput}>
                    <TextInput value={date} onChangeText={setdate} placeholder='Nhập ngày muốn thêm'></TextInput>
                </View>
                <View style={styles.add}>
                    <TouchableOpacity onPress={adddate}>
                        <Text style={[styles.txtdate1, { fontSize: fontSizeName }]}>Add ngày</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                style={{ width: "100%", height: "auto" }}
                onRefresh={ongetdate}
                refreshing={loading}
                numColumns={3}
                data={news}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem} keyExtractor={item => item._id} />

        </View>
    )
}

export default SettingDateGame

const styles = StyleSheet.create({
    txtdelete: {
        color: "red",
        fontWeight: "bold",
    },
    viewdelete: {
        width: "35%",
        borderRadius: 10,
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    txtinput: {
        width: "40%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "2%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: "1%"
    },
    stylesadd: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
    },
    add: {
        width: "20%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "2%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: "1%"
    },
    txtdate: {
        color: "black"
    },
    viewdate: {
        width: "80%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
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
        flexDirection: "row",
    },
    title: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    }
})