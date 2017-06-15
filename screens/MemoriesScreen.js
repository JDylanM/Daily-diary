import React, { Component } from 'react';
import { ListView, View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import GratitudeCard from '../components/GratitudeCard';

class MemoriesScreen extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="favorite" size={30} color={tintColor} />;
    },
  });

  _keyExtractor = (item) => `${item.text} + ${item.date}`;

  _renderItem({ item }) {
    return <GratitudeCard gratitude={item} />;
  }

  renderHeader() {
    return (
      <View>
        <Text style={styles.textTitleStyle}>
          Memories
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.textTitleStyle} >
          Memories
        </Text>
        <FlatList
          contentContainerStyle={styles.containerStyle}
          removeClippedSubViews={false}
          data={this.props.gratitudes.reverse()}
          keyExtractor={this._keyExtractor}
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
    marginTop: 40
  }
};

const mapStateToProps = ({ gratitudes }) => {
  return { gratitudes };
};

export default connect(mapStateToProps)(MemoriesScreen);
