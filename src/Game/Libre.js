import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable, Image, StatusBar, TouchableOpacity, Alert, BackHandler } from 'react-native';
import {styles} from '../StylesGame/StyleLib'
const Libre = ({ route, navigation }) => {
    const { text2, text1, second, raceto, imageSource, imageSource1, imageSource2, secondthem, tongluotco } = route.params;
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
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isRunning, setIsRunning] = useState(true);
    const [isnum, setisnum] = useState(second);
    const [In, setIn] = useState(2);
    const [intervalId, setIntervalId] = useState(null);
    const [result, setresult] = useState(1);
    const [diemcaonhat, setdiemcaonhat] = useState(0);
    const [diemcaonhat1, setdiemcaonhat1] = useState(0);
    const setInn = Math.round(result - 0.0000000001);
    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(true);
    const [disabled3, setDisabled3] = useState(true);
    const avg1 = (parseInt(totallayer1) / parseInt(setInn)).toFixed(3);
    const avg2 = (parseInt(totallayer2) / parseInt(setInn)).toFixed(3);
    StatusBar.setHidden(true);
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Thông báo", "Bạn có chắc muốn thoát khỏi màn hình này, điều này sẽ mất dữ liệu", [
                {
                    text: "Không",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "Có",
                    onPress: () => navigation.goBack()
                }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);
    const handlePressOut = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };
    const handleAddScore = (player) => {
        switch (player) {
            case 'player1':
                if (paused == true) {
                    return;
                } else if (color1 === false) {
                    return;
                } else {
                    setIntervalId(setInterval(() => {
                        setPlayer1Score(player1Score => player1Score + 1);
                    }, 150));
                }
                break;
            case 'player2':
                if (paused == true) {
                    return;
                } else if (color2 === false) {
                    return;
                } else {
                    setIntervalId(setInterval(() => {
                        setPlayer2Score(player2Score => player2Score + 1);
                    }, 150));
                }
                break;
            default:
                break;
        }
    };
    const handleItemClick = (player) => {
        switch (player) {
            case 'player1':
                if (color2 === false) {
                    themluot();
                    return;
                } else if (color2 === true) {
                    handlechuyenluot();
                }
                setColor2(!color2)
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
                if (color1 === false) {
                    themluot();
                    return;
                } else if (color1 === true) {
                    handlechuyenluot();
                }
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
    }, [progress, paused, isActive, isnum, second]);
    const handlePause = () => {
        setPaused(true);
        setIsActive(false);
    };
    const handleResume = () => {
        if (check == null) {
            return;
        } else if (isRunning == true) {
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
        } else if (color2 === true) {
            return;
        } else {
            setProgress(parseInt(progress) + parseInt(secondthem));
            setisnum(parseInt(secondthem) + parseInt(isnum));
            setPaused(false);
            setColor("green")
            setIsVisible(false);
            setDisabled2(false);
        }
    };
    const handlethemluot1 = () => {
        if (isActive == false) {
            setPaused(true);
        } else if (color2 === true) {
            return;
        } else if (isVisible == false) {
            setProgress(parseInt(progress) + parseInt(secondthem));
            setisnum(parseInt(secondthem) + parseInt(isnum));
            setPaused(false);
            setColor("green")
            setIsVisible1(false);
        }
    };
    const handlethemluot2 = () => {
        if (isActive == false) {
            setPaused(true);
        } else if (color1 === true) {
            return;
        } else {
            setProgress(parseInt(progress) + parseInt(secondthem));
            setisnum(parseInt(secondthem) + parseInt(isnum));
            setPaused(false);
            setColor("green")
            setIsVisible2(false);
            setDisabled3(false);
        }
    };
    const handlethemluot3 = () => {
        if (isActive == false) {
            setPaused(true);
        } else if (color1 === true) {
            return;
        } else if (isVisible2 == false) {
            setProgress(parseInt(progress) + parseInt(secondthem));
            setisnum(parseInt(secondthem) + parseInt(isnum));
            setPaused(false);
            setColor("green")
            setIsVisible3(false);
        }
    };
    const handleStart = () => {
        if (check == true) {
            Alert.alert('Bạn chưa chọn đội');
            return;
        } else {
            setProgress(parseInt(second));
            setPaused(false);
            setIsActive(true);
            setIsRunning(false);
            setDisabled1(true);
            setIn(2);
        }

    }
    const congplayer1 = () => {
        if (paused == true) {
            return;
        } else if (color1 === false) {
            return;
        } else {
            setPlayer1Score(player1Score + 1);
        }
    }
    const congplayer2 = () => {
        if (paused == true) {
            return;
        } else if (color2 === false) {
            return;
        } else {
            setPlayer2Score(player2Score + 1);
        }
    }
    const themluot = () => {
        if (isActive == false) {
            setPaused(true);
        } else {
            setProgress(parseInt(second));
            setisnum(parseInt(second));
            setPaused(false);
            if (isNaN(totallayer1) || isNaN(In) || In > 0) {
                settotalplayer2(parseInt(totallayer2) + parseInt(player2Score));
                const avg1 = (parseInt(totallayer1) / parseInt(result)).toFixed(3)
                setPlayer1Score(0);
            }
            if (isNaN(totallayer2) || isNaN(In) || In > 0) {
                settotalplayer1(parseInt(totallayer1) + parseInt(player1Score));
                const avg2 = (parseInt(totallayer1) / parseInt(result)).toFixed(3)
                setPlayer2Score(0);
            }
            if (second > 30) {
                setColor("green")
            }

        }
        setDisabled2(true);
        setDisabled3(true);
        setdiemcaonhat(Math.max(diemcaonhat, player1Score));
        setdiemcaonhat1(Math.max(diemcaonhat1, player2Score));
    }
    const handlechuyenluot = () => {
        if (paused == true) {
            return;

        } else if (color2 == true) {
            if (totallayer2 < parseInt(raceto)) {
                settotalplayer2(parseInt(totallayer2) + parseInt(player2Score));
                setPlayer2Score(0);
                setColor2(false);
                setColor1(true);
                ischeked(false);
                if (result >= tongluotco) {
                    Alert.alert('Đã hết lượt')
                    return;
                }
            } else if (totallayer2 >= parseInt(raceto)) {
                Alert.alert('Đội 2 thắng');
                return;
            }
        } else if (color1 == true) {
            if (totallayer1 < parseInt(raceto)) {
                settotalplayer1(parseInt(totallayer1) + parseInt(player1Score));
                setPlayer1Score(0);
                setColor2(true);
                setColor1(false);
                ischeked(false);
            } else if (totallayer1 >= parseInt(raceto)) {
                Alert.alert('Đội 1 thắng');
                return;
            }
        } if (check == false) {

            if (In == 2) {
                setIn(4);
            } else {
                setIn(parseInt(In) + 1);
            }
        }
        themluot();
        setresult(In.toFixed(0) / 2);
        if (check == true) {
            return;
        } else if (isActive == false) {
            return;
        }
        setdiemcaonhat(Math.max(diemcaonhat, player1Score));
        setdiemcaonhat1(Math.max(diemcaonhat1, player2Score));

    }
    return (
        <View style={{ backgroundColor: "#454b61", width: "100%", height: "100%" }}>
            <View style={styles.title}>
                <View style={styles.titleitem}>
                    <View style={styles.item1}>
                        <Text style={styles.txtname1}>{text1}</Text>
                        <Image style={(imageSource === null ? styles.img : styles.img2)} source={{ uri: imageSource }} />
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemcon}>
                            <Image style={styles.img1} source={{ uri: imageSource2 }} />
                        </View>
                    </View>
                    <View style={styles.item1}>
                    <Image style={(imageSource1 === null ? styles.img : styles.img2)} source={{ uri: imageSource1 }} />
                        <Text style={styles.txtname}>{text2}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyitem}>
                    <TouchableOpacity style={styles.bodyitemcon} onPress={() => handleItemClick("player1")}>
                        <View style={(color2 === true ? styles.ischeked : styles.checked)}>
                            <View style={styles.view123}>
                                <Text style={(color2 === true ? styles.txtbodydiem : styles.txtbodydiem1)}>{totallayer1}</Text>
                            </View>
                            <View style={styles.bodyviewicon}>
                                <View style={styles.bodyvieicon1}>
                                    <View style={styles.bodyicon1}>
                                        <View style={styles.bodyicon11}>
                                            <TouchableOpacity style={styles.navpr} onPressOut={handlePressOut} onPress={congplayer1} onPressIn={() => handleAddScore('player1')}>
                                                <Text style={styles.icon}>+</Text>
                                            </TouchableOpacity>
                                            <View style={{ width: "40%", justifyContent: "center", height: "100%" }}>
                                                <Text style={styles.txtnavdiem}>{player1Score}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.navpr} onPress={() => handleMinusScore('player1')}>
                                                <Text style={styles.icon}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.bodyicon}>
                                        <View style={{
                                            width: "100%", height: "73%", justifyContent: "center", alignItems: "center", borderColor: "#1bf526",
                                            borderRightWidth: 1,
                                        }}>
                                            <Text style={styles.txtbangdiem}>{diemcaonhat}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.bodyicon111}>
                                        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                            <Text style={styles.txtbangdiem}>{avg1}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.headeritem}>
                                <View style={styles.headeritemcon}>
                                    <View style={styles.headeritemconv2}>
                                    </View>
                                    <View style={styles.headeritemconv2}>
                                        <Text style={styles.txtheader}>HR</Text>
                                    </View>
                                    <View style={styles.headeritemconv2}>
                                        <Text style={styles.txtheader}>Avg</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.bodyitemconv4}>
                        <View style={styles.bodyitemconv1}>
                            <View style={styles.bodyitemconv2}>
                                <Text style={styles.txtraceto}>{raceto}</Text>
                            </View>
                            <View style={styles.bodyitemconv2}>
                                <Text style={styles.txtraceto}>{tongluotco}</Text>
                            </View>
                        </View>
                        <View style={styles.viewsetin}>

                            <Text style={styles.txtraceto1}>{setInn}</Text>

                        </View>
                    </View>
                    <TouchableOpacity style={styles.bodyitemcon} onPress={() => handleItemClick("player2")}>
                        <View style={(color1 === true ? styles.ischeked : styles.checked)}>
                            <View style={styles.view123}>
                                <Text style={(color1 === true ? styles.txtbodydiem : styles.txtbodydiem1)}>{totallayer2}</Text>
                            </View>
                            <View style={styles.bodyviewicon}>
                                <View style={styles.bodyvieicon1}>
                                    <View style={styles.bodyicon1}>
                                        <View style={styles.bodyicon11}>
                                            <TouchableOpacity style={styles.navpr} onPressOut={handlePressOut} onPress={congplayer2} onPressIn={() => handleAddScore('player2')}>
                                                <Text style={styles.icon}>+</Text>
                                            </TouchableOpacity>
                                            <View style={{ width: "40%", justifyContent: "center", height: "100%" }}>
                                                <Text style={styles.txtnavdiem}>{player2Score}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.navpr} onPress={() => handleMinusScore('player2')}>
                                                <Text style={styles.icon}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.bodyicon}>
                                        <View style={{
                                            width: "100%", height: "73%", justifyContent: "center", alignItems: "center", borderColor: "#1bf526",
                                            borderRightWidth: 1,
                                        }}>
                                            <Text style={styles.txtbangdiem}>{diemcaonhat1}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.bodyicon111}>
                                        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                            <Text style={styles.txtbangdiem}>{avg2}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.headeritem}>
                                <View style={styles.headeritemcon}>
                                    <View style={styles.headeritemconv2}>
                                        <Text style={styles.txtheader}></Text>
                                    </View>
                                    <View style={styles.headeritemconv2}>
                                        <Text style={styles.txtheader}>HR</Text>
                                    </View>
                                    <View style={styles.headeritemconv2}>
                                        <Text style={styles.txtheader}>Avg</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.nav}>
                <View style={styles.navitem}>
                    <View style={styles.navitemcon}>
                        <View style={styles.viewne}>
                            {isVisible && <TouchableOpacity style={styles.navitemconv5} isVisible onPress={handlethemluot} >
                                <Text style={styles.txtitemcong}>+1</Text>
                            </TouchableOpacity>}
                        </View>

                        <View style={styles.navconv2}>
                            <Text style={styles.txtitemcong1}>EXTENSION</Text>
                        </View>
                        <View style={styles.viewne}>
                            {isVisible1 && <TouchableOpacity style={styles.navitemconv2} onPress={handlethemluot1}>
                                <Text style={styles.txtitemcong}>+2</Text>
                            </TouchableOpacity>}
                        </View>
                    </View>
                    <View style={styles.navitemcon1}>
                        <View style={styles.navitemconv3}>
                            <Text style={styles.txtInn}>Inn</Text>
                        </View>
                    </View>
                    <View style={styles.navitemcon}>
                        <View style={styles.viewne}>
                            {isVisible2 && <TouchableOpacity style={styles.navitemconv5} onPress={handlethemluot2}>
                                <Text style={styles.txtitemcong}>+1</Text>
                            </TouchableOpacity>}
                        </View>
                        <View style={styles.navconv2}>
                            <Text style={styles.txtitemcong1}>EXTENSION</Text>
                        </View>
                        <View style={styles.viewne}>
                            {isVisible3 && <TouchableOpacity style={styles.navitemconv2} onPress={handlethemluot3}>
                                <Text style={styles.txtitemcong}>+2</Text>
                            </TouchableOpacity>}
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footeritem}>
                    <View style={styles.itemfooter}>
                        <View style={styles.footer2}>
                            <View style={styles.itemitem}>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1} onPress={handleStart} disabled={disabled1}>
                                        <Text style={(disabled1 === true ? styles.txtbtn1 : styles.txtbtn)}>
                                            Bắt đầu
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemitemcon} >
                                    <TouchableOpacity style={styles.pr1} onPress={handlePause}>
                                        <Text style={(paused === true ? styles.txtbtn1 : styles.txtbtn)}>
                                            Tạm dừng
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1} onPress={handleResume}>
                                        <Text style={styles.txtbtn}>
                                            Tiếp tục
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.itemitem}>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1} onPress={handlechuyenluot}>
                                        <Text style={styles.txtbtn}>
                                            Chuyển lượt
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1} onPress={themluot}>
                                        <Text style={styles.txtbtn}>
                                            Thêm lượt
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.itemitemcon}>
                                    <TouchableOpacity style={styles.pr1}>
                                        <Text style={styles.txtbtn}>

                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cooldow}>
                            <View style={styles.footer1}>
                                <View style={styles.itemcon2}>
                                    <View style={styles.seconds}>
                                        <Text style={styles.text}>{progress}</Text>
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
export default Libre;