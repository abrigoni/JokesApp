import React from 'react';
import AppContextProvider from './context/AppContext';
import {ApolloProvider} from '@apollo/client';
import {client} from './graphql/client';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppContextProvider>
    </ApolloProvider>
  );
};

export default App;
