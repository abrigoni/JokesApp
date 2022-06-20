import React, { useEffect } from "react";
import AppContextProvider from './context/AppContext';
import {ApolloProvider} from '@apollo/client';
import {client} from './graphql/client';
import AppNavigator from './navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import messaging from "@react-native-firebase/messaging";
import { Alert, Text } from 'react-native';
import useAuth from "./hooks/useAuth";
import LoadingOverlay from "./components/LoadingOverlay";

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const App = () => {
  const { initializing } = useAuth();
  useEffect(() => {
    requestUserPermission();
    // foreground
    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    messaging().onNotificationOpenedApp(async remoteMessage => {
      Alert.alert('Notification opened app when it was on background');
    });
  }, []);
  
  if (initializing) {
    return <LoadingOverlay />;
  }

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
