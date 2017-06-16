import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Rewire your brain to become more positive!', color: '#8BC8DB' },
  { text: 'Write down your gratitudes everyday!', color: '#7CD175' }
];


class WelcomeScreen extends Component {
  async componentWillMount() {
    let shownWelcome = await AsyncStorage.getItem('shownWelcome');

    if (shownWelcome) {
      this.props.navigation.navigate('home');
    }
  }

  onSlidesComplete = () => {
    AsyncStorage.setItem('shownWelcome', 'true');
    this.props.navigation.navigate('home');
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
        backgroundColor='#8BC8DB'
      >
        <Slides
          data={SLIDE_DATA}
          onComplete={this.onSlidesComplete}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
