import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Character = ({uri, name, status, showings}) => {
  console.log('🚀 ~ file: Character.js:5 ~ name', name);
  return (
    <View>
      <Image source={uri} />
      <Text style={styles.name}>{name}</Text>
      <Text>{status}</Text>
      <Text>12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  name: {
    color: '#000',
  },
});
