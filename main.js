import Expo from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store/';
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
              home: { screen: HomeScreen },
              addGratitude: { screen: AddGratitudeScreen }
            }, {
              cardStyle: { backgroundColor: 'white' },
              mode: 'modal'
            })
          },

          memories: { screen: MemoriesScreen },

        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            activeTintColor: '#FA7470',
            labelStyle: { fontSize: 12 },
            style: {
              backgroundColor: 'white',
              borderTopColor: 'transparent'
            }
          }
        })
      },

    }, {
      navigationOptions: {
        style: { backgroundColor: 'white' },
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
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
