import { HOME_ROUTE } from "../screens/Home";
import { SAVED_JOKES_ROUTE } from "../screens/SavedJokes";
import { SIGN_IN_ROUTE } from "../screens/SignInScreen";
import { SIGN_UP_ROUTE } from "../screens/SignUpScreen";

export type AppNavigatorStackParamList = {
  [HOME_ROUTE]: undefined;
  [SAVED_JOKES_ROUTE]: undefined;
  [SIGN_IN_ROUTE]: undefined;
  [SIGN_UP_ROUTE]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorStackParamList {}
  }
}