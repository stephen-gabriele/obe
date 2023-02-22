import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  characters: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    charactersLoading(state, action) {
      state.status = 'loading';
    },
    charactersLoaded(state, action) {
      state.characters = action?.payload || [];
      state.status = 'idle';
    },
  },
});

export const {charactersLoaded, charactersLoading} = charactersSlice.actions;

export default charactersSlice.reducer;

// Thunk function
export const fetchCharacters = () => async dispatch => {
  dispatch(charactersLoading());
  const response = await fetch('https://rickandmortyapi.com/api/character');
  let characters = [];
  if (response.ok) {
    const data = await response.json();
    characters = data.results;
  } else {
    console.log('problemo with api');
  }
  dispatch(charactersLoaded(characters));
};
