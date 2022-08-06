import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home1</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Details Screen1</Text>
      <Button title="Go to Details... again" onPress={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
