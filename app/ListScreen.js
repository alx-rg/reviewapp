import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ListScreen = () => {
  const reviews = useSelector((state) => state.reviews);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { review: item })}>
      <Text>{item.productName} - {item.overallSatisfaction}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListScreen;
