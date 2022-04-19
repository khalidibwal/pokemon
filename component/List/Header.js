import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>POKEMON</Text>
        <Text style={{ color: 'white' }}>Gotta Catch 'em All!</Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a75bb',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: '#ffcb05',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#c7a008',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
});
