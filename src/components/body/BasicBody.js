import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

function BasicBody(props) {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
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

export default BasicBody;
