import React, {FC} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import Indicator from './Indicator';

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
  },
});
interface Props {
  items: any[];
  renderItem: any;
  updateIndex?: (number: number) => void;
  onFetchMore?: () => void;
  onFetchBack?: () => void;
}

const {width} = Dimensions.get('window');

const Carousel: FC<Props> = ({items, renderItem, updateIndex, onFetchMore}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.carouselContainer}>
      <Animated.FlatList
        testID={'flat-list'}
        data={items}
        renderItem={renderItem.bind(this, scrollX)}
        horizontal
        showsHorizontalScrollIndicator={false}
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
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
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
