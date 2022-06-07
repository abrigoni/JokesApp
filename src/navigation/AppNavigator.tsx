import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home, {HOME_ROUTE} from '../screens/Home';
import SavedJokes, {SAVED_JOKES_ROUTE} from '../screens/SavedJokes';
import { screenOptions } from './settings';
import { AppNavigatorStackParamList } from './types';


const {Navigator, Screen} = createNativeStackNavigator<AppNavigatorStackParamList>();

const AppNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={screenOptions}>
      <Screen
        name={HOME_ROUTE}
        component={Home}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Screen
        name={SAVED_JOKES_ROUTE}
        component={SavedJokes}
        options={{
          title: 'Saved',
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
