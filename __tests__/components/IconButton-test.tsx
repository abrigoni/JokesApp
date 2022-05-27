import 'react-native';
import React from 'react';
import IconButton from '../../src/components/IconButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('<IconButton />', () => {
  it('renders correctly', () => {
    const json = renderer
      .create(<IconButton iconProps={{name: 'Trash'}} />)
      .toJSON();
    expect(json).toMatchSnapshot();
  });
});
