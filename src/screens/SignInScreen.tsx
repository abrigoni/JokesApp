import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import TextField from "../components/TextField/TextField";
import Button from "../components/Button";
import { OpenSansText } from "../components/Typography";
import { Colors } from "../utils/colors";
import IconButton from "../components/IconButton";
import JokeCard from "../components/JokeCard";


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
  button: {
    marginVertical: 16,
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

const SignInScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handlePasswordVisibleChange = () => {
    setPasswordVisible((lastPasswordVisible) => !lastPasswordVisible);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <OpenSansText variant={'SemiBold'} size={'H1'}>Welcome Back!</OpenSansText>
        <OpenSansText variant={'SemiBold'} size={'Body'}>
          Fill in the form with your credentials
        </OpenSansText>
      </View>
      {/*Form*/}
      <View>
        <TextField
          name={"email"}
          placeholder={"Email"}
          value={form.email}
          handleChange={handleChange}
          iconLeft={'envelope'}
        />
        <TextField
          secure={!passwordVisible}
          name={"password"}
          placeholder={"Password"}
          value={form.password}
          handleChange={handleChange}
          iconLeft={'lock'}
          iconLeftSize={30}
          iconRight={passwordVisible ? 'eye-slash' : 'eye'}
          handleIconRightPress={handlePasswordVisibleChange}
        />
        <Button title={"Sign in"} style={styles.button} />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.line} />
            <OpenSansText variant={'Regular'} size={'Body'} style={{paddingHorizontal: 6,}}>OR</OpenSansText>
            <View style={styles.line} />
          </View>
          <OpenSansText variant={'Bold'} size={'Body'} style={styles.createAccountText}>Create an account</OpenSansText>
        </View>
      </View>
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
