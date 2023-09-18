import { View, Text } from 'react-native'
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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen name='SettingLib4' component={SettingLib4} />
    </Tab.Navigator>
  )
}
const NewNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="SettingLib" component={SettingLib} />
        <Stack.Screen name="Setting" component={Setting} ></Stack.Screen>
        <Stack.Screen name="Settingdate" component={Settingdate} ></Stack.Screen>
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