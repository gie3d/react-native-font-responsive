import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import FontResponsive from 'react-native-font-responsive';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: FontResponsive(20) }}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
