import 'react-native';
import React from 'react';
import Home from '../../src/screens/Home';
import {MockedProvider} from '@apollo/client/testing';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const navigation = {
  setOptions: jest.fn(),
};

const mocks: any[] = [];

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

  test('', () => {

  });
  // test('renders correctly', () => {
  //   const component = (
  //     <MockedProvider mocks={mocks}>
  //       <Home navigation={navigation} />
  //     </MockedProvider>
  //   );
  //   const json = renderer.create(component).toJSON();
  //   expect(json).toMatchSnapshot();
  // });
});
