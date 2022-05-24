import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home, { HOME_ROUTE } from './screens/Home';
import SavedJokes, { SAVED_JOKES_ROUTE } from './screens/SavedJokes';
import { Colors } from './utils/colors';
import AppContextProvider from './context/AppContext';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

const Stack = createNativeStackNavigator();

const Main = () => {
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
          options={{
            title: '',
            headerShadowVisible: false,
          }}
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
  )
}


const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </ApolloProvider>
  );
};

export default App;
