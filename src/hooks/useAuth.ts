import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';

const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      return { user: response.user };
    } catch (e: any) {
      return { error: e.message };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      return { user: response.user };
    } catch (e: any) {
      return { error: e.message };
    }
  };

  const signOut = async () => {
    await analytics().logEvent('sign_out');
    auth().signOut();
  };

  useEffect(() => {
    const suscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return suscriber; // end suscription on unmount
  }, []);
  return { initializing, user, signIn, signOut, signUp };
};

export default useAuth;
