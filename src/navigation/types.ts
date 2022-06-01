import { HOME_ROUTE } from "../screens/Home";
import { SAVED_JOKES_ROUTE } from "../screens/SavedJokes";

export type AppNavigatorStackParamList = {
  [HOME_ROUTE]: undefined;
  [SAVED_JOKES_ROUTE]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorStackParamList {}
  }
}