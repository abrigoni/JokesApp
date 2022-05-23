import React, { FC } from 'react'
import { View, StyleSheet, Animated, } from 'react-native';
import Indicator from './Indicator';

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
  },
});
interface Props {
  items: any[];
  renderItem: any;
}

const Carousel: FC<Props> = ({items, renderItem}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.carouselContainer}>
        <Animated.FlatList
          data={items}
          renderItem={renderItem.bind(this, scrollX)}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: { x: scrollX }}}],
            {useNativeDriver: false},
          )}
          pagingEnabled
          keyExtractor={(_, index) => index.toString()}
        />
        <Indicator scrollX={scrollX} itemsQty={items.length} />
    </View>
  )
}

export default Carousel