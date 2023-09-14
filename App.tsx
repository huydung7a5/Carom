/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NewNavigator from './src/Navigation/NewNagivation';
import MyComponent from './src/TestGame/MyComponent ';
function App(): JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <NewNavigator /> */}
      <MyComponent></MyComponent>
    </SafeAreaView>
  );
}
export default App;
