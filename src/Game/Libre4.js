import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../StylesGame/StyleLib4';
const Libre4 = () => {
    StatusBar.setHidden(true);
    const handleAddScore = (player) => {
        switch (player) {
            case 'player1':
                if (paused == true) {
                    return;
                } else {
                    setPlayer1Score(player1Score + 1);
                }
                break;
            case 'player2':
                if (paused == true) {
                    return;
                } else {
                    setPlayer2Score(player2Score + 1);
                }
                break;
            case 'player3':
                if (paused == true) {
                    return;
                } else {
                    setPlayer3Score(player3Score + 1);
                }
                break;
            case 'player4':
                if (paused == true) {
                    return;
                } else {
                    setPlayer4Score(player4Score + 1);
                }
                break;
            default:
                break;
        }
    };
    const handleItemClick = (player) => {
        switch (player) {
            case 'player1':
                setColor2(!color2);
                if (check === true) {
                    setColor1(true);
                    ischeked(false);
                } else if (check === false) {
                    setColor2(false);
                    setColor1(true);
                    themluot();
                    return;
                }
                break;
            case 'player2':
                setColor1(!color1);
                if (check === true) {
                    setColor2(true);
                    ischeked(false);
                } else if (check === false) {
                    setColor2(true);
                    setColor1(false);
                    themluot();
                    return;
                }
                break;
            case 'player3':
                setColor1(!color1);
                if (check === true) {
                    setColor2(true);
                    ischeked(false);
                } else if (check === false) {
                    setColor2(true);
                    setColor1(false);
                    themluot();
                    return;
                }
                break;
            case 'player4':
                setColor1(!color1);
                if (check === true) {
                    setColor2(true);
                    ischeked(false);
                } else if (check === false) {
                    setColor2(true);
                    setColor1(false);
                    themluot();
                    return;
                }
                break;
            default:
                break;
        }
    };
    const handleMinusScore = (player) => {
        switch (player) {
            case 'player1':
                if (player1Score <= 0) {
                    return;
                } else {
                    setPlayer1Score(player1Score - 1);
                }
                break;
            case 'player2':
                if (player2Score <= 0) {
                    return;
                } else {
                    setPlayer2Score(player2Score - 1);
                }
                break;
            case 'player3':
                if (player3Score <= 0) {
                    return;
                } else {
                    setPlayer3Score(player3Score - 1);
                }
                break;
            case 'player4':
                if (player4Score <= 0) {
                    return;
                } else {
                    setPlayer4Score(player4Score - 1);
                }
                break;
            default:
                break;
        }
    };
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
            <View style={styles.title}>
                <View style={styles.titleitem1}>
                    <Text style={styles.txttitle1}>Thời gian</Text>
                </View>
                <View style={styles.titleitem}>
                    <Text style={styles.txttitle2}>BILLIARDS</Text>
                    <Text style={styles.txttitle3}>Scoring panel</Text>
                </View>
                <View style={styles.titleitem1}>
                    <Text style={styles.txttitle1}>Điểm số</Text>
                    <Text style={styles.txttitle1}>thi đấu</Text>
                </View>
            </View>
            <View style={styles.titlediemso}>
                <View style={styles.cotdiem}>
                    <Text style={{ color: 'white' }}>Điểm số</Text>
                </View>
                <View style={styles.cotdiem}>
                    <Text style={{ color: 'white' }}>Điểm số</Text>
                </View>

            </View>
            <View style={styles.body}>
                <View style={styles.body4}>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>On of/ reset</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>Tổng Điểm</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>Điểm lượt cơ vừa đi</Text>
                    </View>
                </View>
                <View style={styles.body4}>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>Nguyễn Hữu Dũng</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                </View>
                <View style={styles.body4}>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>Nguyễn Hữu Dũng</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                </View>
                <View style={styles.body4}>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>Nguyễn Hữu Dũng</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                </View>
                <View style={styles.body4}>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>Nguyễn Hữu Dũng</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                    <View style={styles.bodyitem}>
                        <Text style={styles.txtname}>0</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
export default Libre4
