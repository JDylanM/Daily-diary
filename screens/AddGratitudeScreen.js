import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class AddGratitudeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerStyle: {
        //If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
        marginTop: Platform.OS === 'android' ? 24 : 0,
        shadowColor: 'transparent',
        height: 90,
        backgroundColor: 'white'
      },

      headerTintColor: 'black',
      tabBarVisible: false,

      headerRight:
        <Button
          textStyle={{ color: 'black', fontSize: 17 }}
          backgroundColor='white'
          title="Save"
          onPress={() => params.handleSave()}
        />,

        headerLeft:
          <Button

            backgroundColor='white'
            onPress={() => params.handleSave()}
            icon={{ name: 'clear', color: 'black', size: 40 }}
          />
    };
  };


  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.saveGratitude });
  }

  saveGratitude = () => {
    this.props.navigation.navigate('home');
  }

  render() {
    return (
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 36 }}> Gratitude </Text>
        <Text>Write down something you{"'"}re grateful for today!</Text>
      </View>
    );
  }
}

export default AddGratitudeScreen;
