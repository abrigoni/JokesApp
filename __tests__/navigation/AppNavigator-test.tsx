import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent} from '@testing-library/react-native';
import AppNavigator from '../../src/navigation/AppNavigator';
import { MockedProvider } from '@apollo/client/testing';


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock(
  'react-native-vector-icons/FontAwesome',
  () => 'MockedFontAwesomeIcon',
);

const mocks: any[] = [];

describe('Testing navigation', () => {
  test('Navigator displays Home by default', async () => {
    const component = (
      <MockedProvider mocks={mocks}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </MockedProvider>
    );
    const {findByText} = render(component);
    const title = await findByText('Things you can say to annoy designers.');
    expect(title).toBeTruthy();
  });

  test('Clicking on Saved button takes you to the Saved Screen', async () => {
    const component = (
      <MockedProvider mocks={mocks}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </MockedProvider>
    );
    const {getByText, findByText} = render(component);
    const toClick = getByText(/Saved: 0/i);
    fireEvent(toClick, 'press');
    const newHeader = await findByText('0');
    const newBody = await findByText('Nothing saved 😭');
    expect(newHeader).toBeTruthy();
    expect(newBody).toBeTruthy();
  });
});
