import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const [isTabPressed, setIsTabPressed] = useState(false);

  const handleTabPress = () => {
    setIsTabPressed(!isTabPressed);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={handleTabPress}
        style={{
          backgroundColor: isTabPressed ? 'red' : 'blue',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white' }}>Nhấn Tab</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;