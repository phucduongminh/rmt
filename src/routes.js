import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Electronic from '../src/screens/Electronic'
import Brand from '../src/screens/Brand'
import Control from '../src/screens/Control'

const Stack = createNativeStackNavigator();

export default function Routes () {
  const theme = useContext(ThemeContext)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Electronic'
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.text,
          headerStyle: {
            elevation: 0,
            backgroundColor: theme.background
          }
        }}
      >
        <Stack.Screen
          name='Electronic'
          component={Electronic}
          options={{ title: 'Electronic' }}
        />
        <Stack.Screen
          name='Brand'
          component={Brand}
          options={{ title: 'Brand' }}
        />
        <Stack.Screen name='Control' component={Control} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}