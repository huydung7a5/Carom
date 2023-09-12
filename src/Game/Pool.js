import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Pressable, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../StylesGame/StylePool';
const Pool = ({ route }) => {

    const { text2, text1, second, raceto, imageSource, imageSource1, secondthem } = route.params;
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [totallayer1, settotalplayer1] = useState(0);
    const [totallayer2, settotalplayer2] = useState(0);
    const [color, setColor] = useState('green');
    const [color2, setColor2] = useState(true);
    const [color1, setColor1] = useState(true);
    const [check, ischeked] = useState(true);
    const [progress, setProgress] = useState(second);
    const [paused, setPaused] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isRunning, setIsRunning] = useState(true);
    const [isnum, setisnum] = useState(second);
    const [disabled1, setDisabled1] = useState(false);
    // const [fontSize, setFontSize] = useState(190);
    // const [fontSizeScore, setfontSizeScore] = useState(70);

    StatusBar.setHidden(true);

    const { width, height } = Dimensions.get('window');
    let fontSizeScore;
    let fontSizeRaceTo;
    let fontSizeAll;
    let fontSizeName;

    if (width < 400) {
        fontSizeScore = (width + height) * 0.005; // Tính toán kích thước chữ cho màn hình nhỏ
        fontSizeRaceTo = (width + height) * 0.06; // Tính toán kích thước chữ cho màn hình nhỏ
        fontSizeAll = (width + height) * 0.08;
        fontSizeName = (width + height) * 0.01;
    } else {
        fontSizeScore = (width + height) * 0.03; // Tính toán kích thước chữ cho màn hình lớn
        fontSizeRaceTo = (width + height) * 0.8; // Tính toán kích thước chữ cho màn hình lớn
        fontSizeAll = (width + height) * 0.007;
        fontSizeName = (width + height) * 0.02;
    }
    const handleAddScore = (player) => {
        switch (player) {
            case 'player1':
                if (player1Score == raceto) {
                    Alert.alert('Player 1 thắng');
                    setPaused(true)
                    return;
                } else if (paused == true) {
                    return;
                } else if (color1 === false) {
                    return;
                } else {
                    setPlayer1Score(player1Score + 1);
                }
            case 'player2':
                if (player2Score == raceto) {
                    Alert.alert('Player 2 thắng');
                    setPaused(true)
                    return;
                } else if (paused == true) {
                    return;
                } else if (color2 === false) {
                    return;
                } else {
                    setPlayer2Score(player2Score + 1);
                }
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
                themluot();
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
            default:
                break;
        }
    };
    const handleMinusScore = (player) => {
        switch (player) {
            case 'player1':
                if (player1Score <= 0) {
                    return;
                } else if (paused == true) {
                    return;
                } else if (color1 === false) {
                    return;
                } else {
                    setPlayer1Score(player1Score - 1);
                }
                break;
            case 'player2':
                if (player2Score <= 0) {
                    return;
                } else if (paused == true) {
                    return;
                } else if (color2 === false) {
                    return;
                } else {
                    setPlayer2Score(player2Score - 1);
                }
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        const timer = setInterval(() => {
            if (!paused) {
                setProgress((prevProgress) => prevProgress - 1);
            }
        }, 1000);
        if (progress <= 5) {
            setColor('#FF3300');
            // Thêm mã cảnh báo tại đây
        } else if (progress <= 10) {
            setColor('#FF6600');
        } else if (progress <= 15) {
            setColor('#FFCC00');
        } else if (progress <= 20) {
            setColor('#CCCC00');
        } else if (progress <= 25) {
            setColor('#99FF00');
        } else if (progress <= 30) {
            setColor('#00FF00');
        }
        if (progress === 0) {
            setPaused(true);
        }
        return () => clearInterval(timer);
    }, [progress, paused, isActive, isnum]);
    const handlePause = () => {
        setPaused(true);
        setIsActive(false);
    };
    const handleResume = () => {
        if (check == null) {
            return;
        } else if (isRunning == true) {
            return;
        } else if (player1Score == raceto) {
            return;
        } else if (player2Score == raceto) {
            return;
        } else {
            setPaused(false);
            setIsActive(true);
            setIsRunning(false);
        }
    };
    const handlethemluot = () => {
        if (isActive == false) {
            setPaused(true);
        } else if (setPaused == false) {
            return;
        } else {
            setProgress(parseInt(progress) + parseInt(secondthem));
            setisnum(parseInt(secondthem) + parseInt(isnum));
            setPaused(false);
        }
    };
    const handleStart = () => {
        if (check == true) {
            Alert.alert('Bạn chưa chọn đội');
            return;
        } else {
            setProgress(parseInt(second));
            setPaused(false);
            setIsVisible(false);
            setIsActive(true);
            setIsRunning(false);
            setDisabled1(true);
        }
    }
    const themluot = () => {
        if (isActive == false) {
            setPaused(true);
        } else if (player1Score == raceto) {
            return;
        } else if (player2Score == raceto) {
            return;
        } else {
            setProgress(parseInt(second));
            setisnum(parseInt(second));
            setPaused(false);
            setColor("green");
        }
    }
    const handlechuyenluot = () => {
        if (paused == true) {
            return;
        }
        else if (color2 == true) {
            setColor2(false);
            setColor1(true);
            ischeked(false);
        } else if (color2 == false) {
            setColor2(true);
            setColor1(false);
            ischeked(false);
        }
        themluot();

    }
    return (
        <View style={{ backgroundColor: "#454b61", width: "100%", height: "100%" }}>
            <View style={styles.title}>
                <View style={styles.titleitem}>
                    <View style={styles.item1}>
                        <Text style={[styles.txtname1, { fontSize: fontSizeName }]}>{text1}</Text>
                        <Image style={(imageSource === null ? styles.img : styles.img2)} source={{ uri: imageSource }} />
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemcon}>
                            {/* <Image style={styles.img1} source={{ uri: imageSource2 }} /> */}
                            <Text style={styles.txtbtn1}>Khu vực để Logo</Text>
                        </View>
                    </View>
                    <View style={styles.item1}>
                        <Image style={(imageSource1 === null ? styles.img : styles.img2)} source={{ uri: imageSource1 }} />
                        <Text style={[styles.txtname, { fontSize: fontSizeName }]}>{text2}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyitem}>
                    <TouchableOpacity style={styles.bodyitemcon} onPress={() => handleItemClick("player1")}>
                        <View style={(color2 === true ? styles.ischeked : styles.checked)}>
                            <View>
                                <Text style={[(color2 === true ? styles.txtbodydiem : styles.txtbodydiem1), { fontSize: fontSizeRaceTo }]}>{player1Score}</Text>
                            </View>
                            <View style={styles.bodyicon}>
                                <Pressable style={styles.bodypr} onPress={() => handleAddScore('player1')}>
                                    <Text style={styles.icon}>+</Text>
                                </Pressable>
                                <Pressable style={styles.bodypr} onPress={() => handleMinusScore('player1')}>
                                    <Text style={styles.icon}>-</Text>
                                </Pressable>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.bodyitemconv1}>
                        <View style={styles.bodyitemconv2}>
                            <Text style={[styles.txtraceto, { fontSize: fontSizeScore }]}>Raceto</Text>
                            <Text style={[styles.txtraceto1, { fontSize: fontSizeScore }]}>{raceto}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bodyitemcon} onPress={() => handleItemClick("player2")}>
                        <View style={(color1 === true ? styles.ischeked : styles.checked)}>
                            <View>
                                <Text style={[(color1 === true ? styles.txtbodydiem : styles.txtbodydiem1), { fontSize: fontSizeRaceTo }]}>{player2Score}</Text>
                            </View>
                            <View style={styles.bodyicon}>
                                <Pressable style={styles.bodypr} onPress={() => handleAddScore('player2')}>
                                    <Text style={styles.icon}>+</Text>
                                </Pressable>
                                <Pressable style={styles.bodypr} onPress={() => handleMinusScore('player2')}>
                                    <Text style={styles.icon}>-</Text>
                                </Pressable>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footeritem}>
                    <View style={styles.itemfooter}>
                        <View style={styles.itemitemcon1}>
                            <TouchableOpacity style={styles.pr1} onPress={handleStart} disabled={disabled1}>
                                <Text style={[(disabled1 === true ? styles.txtbtn3 : styles.txtbtn2), { fontSize: fontSizeName }]}>
                                    Bắt đầu
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footer2}>
                            <View style={styles.itemitem}>
                                <View style={styles.itemitemcon} >
                                    <TouchableOpacity style={styles.pr1} onPress={handlePause}>
                                        <Text style={[(paused === true ? styles.txtbtn1 : styles.txtbtn), { fontSize: fontSizeAll }]}>
                                            Tạm dừng
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1} onPress={handleResume}>
                                        <Text style={[styles.txtbtn, { fontSize: fontSizeAll }]}>
                                            Tiếp tục
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.itemitem}>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1} onPress={handlechuyenluot}>
                                        <Text style={[styles.txtbtn, { fontSize: fontSizeAll }]}>
                                            Chuyển lượt
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1} onPress={themluot}>
                                        <Text style={[styles.txtbtn, { fontSize: fontSizeAll }]}>
                                            Thêm lượt
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cooldow}>
                            <View style={styles.footer1}>
                                <View style={styles.itemcon2}>
                                    <View style={styles.seconds}>
                                        <Text style={[styles.text, { fontSize: fontSizeAll }]}>{progress}</Text>
                                    </View>
                                </View>
                                <View style={styles.itemcon3}>
                                    <View style={[styles.progress1, { width: `${((parseInt(progress)) / (parseInt(isnum))) * 100}%`, backgroundColor: color }]}>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};



export default Pool;
