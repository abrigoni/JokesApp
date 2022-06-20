import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from '../TextField';
import Button from '../Button';
import useAuth from '../../hooks/useAuth';

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
  },
})

interface Props {
  isSignIn?: boolean;
}

const AuthForm = ({isSignIn = true}: Props) => {
  const {signIn, signUp } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handlePasswordVisibleChange = () => {
    setPasswordVisible((lastPasswordVisible) => !lastPasswordVisible);
  };
  const handleChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSignIn = () => {
    signIn(form.email, form.password);
  };

  const handleSignUp = () => {
    signUp(form.email, form.password);
  };
  return (
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
      <Button title={isSignIn ? "Sign In" : "Sign Up"} style={styles.button} onPress={isSignIn ? handleSignIn : handleSignUp} />
    </View>
  );
}

export default AuthForm;
