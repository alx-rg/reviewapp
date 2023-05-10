import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/actions';

const ReviewScreen = () => {
  const [productName, setProductName] = useState('');
  const [quality, setQuality] = useState(0);
  const [shippingSpeed, setShippingSpeed] = useState(0);
  const [overallSatisfaction, setOverallSatisfaction] = useState(0);

  const dispatch = useDispatch();

  const saveReview = () => {
    dispatch(addReview({ productName, quality, shippingSpeed, overallSatisfaction }));
    setProductName('');
    setQuality(0);
    setShippingSpeed(0);
    setOverallSatisfaction(0);
  };

  return (
    <View>
      <Text>Product Name:</Text>
      <TextInput
        value={productName}
        onChangeText={setProductName}
      />
      {/* Will be adding segmented controls for quality, shippingSpeed, and overallSatisfaction */}
      <Button title="Save" onPress={saveReview} />
    </View>
  );
};

export default ReviewScreen;
