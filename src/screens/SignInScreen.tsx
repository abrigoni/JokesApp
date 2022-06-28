import React from "react";
import { StyleSheet, View, Dimensions, Alert } from "react-native";
import { OpenSansText } from "../components/Typography";
import { Colors } from "../utils/colors";
import IconButton from "../components/IconButton";
import JokeCard from "../components/JokeCard";
import AuthForm from "../components/AuthForm/AuthForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppNavigatorStackParamList } from "../navigation/types";
import { SIGN_UP_ROUTE } from "./SignUpScreen";
import useAuth from "../hooks/useAuth";
import analytics from '@react-native-firebase/analytics';

import Analytics from 'appcenter-analytics';

export const SIGN_IN_ROUTE = 'SignIn';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: width * .1,
    paddingTop: height * .2,
  },
  header: {
    marginBottom: height * .05,
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.purple,
    flex: 1,
  },
  createAccountText: {
    textAlign: 'center',
    marginVertical: 8,
    color: Colors.purple,
  },
  topCard: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  bottomRightCard: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    transform: [{rotate: '24deg'}],
  },
  bottomLeftCard: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    transform: [{rotate: '-24deg'}],
  },
  card: {
    height: height * 0.25,
    margin: 10,
    paddingTop: 30,
    paddingBottom: 10,
    maxWidth: width * 0.35,
  },
  title: {
    fontSize: 12,
  },
  author: {
    fontSize: 14,
  },
});

type SignInScreenProps = NativeStackScreenProps<AppNavigatorStackParamList>;

const SignInScreen = ({navigation}: SignInScreenProps) => {
  const { signIn } = useAuth();
  const handleSubmit = async (email: string, password: string) => {
    await analytics().logEvent('login');
    const result = await signIn(email, password);
    if (result.error) {
      Alert.alert("Error", result.error);
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <OpenSansText variant={'SemiBold'} size={'H1'}>Welcome Back!</OpenSansText>
        <OpenSansText variant={'SemiBold'} size={'Body'}>
          Fill in the form with your credentials
        </OpenSansText>
      </View>
      <AuthForm onSubmit={handleSubmit} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.line} />
        <OpenSansText variant={'Regular'} size={'Body'} style={{paddingHorizontal: 6,}}>OR</OpenSansText>
        <View style={styles.line} />
      </View>
      <OpenSansText
        variant={'Bold'}
        size={'Body'}
        style={styles.createAccountText}
        onPress={async () => {
          // MS appcenter
          Analytics.trackEvent("Navigate", {
            screen: 'SignIn',
            to: 'SignUp',
          });
          // Firebase
          await analytics().logEvent('Navigate', {
            screen: 'SignIn',
            to: 'SignUp'
          });
          navigation.navigate(SIGN_UP_ROUTE)}
        }>
          Create an account
        </OpenSansText>
      <View style={styles.bottomRightCard}>
        <JokeCard
          content={"Why is Peter Pan always flying? Because he Neverlands."}
          backgroundColor={Colors.orange}
          style={styles.card}
          titleStyle={styles.title}
          authorStyle={styles.author}
          BottomIcon={
            <IconButton
              name='trash'
              size={20}
              onPress={() => {}}
            />
          }
        />
      </View>
      <View style={styles.bottomLeftCard}>
        <JokeCard
          content={"Did you hear about the kidnapping at school? It’s fine, he woke up."}
          backgroundColor={Colors.green}
          style={styles.card}
          titleStyle={styles.title}
          authorStyle={styles.author}
          BottomIcon={
            <IconButton
              name='trash'
              size={20}
              onPress={() => {}}
            />
          }
        />
      </View>
    </View>
  )
};

export default SignInScreen;
