import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Text style={styles.headerTextStyle}> Today{"'"}s {'\n'} gratitudes </Text>
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
      height: 120,
      shadowColor: 'transparent',
      backgroundColor: 'white'
    }
  })

  renderGratitudes = () => {
    console.log('HAHAHAWHEOPAWKEOPAKWOPEKAWOPEKWAOP');
    console.log(this.props.gratitudes);
    return this.props.gratitudes.map(gratitude =>
        <Text key={gratitude.date.getTime()}>{gratitude.text}</Text>
    );
  }

  render() {
    return (
      <View>
        {this.renderGratitudes()}
      </View>
    );
  }
}

const styles = {
  headerTextStyle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  navigationBarStyle: {
    height: 100
  }
};

const mapStateToProps = ({ gratitudes }) => {
  return { gratitudes }
};

export default connect(mapStateToProps)(HomeScreen);
