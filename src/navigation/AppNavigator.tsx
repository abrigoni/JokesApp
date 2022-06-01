import React, {FC} from 'react';
import {Colors} from '../utils/colors';
import Home, {HOME_ROUTE} from '../screens/Home';
import SavedJokes, {SAVED_JOKES_ROUTE} from '../screens/SavedJokes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AppNavigatorStackParamList } from './types';


const {Navigator, Screen} = createNativeStackNavigator<AppNavigatorStackParamList>();

const AppNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.white},
        contentStyle: {backgroundColor: Colors.white},
      }}>
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
