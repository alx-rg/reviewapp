import React from 'react';
import { View, Text } from 'react-native';
const ProductDetailsScreen = ({ route }) => {
  const { review } = route.params;
  return (
    <View>
      <Text>Product Name: {review.productName}</Text>
      <Text>Quality: {review.quality}</Text>
      <Text>Shipping Speed: {review.shippingSpeed}</Text>
      <Text>Overall Satisfaction: {review.overallSatisfaction}</Text>
    </View>
  );
};
export default Product
