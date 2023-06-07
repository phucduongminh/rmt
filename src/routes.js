import React, {useContext} from 'react';
import t from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CardStyleInterpolators} from '@react-navigation/stack'

//import Electronic from '../src/screens/Electronic'
import Brands from '../src/screens/Brands';
import Devices from '../src/screens/Devices';
import Control from '../src/screens/Control';

const Stack = createNativeStackNavigator();

function Back({tintColor}) {
  return <Icon name="chevron-left" size={26} color={tintColor} />;
}

export default function Routes() {
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
      />

      <Stack.Navigator
        initialRouteName="Brands"
        screenOptions={{
          headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.text,
          },
          headerTitleAlign: 'center',
          headerBackImage: Back,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="Devices"
          options={{
            title: 'Devices',
          }}
          component={Devices}
        />
        <Stack.Screen
          name="Brands"
          options={{
            title: 'Brands',
          }}
          component={Brands}
        />
        <Stack.Screen
          name="Control"
          options={{
            title: 'Control',
          }}
          component={Control}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Back.propTypes = {
  tintColor: t.string.isRequired,
};
