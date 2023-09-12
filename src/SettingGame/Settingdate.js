import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getdate } from '../AxiosIntance/NewNavigation';
const Settingdate1 = () => {
    const [date1, setdate1] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const { width, height } = Dimensions.get('window');
    let fontSizeScore;
    let fontSizeRaceTo;
    let fontSizeAll;
    let fontSizeName;
    const ongetdate = async () => {
        const date1 = await getdate();
        setdate1(date1);
    }
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }
    useEffect(() => {
        ongetdate();

    }, []);
    if (width < 400) {
        fontSizeScore = (width + height) * 0.005; // Tính toán kích thước chữ cho màn hình nhỏ
        fontSizeRaceTo = (width + height) * 0.07; // Tính toán kích thước chữ cho màn hình nhỏ
        fontSizeAll = (width + height) * 0.08;
        fontSizeName = (width + height) * 0.01;
    } else {
        fontSizeScore = (width + height) * 0.04; // Tính toán kích thước chữ cho màn hình lớn
        fontSizeRaceTo = (width + height) * 0.10; // Tính toán kích thước chữ cho màn hình lớn
        fontSizeAll = (width + height) * 0.008;
        fontSizeName = (width + height) * 0.02;
    }
    const renderItem = (value) => {
        const { item } = value
        return (
            <View>
                <Text>{item.date1}</Text>
            </View>
        )
    }
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View style={styles.title}>
                <View style={styles.viewtitle}>
                    <Text style={[styles.txtdate1, { fontSize: fontSizeName }]}>Chọn ngày thi đấu</Text>
                </View>
            </View>
            <FlatList
                style={{ width: "100%", height: "100%"}}
                onRefresh={onRefresh}
                refreshing={refreshing}
                data={date1}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem} keyExtractor={(item, index) => item._id} />
        </View>
    )
}

export default Settingdate1

const styles = StyleSheet.create({
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