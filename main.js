import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddGratitudeScreen from './screens/AddGratitudeScreen';
import MemoriesScreen from './screens/MemoriesScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      main: {
        screen: TabNavigator({
          home: {
            screen: StackNavigator({
              review: { screen: HomeScreen },
              settings: { screen: AddGratitudeScreen }
            })
          },
          memories: { screen: MemoriesScreen }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
