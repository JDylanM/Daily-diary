import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Text style={styles.headerStyle}> Today{"'"}s {'\n'} gratitudes </Text>
    ),
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="home" size={30} color={tintColor} />;
    },
    headerRight: (
      <Button
        onPress={() => { navigation.navigate('addGratitude'); }}
        backgroundColor="rgba(0,0,0,0)"
        icon={{ name: 'add', color: 'black', size: 40 }}
      />
    ),
    headerStyle: {
      //If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
      marginTop: Platform.OS === 'android' ? 24 : 0,
      height: 140,
      shadowColor: 'transparent',
      backgroundColor: 'white'
    }
  })
  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
        <Text> HomeScreen </Text>
        <Text> HomeScreen </Text>
        <Text> HomeScreen </Text>
        <Text> HomeScreen </Text>
        <Text> HomeScreen </Text>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 36
  },
  navigationBarStyle: {
    height: 100
  }
};

export default HomeScreen;
