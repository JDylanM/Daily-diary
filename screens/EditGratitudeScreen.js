import React, { Component } from 'react';
import { View, Text, Platform, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EditGratitudeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTintColor: 'black',
      tabBarVisible: false,

      headerStyle: {
        //If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
        marginTop: Platform.OS === 'android' ? 24 : 0,
        shadowColor: 'transparent',
        height: 90,
        backgroundColor: 'white'
      },

      header:
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }} >
        <Button
          backgroundColor='white'
          onPress={() => navigation.navigate('home')}
          icon={{ name: 'chevron-left', color: 'black', size: 40 }}
        />
        <Button
          textStyle={{ color: 'black', fontSize: 17 }}
          backgroundColor='white'
          icon={{ name: 'delete-forever', color: 'black', size: 40 }}
          onPress={() => params.handleDelete()}
        />
        <Button
          style={{ marginTop: 10 }}
          textStyle={{ color: 'black', fontSize: 17 }}
          backgroundColor='white'
          title="Save"
          onPress={() => params.handleSave()}
        />
      </View>
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({
      handleSave: this.handleSave,
      handleDelete: this.handleDelete,
    });
    const { text } = this.props.navigation.state.params.gratitude;
    this.props.textUpdate(text);
  }

  handleDelete = () => {
    const { key } = this.props.navigation.state.params.gratitude;
    this.props.deleteGratitude(key);
    this.props.navigation.navigate('home');
  }

  handleSave = () => {
    const { key } = this.props.navigation.state.params.gratitude;
    this.props.updateGratitude(this.props.text, key);
    this.props.navigation.navigate('home');
  }

  render() {
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
  return { text };
};

export default connect(mapStateToProps, actions)(EditGratitudeScreen);
