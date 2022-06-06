import React, {FC, PropsWithChildren} from 'react';
import {View, StyleSheet, Animated, Dimensions, ListRenderItem} from 'react-native';
import Indicator from './Indicator';

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
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

const Carousel = ({items, renderItem, updateIndex, onFetchMore}: CarouselProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.carouselContainer}>
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
            listener: ({nativeEvent}) => {
              const index = Math.ceil((nativeEvent as any).contentOffset.x / width);
              if (updateIndex) {
                updateIndex(index);
              }
            },
          },
        )}
        onEndReachedThreshold={0}
        onEndReached={() => {
          if (onFetchMore) {
            onFetchMore();
          }
        }}
      />
      <Indicator scrollX={scrollX} itemsQty={items.length} />
    </View>
  );
};

export default Carousel;
