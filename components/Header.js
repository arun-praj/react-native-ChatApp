import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
Header.defaultProps = {
  title: 'Shopping List',
};
const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 5,
    backgroundColor: '#777777',
    // justifyContent: 'center',
    // alignItems: 'center',
    // position: 'relative',
    // flex: 1,
  },
  text: {
    // position: 'absolute',
    marginTop: 60,
    color: '#ffffff',
    // bottom: 15,
    // left: 50,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
