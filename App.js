import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity }
 from 'react-native';

import React from 'react';
export default function App() {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://play-lh.googleusercontent.com/itloGrr6R-lJfBmxMno6vjrlgBs7_5u5Ea_LPsZnqOACparHQ7hSduPJSZucQwL6_w' }} style={{ width: 305, height: 159 }} />
      <Text style={{color: '#888', fontSize: 18}}>
        To start scanning the QR press the button
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
