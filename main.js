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
import EditGratitudeScreen from './screens/EditGratitudeScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      main: {
        screen: TabNavigator({
          home: {
            screen: StackNavigator({
              home: { screen: HomeScreen },
              addGratitude: { screen: AddGratitudeScreen },
              editGratitude: { screen: EditGratitudeScreen }
            }, {
              cardStyle: { backgroundColor: 'white' },
              mode: 'modal'
            })
          },

          memories: { screen: MemoriesScreen },

        }, {
          lazy: true,
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
          <MainNavigator onNavigationStateChange={null} />
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
