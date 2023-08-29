import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native'
import React from 'react'
import { styles } from '../StylesGame/StyleTrangchu';
const TrangChu = (props) => {
    StatusBar.setHidden(true);
    const { navigation } = props;
    const settingpool = () => {
        navigation.navigate('Setting')
    }
    const settinglib = () => {
        navigation.navigate('HomeStack')
    }
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#F9FAFF" }}>
            <View style={styles.title}>
                <View style={styles.title1}>
                    <Text style={styles.txtadmin}>Xin chào Sam</Text>
                    <Text style={styles.txtwelcom}>Wellcom home!</Text>
                </View>
                <View style={styles.title2}>
                    <TextInput style={styles.txttimkiem} placeholder='Tìm kiếm' />
                </View>
                <View style={styles.title3}>
                    <Image style={{ width: "15%", height: "30%" }} source={require('../../media/new.png')} />
                    <Image style={{ width: "15%", height: "30%" }} source={require('../../media/setting.png')} />
                    <Image style={{ width: "15%", height: "30%" }} source={require('../../media/user.png')} />
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyitem1}>
                    <View style={styles.bodyitem11}>
                        <View style={styles.bodybodycon}>
                            <View style={styles.body1}>
                                <Text style={styles.txtevent}>Sự kiện hôm nay</Text>
                                <Text style={styles.txttensukien}>Aplus cup of Pool</Text>
                            </View>
                            <View style={styles.body2}>
                            </View>
                        </View>
                        <View style={styles.bodybodycon1}>
                            <Text style={styles.txtkenhphat}>Kênh phát</Text>
                            <View style={styles.view}>
                                <Image style={{ width: "100%", height: "60%", left: "-5%" }} source={require('../../media/icon.jpg')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyitem11}>
                        <View style={styles.bodybodycon}>
                            <View style={styles.body1}>
                                <Text style={styles.txtevent}>Lịch sự kiện</Text>
                                <Text style={styles.txttensukien}>21/8/2023</Text>
                            </View>
                            <View style={styles.body2}>
                            </View>
                        </View>
                        <View style={styles.bodybodycon1}>
                            <Text style={styles.txtkenhphat}>Học cùng cơ thủ(Video Free)</Text>
                            <View style={styles.view}>
                                <Image style={{ width: "100%", height: "60%", left: "-5%" }} source={require('../../media/icon.jpg')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyitem12}>
                        <View style={styles.bodyitemcon}>
                            <Image style={{ width: "60%", height: "60%" }} source={require('../../media/bida.png')} />
                            <Text style={styles.txttensukien1}>Đặt bàn</Text>
                        </View>
                        <View style={styles.bodyitemcon}>
                        <Image style={{ width: "50%", height: "60%" }} source={require('../../media/friend.png')} />
                            <Text style={styles.txttensukien1}>Tìm bạn chơi</Text>
                        </View>
                        <View style={styles.bodyitemcon}>
                        <Image style={{ width: "50%", height: "60%" }} source={require('../../media/school.jpg')} />
                            <Text style={styles.txttensukien1}>Đăng kí khóa học</Text>
                        </View>
                        <View style={styles.bodyitemcon}>
                        <Image style={{ width: "60%", height: "60%" }} source={require('../../media/giohang.png')} />
                            <Text style={styles.txttensukien1}>Mua hàng</Text>
                        </View>


                    </View>
                </View>
                <View style={styles.bodyitem2}>
                    <View style={styles.itemcothu}>
                        <Text style={styles.txtten1}>QUẢN LÝ</Text>
                        <Text style={styles.txtten1}>QUẢN LÝ</Text>
                        <Text style={styles.txtten1}>QUẢN LÝ</Text>
                        <Text style={styles.txtten1}>QUẢN LÝ</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.item1}>
                            <TouchableOpacity style={styles.itemcon} onPress={settingpool}>
                                <Text style={styles.txtten}>POOL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemcon1} onPress={settinglib} >
                                <Text style={styles.txtten}>LIBRE</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item1}>
                            <TouchableOpacity style={styles.itemcon2} >
                                <Text style={styles.txtten}>CAROM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemcon3} >
                                <Text style={styles.txtten}>QUẢN LÝ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TrangChu

