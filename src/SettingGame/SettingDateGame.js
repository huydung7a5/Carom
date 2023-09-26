import { StyleSheet, Text, View, Dimensions, FlatList, Pressable, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getDate } from '../Navigation/NewService';
const SettingDateGame = (props) => {
    const [fontSizeScore, setfontSizeScore] = useState();
    const [fontSizeRaceTo, setfonsizeracto] = useState();
    const [fontSizeAll, setfontsizeall] = useState();
    const [fontSizeName, setfonsizename] = useState();
    const [fontSizeAvg, setfonsizesvg] = useState();
    const [fontSizeIcon, setfonsizeicon] = useState();
    const { navigation } = props;
    const [iddate, setiddate] = useState('');
    StatusBar.setHidden(true);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const ongetdate = async () => {
        setLoading(true);
        const news = await getDate();
        setNews(news);
        setLoading(false);
    }
    useEffect(() => {
        ongetdate();
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

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('SettingLib', { id: item._id })}>
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
                    <Text style={[styles.txtdate1, { fontSize: fontSizeName }]}>Chọn ngày thi đấu để thêm</Text>
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

export default SettingDateGame

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