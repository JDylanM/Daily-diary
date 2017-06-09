import React, { Component } from 'react';
import { ScrollView, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Card from '../components/Card';

const MONTHS = [
  'january',
  'february',
  'mars',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Text style={styles.headerTextStyle}> Gratitude for {'\n'} today </Text>
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
    return this.props.gratitudes.map(gratitude => {
      const { text, date } = gratitude;
      const today = `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;

      return (
        <Card
          key={date.getTime()}
        >
          <Text style={styles.dateTextStyle}>
            {today}
          </Text>
          <Text style={styles.cardTextStyle}>
            {text}
          </Text>
        </Card>
      )
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerStyle}>
        {this.renderGratitudes()}
      </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  navigationBarStyle: {
    height: 100
  },
  dateTextStyle: {
    fontSize: 16,
    color: '#009688',
    marginTop: 5,
    marginBottom: 15
  },
  cardTextStyle: {
    fontSize: 16,
    marginBottom: 15
  }
};

const mapStateToProps = ({ gratitudes }) => {
  return { gratitudes }
};

export default connect(mapStateToProps)(HomeScreen);
