import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigations/MyTabs';

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </>
    );
  }
}
