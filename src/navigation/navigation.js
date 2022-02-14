import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import FetchImage from '../screens/FetchImage';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="FetchImage" component={FetchImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
