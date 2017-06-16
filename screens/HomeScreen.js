import React from 'react';
import { ScrollView, Text, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import GratitudeCard from '../components/GratitudeCard';

class HomeScreen extends React.PureComponent {
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

  onRowPress = (gratitude) => {
    this.props.navigation.navigate('editGratitude', { gratitude });
  }

  renderGratitudes = () => {
      return this.props.todayGratitudes.reverse().map(gratitude => {
        return (
          <GratitudeCard
            gratitude={gratitude}
            onRowPress={this.onRowPress}
            key={gratitude.key}
          />
        );
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
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  navigationBarStyle: {
    height: 100
  },
};

function getTodaysGratitudes(gratitudes) {
  let todayDate = new Date();
  todayDate = todayDate.toISOString().slice(0, 10);

  return gratitudes.filter(gratitude => gratitude.date === todayDate);
}

const mapStateToProps = ({ gratitudes }) => {
  const todayGratitudes = getTodaysGratitudes(gratitudes);

  return { todayGratitudes };
};

export default connect(mapStateToProps)(HomeScreen);
