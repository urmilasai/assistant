import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  key: number;
  name: string;
  age: number;
  address: string;
};

interface State {
  user: User | undefined;
}

const initialState: State = {
  user: undefined,
};

const userSlice = createSlice({
  name: 'User Slice',
  initialState,
  reducers: {
    setUser: (state: State, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
