import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Electronic from '../src/screens/Electronic'
//import Brand from '../src/screens/Brand'
import Control from '../src/screens/Control'

const Stack = createNativeStackNavigator();

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Control'>
        <Stack.Screen name='Control' component={Control} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}