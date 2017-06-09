import React, { Component } from 'react';
import { View, Text, Platform, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
    console.log(this.props.text);
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.textTitleStyle}>
            Gratitude
          </Text>
          <Text style={styles.textStyle}>
            Write down something you{"'"}re grateful for today!
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.textInputStyle}
            multiline
            autoFocus
            onChangeText={(text) => this.props.textUpdate(text)}
            value={this.props.text}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  textTitleStyle: {
    fontSize: 28,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  textStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  textInputStyle: {
    flex: 1,
    borderColor: 'gray',
    marginTop: 20,
    fontSize: 20,
    padding: 5,
  }
};

const mapStateToProps = ({ text }) => {
  //console.log(text);
  return { text };
};

export default connect(mapStateToProps, actions)(AddGratitudeScreen);
