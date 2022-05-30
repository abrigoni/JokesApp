import React from 'react';
import Home from '../../src/screens/Home';
import {MockedProvider} from '@apollo/client/testing';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { FETCH_JOKE } from "../../src/graphql/queries";
import { fireEvent, render } from "@testing-library/react-native";
import { AppContext } from "../../src/context/AppContext";

const navigation = {
  setOptions: jest.fn(),
  navigate: jest.fn(),
};

const mocks: any[] = [
  {
    request: {
      query: FETCH_JOKE,
    },
    result: {
      data: {
        joke: {
          id: '1',
          joke: 'Test',
          permalink: '1',
        },
      },
    },
  },
];

describe('<Home />', () => {
  test('renders correctly', () => {
    const component = (
      <MockedProvider mocks={mocks}>
        <Home navigation={navigation} />
      </MockedProvider>
    );
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
  test('saveJoke on context gets called when clicking Save button', async () => {
    const mockSaveJoke = jest.fn();
    const component = (
      <MockedProvider mocks={mocks}>
        <AppContext.Provider value={{savedJokes: [], removeJoke: jest.fn(), saveJoke: mockSaveJoke}}>
          <Home navigation={navigation} />
        </AppContext.Provider>
      </MockedProvider>
    );
    const { getByText } = await render(component);
    const toClick = await getByText('Save');
    fireEvent.press(toClick);
    expect(mockSaveJoke).toHaveBeenCalledTimes(1);
  });
});
