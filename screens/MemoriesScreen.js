import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class MemoriesScreen extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="favorite" size={30} color={tintColor} />;
    },
  });

  render() {
    return (
      <View>
        <Text style={styles.textTitleStyle}> Memories</Text>
        <Text> Memorie </Text>
        <Text> MemoriesScreen </Text>
        <Text> MemoriesScreen </Text>
        <Text> MemoriesScreen </Text>
        <Text> MemoriesScreen </Text>
        <Text> MemoriesScreen </Text>
      </View>
    );
  }
}

const styles = {
  textTitleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 40
  }
};

export default MemoriesScreen;
