import 'react-native';
import React from 'react';
import Carousel from '../../../src/components/Carousel';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render } from "@testing-library/react-native";

const items = ["Test1", "Test2"];

describe('<Carousel />', () => {
  it('renders correctly', () => {
    const json = renderer
      .create(
        <Carousel items={items} renderItem={jest.fn()}/>
      )
      .toJSON();
    expect(json).toMatchSnapshot();
  });
  it('onFetchMore gets invoked when end reached', async () => {
    const mockFetchMore = jest.fn();
    const { getByTestId } = render(
      <Carousel items={items} renderItem={jest.fn()} onFetchMore={mockFetchMore}/>
    );
    const toInteract = await getByTestId('flat-list');
    fireEvent.scroll(toInteract, {
      nativeEvent: {
        contentOffset: {
          y: 0,
          x: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 100,
          width: 500,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      }
    });
    expect(mockFetchMore).toHaveBeenCalledTimes(1);
  });
  it('updateIndex gets invoked onScroll', async () => {
    const mockUpdateIndex = jest.fn();
    const { getByTestId } = render(
      <Carousel items={items} renderItem={jest.fn()} updateIndex={mockUpdateIndex}/>
    );
    const toInteract = await getByTestId('flat-list');
    fireEvent.scroll(toInteract, {
      nativeEvent: {
        contentOffset: {
          y: 0,
          x: 250,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 100,
          width: 500,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 250,
        },
      }
    });
    expect(mockUpdateIndex).toHaveBeenCalledTimes(1);
    expect(mockUpdateIndex).toHaveBeenCalledWith(1); // from index 0 to 1
  });
});
