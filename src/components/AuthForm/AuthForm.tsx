import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from '../TextField';
import Button from '../Button';

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
  },
})

interface Props {
  isSignIn?: boolean;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm = ({isSignIn = true, onSubmit}: Props) => {
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
      <Button title={isSignIn ? "Sign In" : "Sign Up"} style={styles.button} onPress={onSubmit.bind(this, form.email, form.password)} />
    </View>
  );
}

export default AuthForm;
