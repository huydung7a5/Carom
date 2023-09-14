import { StyleSheet, Text, View, Dimensions, FlatList, Pressable, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getdate } from '../AxiosIntance/NewNavigation';
import AxiosInstance from '../AxiosIntance/AxiosInstance';
const Settingdate = (props) => {
    const { navigation } = props;
    const { width, height } = Dimensions.get('window');
    const [iddate, setiddate] = useState('');
    let fontSizeScore;
    StatusBar.setHidden(true);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const ongetdate = async () => {
        setLoading(true);
        const news = await AxiosInstance().get('/date');
        setNews(news);
        setLoading(false);

    }
    useEffect(() => {
        ongetdate();
    }, []);
   


    if (width < 400) {
        fontSizeScore = (width + height) * 0.02; // Tính toán kích thước chữ cho màn hình nhỏ
        fontSizeRaceTo = (width + height) * 0.07; // Tính toán kích thước chữ cho màn hình nhỏ
        fontSizeAll = (width + height) * 0.08;
        fontSizeName = (width + height) * 0.01;
    } else {
        fontSizeScore = (width + height) * 0.02; // Tính toán kích thước chữ cho màn hình lớn
        fontSizeRaceTo = (width + height) * 0.10; // Tính toán kích thước chữ cho màn hình lớn
        fontSizeAll = (width + height) * 0.008;
        fontSizeName = (width + height) * 0.02;
    }
    const renderItem = ({ item }) => {
        setiddate(item._id);
        return (
            <TouchableOpacity onPress={() => navigation.navigate('SettingLib', {iddate})}>
                <View style={{ width: "100%", height: "auto", alignItems: "center" }}>
                    <View style={styles.viewdate}>
                        <Text style={[styles.txtdate, { fontSize: fontSizeScore }]}>Lịch thi đấu ngày: {item.date}</Text>
                    </View>

                </View>
            </TouchableOpacity >
        )
    }
    return (
        <View style={{ width: "100%", height: "100%", marginTop: "5%" }}>
            <View style={styles.title}>
                <View style={styles.viewtitle}>
                    <Text style={[styles.txtdate1, { fontSize: fontSizeName }]}>Chọn ngày thi đấu</Text>
                </View>
            </View>
            <FlatList
                style={{ width: "100%", height: "100%" }}
                onRefresh={ongetdate}
                refreshing={loading}
                data={news}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem} keyExtractor={item => item._id} />
        </View>
    )
}

export default Settingdate

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