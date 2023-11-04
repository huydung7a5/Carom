/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView
} from 'react-native';
import NewNavigator from './src/Components/Navigation/NewNagivation';

import Index from './src/Components/SplasScreen/Index';
function App(): JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NewNavigator />
    </SafeAreaView>
  );
}
export default App;
