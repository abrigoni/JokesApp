import 'react-native';
import React from 'react';
import JokeCard from '../../src/components/JokeCard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import IconButton from '../../src/components/IconButton';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('Renders', () => {
  it('Renders correctly', () => {
    const json = renderer
      .create(<JokeCard content={'test'} backgroundColor={Colors.orange} />)
      .toJSON();
    expect(json).toMatchSnapshot();
  });
  it('Renders with IconButton', () => {
    const json = renderer
      .create(
        <JokeCard
          content={'test'}
          backgroundColor={Colors.orange}
          BottomIcon={<IconButton iconProps={{name: 'trash', size: 20}} />}
        />,
      )
      .toJSON();
    expect(json).toMatchSnapshot();
  });
});
