import { AppDispatch, State } from "app/store/types";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || "";
};

export const API_URL = getEnvVar("VITE_APP_API_URL");

export const REQUEST_TIMEOUT = 5000;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export enum NameSpace {
  Game = 'Game',
}

export enum GameResults {
  Computer = 'Computer',
  User = 'User',
  Draw = 'Draw'
}

export const CELL_COUNT = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const CELL_VALUE = [{id: 0, value: ''}, {id: 1, value: ''}, {id: 2, value: ''}, {id: 3, value: ''}, {id: 4, value: ''}, {id: 5, value: ''}, {id: 6, value: ''}, {id: 7, value: ''}, {id: 8, value: ''}, ]

export const winningValues = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


export function jaccardIndex<T>(a: T[], b: T[]): number {
  const setA = new Set(a);
  const setB = new Set(b);
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
}

export const getRandomNumber = (max:number) => (Math.floor(Math.random() * (max - 1)))