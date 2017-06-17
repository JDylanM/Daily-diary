import React, { Component } from 'react';
import { ListView, View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import GratitudeCard from '../components/GratitudeCard';
import MyAppText from '../components/MyAppText';

class MemoriesScreen extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="favorite" size={30} color={tintColor} />;
    },
  });

  _renderItem = ({ item }) => {
    return <GratitudeCard gratitude={item} />;
  }

  renderHeader() {
    return (
      <View>
        <MyAppText style={styles.textTitleStyle}>
          Memories
        </MyAppText>
      </View>
    );
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyAppText style={styles.textTitleStyle} >
          Memories
        </MyAppText>
        <FlatList
          contentContainerStyle={styles.containerStyle}
          data={this.props.gratitudes.reverse()}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1
  },
  textTitleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 40,
    marginLeft: 10
  }
};

const mapStateToProps = ({ gratitudes }) => {
  return { gratitudes };
};

export default connect(mapStateToProps)(MemoriesScreen);
