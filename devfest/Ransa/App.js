import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


export default function App() {
    return (
    <View style={styles.container}>
      <TextInput
      placeholder="inserta tu email"
      value=""/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
