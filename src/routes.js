import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Eletronic from './src/screens/Eletronic'
import Brand from '../src/screens'
import Control from '../src/screens/Control'

const Stack = createNativeStackNavigator();

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Eletronic'>
        <Stack.Screen name='Brand' component={Brand} />
        <Stack.Screen name='Control' component={Control} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}