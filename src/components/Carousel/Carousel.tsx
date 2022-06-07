import React from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import Indicator from './Indicator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'visible',
  },
});
interface CarouselProps {
  items: any[];
  renderItem: (scrollX: Animated.Value, item: any) => JSX.Element;
  updateIndex?: (number: number) => void;
  onFetchMore?: () => void;
  onFetchBack?: () => void;
}

const {width} = Dimensions.get('window');

const Carousel = ({items, renderItem, updateIndex, onFetchMore, onFetchBack}: CarouselProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        testID={'flat-list'}
        data={items}
        horizontal
        numColumns={1}
        removeClippedSubviews
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={'fast'}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem.bind(this, scrollX)}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onMomentumScrollEnd={({nativeEvent}) => {
          const index = Math.ceil(nativeEvent.contentOffset.x / width);
          if (updateIndex) {
            updateIndex(index);
          }
        }}
        onMomentumScrollBegin={({nativeEvent}) => {
          const index = Math.abs(Math.ceil(nativeEvent.contentOffset.x / width));
          if (index === 0 && onFetchBack) {
            onFetchBack();
          }
          if (index === 4 && onFetchMore) {
            onFetchMore();
          }
        }}
      />
      <Indicator scrollX={scrollX} itemsQty={items.length} />
    </View>
  );
};

export default Carousel;
