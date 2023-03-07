import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from 'app/store/types';
import { AxiosInstance } from 'axios';


export const fetchRandomNumber = createAsyncThunk<number[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getRandomNumberAction',
  async (number, {extra: api}) => {
    try {
      const {data} = await api.get<number[]>(`/api/v1.0/random?min=0&max=${number}&count=1`);
      return data;
    } catch (error) {
      console.log('some error')
      throw error;
    }
  },
);
