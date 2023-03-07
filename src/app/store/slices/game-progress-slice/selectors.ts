import { State } from "app/store/types";
import { NameSpace } from "shareds/config";

export const getAvailableValues = (state: State): number[] => state[NameSpace.Game].playingFieldValues;

export const getUserTurns = (state: State): number[] => state[NameSpace.Game].userTurns;

export const getComputerTurns = (state: State): number[] => state[NameSpace.Game].computerTurns;

export const getFetchingRandomNumber = (state: State): number | undefined => state[NameSpace.Game].randomNumber;

export const getWinner = (state: State): {winnerName: string, winningCombo: number[]} => ({winnerName: state[NameSpace.Game].winner, winningCombo: state[NameSpace.Game].winningCombo});