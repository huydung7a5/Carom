import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../SettingGame/Setting';
import Pool from '../Game/Pool';
import TrangChu from '../Index/TrangChu';
import SettingLib from '../SettingGame/SettingLib';
import Libre from '../Game/Libre';
import SettingLib4 from '../SettingGame/SettingLib4';
import Libre4 from '../Game/Libre4';
import Settingdate from '../SettingGame/Settingdate';
import Settingdetail from '../SettingGame/Settingdetail';
import SettingDateGame from '../SettingGame/SettingDateGame';
import ListGame from '../Game/ListGame';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  const screenOptions = ({ route }) => ({
    headerShown: false,
    // tabBarIcon: ({ focused, color, size }) => {
    //   let iconName;
    //   if (route.name === 'Thêm Lịch thi đấu') {
    //     if (focused) {
    //       return <Image style={styles.icon1} source={require('../../media/add_2921226.png')} />
    //     } else {
    //       return <Image style={styles.icon1} source={require('../../media/add_2921226.png')} />
    //     }
    //   } else if (route.name === 'Danh sách thi đấu') {
    //     if (focused) {
    //       return <Image style={styles.icon} source={require('../../media/Noun_Project_list_icon_119366_cc.svg.png')} />
    //     } else {
    //       return <Image style={styles.icon} source={require('../../media/Noun_Project_list_icon_119366_cc.svg.png')} />
    //     }
    //   }
    // },
  })
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Thêm Lịch thi đấu' component={SettingDateGame} />
      <Tab.Screen name='Danh sách thi đấu' component={ListGame} ></Tab.Screen>
    </Tab.Navigator>
  )
}

const NewNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name='SettingLib' component={SettingLib} />
        <Stack.Screen name="Settingdetail" component={Settingdetail} ></Stack.Screen>
        <Stack.Screen name="Setting" component={Setting} ></Stack.Screen>
        <Stack.Screen name="TrangChu" component={TrangChu} ></Stack.Screen>
        <Stack.Screen name="Pool" component={Pool} ></Stack.Screen>
        <Stack.Screen name="Libre" component={Libre} ></Stack.Screen>
        <Stack.Screen name='SettingLib4' component={SettingLib4} ></Stack.Screen>
        <Stack.Screen name='Libre4' component={Libre4} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default NewNavigator
const styles = StyleSheet.create({
  icon1: {
    width: "155%",
    height: "80%",
  },
  icon: {
    width: "130%",
    height: "80%",
  }
})