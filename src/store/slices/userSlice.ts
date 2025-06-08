import { StoreSlice } from '../Store';

type UserStore = {
  data: {
    name: string;
    email: string;
    username: string;
  };
};

type UserActions = {
  setUsername: (username: string) => void;
};

export type UserSlice = UserStore & UserActions;

export const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  data: {
    name: 'Danillo Torres',
    email: 'danilloept@gmail.com',
    username: 'danillotorresdev',
  },
  setUsername: (username: string) => set(prevState => {
    prevState.user.data.username = username;
  }),
});
