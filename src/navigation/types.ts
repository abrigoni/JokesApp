import { HOME_ROUTE } from "../screens/Home";
import { SAVED_JOKES_ROUTE } from "../screens/SavedJokes";
import { SIGN_IN_ROUTE } from "../screens/SignInScreen";

export type AppNavigatorStackParamList = {
  [HOME_ROUTE]: undefined;
  [SAVED_JOKES_ROUTE]: undefined;
  [SIGN_IN_ROUTE]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorStackParamList {}
  }
}