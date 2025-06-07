import { StateCreator } from 'zustand';
import { CounterSlice } from './slices/counterSlice';
import { UserSlice } from './slices/userSlice';

export type Store = {
  user: UserSlice;
  counter: CounterSlice;
};

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [
    ['zustand/devtools', never],
    ['zustand/immer', never]
  ],
  [],
  TSlice
>;
