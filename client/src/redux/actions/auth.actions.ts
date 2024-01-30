import type { AuthState, User } from "../reducers/authSlice.slice";
import type { PayloadAction } from "@reduxjs/toolkit";

const loginAction = (state: AuthState, action: PayloadAction<User>) => {
    state.user = action.payload;
    state.isAuthenticated = true;
};

const logoutAction = (state: AuthState) => {
    state.user = null;
    state.isAuthenticated = false;
};

const isLoadingAction = (state: AuthState) => {
    state.isLoading = false;
};

export { loginAction, logoutAction, isLoadingAction };
