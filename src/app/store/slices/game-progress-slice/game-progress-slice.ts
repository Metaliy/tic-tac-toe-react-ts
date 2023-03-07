import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomNumber } from 'app/store/api-actions/random-number-api/random-number-api';
import { TGameProgress } from 'app/store/types';
import { CELL_COUNT, NameSpace } from 'shareds/config';

const initialState: TGameProgress = {
  playingFieldValues: CELL_COUNT,
  userTurns: [],
  computerTurns: [],
  randomNumber: 0,
  winner: '',
  winningCombo: []
};

export const gameProgressSlice = createSlice ({
  name: NameSpace.Game,
  initialState,
  reducers: {
    userTurnReducer: (state, action) => {
      const index = state.playingFieldValues.indexOf(action.payload)
      if (index !== -1) {
        state.userTurns.push(state.playingFieldValues[index])
        state.playingFieldValues.splice(index, 1)
      }
    },
    computerTurnReducer: (state, action) => {
        state.computerTurns.push(state.playingFieldValues[action.payload])
        state.playingFieldValues.splice(action.payload, 1)
    },
    winnerReducer: (state, {payload}) => {
      state.winner = payload.winnerName
      state.winningCombo = payload.winningCombo
    },
    resetGame: (state) => {
      state.computerTurns = initialState.computerTurns;
      state.playingFieldValues = initialState.playingFieldValues;
      state.randomNumber = initialState.randomNumber;
      state.userTurns = initialState.userTurns;
      state.winner = initialState.winner;
      state.winningCombo = initialState.winningCombo;
    },
  },
    extraReducers(builder) {
    builder
      .addCase(fetchRandomNumber.fulfilled, (state, action) => {
        state.randomNumber = action.payload[0];
  })
}
});

export const {userTurnReducer, computerTurnReducer, winnerReducer, resetGame} = gameProgressSlice.actions;