import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home, {HOME_ROUTE} from '../screens/Home';
import SavedJokes, {SAVED_JOKES_ROUTE} from '../screens/SavedJokes';
import { AppNavigatorStackParamList } from './types';
import SignInScreen, { SIGN_IN_ROUTE } from "../screens/SignInScreen";
import useAuth from '../hooks/useAuth';
import IconButton from '../components/IconButton';
import { Colors } from '../utils/colors';
import SignUpScreen, { SIGN_UP_ROUTE } from '../screens/SignUpScreen';


const {Navigator, Screen} = createNativeStackNavigator<AppNavigatorStackParamList>();

const AppNavigator: FC = () => {
  const {user, signOut} = useAuth();
  return (
    <Navigator
      screenOptions={{
        headerLeft: () => (
          <IconButton
            color={'#535c68'}
            name="user-times"
            onPress={signOut}
            size={24}
          />
        ),
        headerStyle: {backgroundColor: Colors.white},
        contentStyle: {backgroundColor: Colors.white},
      }}
    >
      {!!user ? (
        <>
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
      </>
      ) : (
        <>
          <Screen
            name={SIGN_IN_ROUTE}
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name={SIGN_UP_ROUTE}
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Navigator>
  );
};

export default AppNavigator;
