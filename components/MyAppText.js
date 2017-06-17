import React, { Component } from 'react';
import { Text } from 'react-native';
import { projectFont } from '../projectFont/';

class MyAppText extends Component {
  render() {
    return (
      <Text style={[styles.textStyle, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = {
  textStyle: {
    fontFamily: projectFont
  }
};

export default MyAppText;
