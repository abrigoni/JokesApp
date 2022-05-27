import 'react-native';
import React from 'react';
import {OpenSansText} from '../../src/components/Typography';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<OpenSansText />', () => {
  it('renders correctly', () => {
    const json = renderer
      .create(
        <OpenSansText size={'Body'} variant={'Bold'}>
          Test
        </OpenSansText>,
      )
      .toJSON();
    expect(json).toMatchSnapshot();
  });
  it('renders correctly without variant', () => {
    const json = renderer
      .create(<OpenSansText size={'Body'}>Test</OpenSansText>)
      .toJSON();
    expect(json).toMatchSnapshot();
  });
});
