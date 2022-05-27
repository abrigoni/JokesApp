import React from 'react';
import Home from '../../src/screens/Home';
import {MockedProvider} from '@apollo/client/testing';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render } from "@testing-library/react-native";
import { AppContext } from "../../src/context/AppContext";
import SavedJokes from "../../src/screens/SavedJokes";

const navigation = {
  setOptions: jest.fn(),
  navigate: jest.fn(),
};

const mocks: any[] = [];

const removeJoke = jest.fn();

describe('<SavedJokes />', () => {
  test('renders correctly', () => {
    const component = (
      <MockedProvider mocks={mocks}>
        <AppContext.Provider value={{
          saveJoke: jest.fn(),
          removeJoke: jest.fn(),
          savedJokes: [
            {
              id: '1',
              joke: 'Test'
            },
            {
              id: '2',
              joke: 'Test 2'
            }]
        }}>
          <SavedJokes navigation={navigation} />
        </AppContext.Provider>
      </MockedProvider>
    );
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
  test('Click remove in card calls context removeJoke', async () => {
    const component = (
      <MockedProvider mocks={mocks}>
        <AppContext.Provider value={{
          saveJoke: jest.fn(),
          removeJoke,
          savedJokes: [
            {
              id: '1',
              joke: 'Test'
            }]
        }}>
          <SavedJokes navigation={navigation} />
        </AppContext.Provider>
      </MockedProvider>
    );
    const {getByText} = render(component);
    const toClick = await getByText('');
    fireEvent(toClick, 'press');
    expect(removeJoke).toHaveBeenCalledTimes(1);
    expect(removeJoke).toHaveBeenCalledWith('1');
  });
});
