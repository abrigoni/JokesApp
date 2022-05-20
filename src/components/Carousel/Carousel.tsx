import React, { FC } from 'react'
import { View, FlatList, Text, StyleSheet, ListRenderItem } from 'react-native';
import Steps from './Steps';

const styles = StyleSheet.create({
  stepperContainer: {
    marginTop: 32,
  },
});

interface Props {
  items: any[];
  renderItem: ListRenderItem<any>;
}


const Carousel: FC<Props> = ({items, renderItem}) => {
  return (
    <View style={{flex: 1}}>
        <FlatList
          data={items}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          maxToRenderPerBatch={1}
        />
        <View style={styles.stepperContainer}>
          <Steps length={items.length} currentIndex={0} />
        </View>
    </View>
  )
}

export default Carousel