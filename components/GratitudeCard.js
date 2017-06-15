import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class GratitudeCard extends Component {
  // does not use destructuring here
    render() {
      const { date, text } = this.props.gratitude;

      return (
        <View style={styles.containerStyle}>
          <Text style={styles.dateTextStyle}>
            {date}
          </Text>
          <Text style={styles.cardTextStyle}>
            {text}
          </Text>
        </View>
      );
    }

}

const styles = {
  containerStyle: {
    borderBottomWidth: 0.5,
    width: SCREEN_WIDTH * 0.85,
    backgroundColor: '#fff',
    // flexbox rules comes back later what they do
    borderColor: 'black',
  },
  dateTextStyle: {
    fontSize: 16,
    color: '#009688',
    marginTop: 5,
    marginBottom: 15
  },
  cardTextStyle: {
    fontSize: 16,
    marginBottom: 15
  }
};

export default GratitudeCard;
