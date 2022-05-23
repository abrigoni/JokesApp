import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home, { HOME_ROUTE } from './screens/Home';
import SavedJokes, { SAVED_JOKES_ROUTE } from './screens/SavedJokes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from './utils/colors';
import { OpenSansText } from './components/Typography';
import { Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.white, },
          contentStyle: { backgroundColor: Colors.white, },
        }}
      >
        <Stack.Screen
          name={HOME_ROUTE}
          component={Home}
          options={({navigation}) => ({
            title: '',
            headerRight: () => (
              <Pressable style={{flexDirection: 'row'}} onPress={() => navigation.navigate(SAVED_JOKES_ROUTE)}>
                <OpenSansText size="Body" variant="Bold">Saved: 5 </OpenSansText>
                <Icon name="heart" color="#e74c3c" size={24} />
              </Pressable>
            ),
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name={SAVED_JOKES_ROUTE}
          component={SavedJokes}
          options={{
            title: 'Saved',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
