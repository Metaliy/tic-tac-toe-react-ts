import { combineReducers } from '@reduxjs/toolkit';
import { gameProgressSlice } from './slices/game-progress-slice/game-progress-slice';
import { NameSpace } from 'shareds/config';


export const rootReducer = combineReducers({
  [NameSpace.Game]: gameProgressSlice.reducer,
});

