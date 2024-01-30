import { createSlice } from "@reduxjs/toolkit";
import {
    loginAction,
    logoutAction,
    isLoadingAction,
} from "../actions/auth.actions";

export type User = {
    email: string;
    emailVerified: boolean;
    familyName: string;
    givenNave: string;
    locale: string;
    nickname: string;
    picture: string;
    sub: string;
    updatedAt: string;
};

export type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
};

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: loginAction,
        logout: logoutAction,
        isLoading: isLoadingAction,
    },
});

export const { login, logout, isLoading } = authSlice.actions;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
    state.auth.isAuthenticated;
export const selectIsLoading = (state: { auth: AuthState }) =>
    state.auth.isLoading;
export default authSlice.reducer;
