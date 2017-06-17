import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import MyAppText from '../components/MyAppText';

const SCREEN_WIDTH = Dimensions.get('window').width;

class GratitudeCard extends React.PureComponent {
  static defaultProps = {
    onRowPress: () => {}
  }

  render() {
    const { date, text } = this.props.gratitude;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onRowPress(this.props.gratitude)}
      >
        <View style={styles.containerStyle}>
            <MyAppText style={styles.dateTextStyle}>
              {date}
            </MyAppText>
            <MyAppText style={styles.cardTextStyle}>
              {text}
            </MyAppText>
          </View>
        </TouchableWithoutFeedback>
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
