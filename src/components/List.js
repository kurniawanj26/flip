import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from 'react-native';

const List = props => {
  return (
    <FlatList
      data={props.data}
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
      renderItem={({item}) => (
        <TouchableOpacity style={styles.listContainer}>
          <View style={styles.items}>
            <View style={styles.textContainer}>
              <Text>
                {item.firstName} {item.lastName}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    borderBottomWidth: 0.5,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  items: {
    flexDirection: 'row',
  },
  thumbnail: {
    borderRadius: 10,
    marginRight: 10,
  },
  noImage: {
    borderRadius: 10,
    marginRight: 10,
    width: 60,
    height: 60,
    backgroundColor: 'grey',
  },
});

export default List;