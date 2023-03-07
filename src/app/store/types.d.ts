import { store } from ".";

declare type RootState = ReturnType<typeof import("./index").store.getState>;

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TGameProgress = {
  playingFieldValues: number[],
  userTurns: number[],
  computerTurns: number[],
  randomNumber: number,
  winner: string,
  winningCombo: number[]
}