import React from 'react';
import { StyleSheet, View } from 'react-native';

import GlobalProvider from './src/context/Provider';
import Navigator from './src/navigation';

export default function App() {

  return (
    <GlobalProvider>
      <View style={styles.container}>
        <Navigator />
      </View>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
