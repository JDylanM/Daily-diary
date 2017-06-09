import React from 'react';
import { View, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Card = (props) => {
  // does not use destructuring here
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0.5,
    width: SCREEN_WIDTH * 0.85,
    backgroundColor: '#fff',
    // flexbox rules comes back later what they do
    borderColor: 'black',
  }
};

export default Card;
