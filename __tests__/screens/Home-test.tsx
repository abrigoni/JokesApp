import React from 'react';
import Home from '../../src/screens/Home';
import {MockedProvider} from '@apollo/client/testing';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { FETCH_JOKE } from "../../src/graphql/queries";

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
          joke: 'Test'
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
  test('saveJoke on context gets called', () => {
    const component = (
      <MockedProvider mocks={mocks}>
        <Home navigation={navigation} />
      </MockedProvider>
    );
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});
