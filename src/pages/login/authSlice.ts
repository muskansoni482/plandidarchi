import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    photo: string;
    role: string;
    provider?: string;
    active?: boolean;
    verified?: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
  }

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;

