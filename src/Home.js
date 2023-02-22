import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {Character} from './Character';
import {fetchCharacters} from './charactersSlice';

export const HomeScreen = () => {
  const characters = useSelector(state => state.appState.characters);
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(fetchCharacters());
  };

  const renderItem = character => {
    return (
      <Character
        name={character.item.name}
        uri={character.item.image}
        status={character.item.status}
      />
    );
  };

  return (
    <View style={styles.button}>
      {!!characters.length && (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={character => character.id}
        />
      )}
      <Button
        onPress={reset}
        title="Reset"
        color="#841584"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
});
