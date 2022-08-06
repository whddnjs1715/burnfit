import * as React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export function Mypage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Mypage1</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Mypage;
