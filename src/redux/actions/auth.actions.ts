import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { authService } from "@/axios/api/authService";


export const authRegister = createAsyncThunk(
    "auth/authRegister",
    async (params: any, { dispatch, getState, rejectWithValue }) => {
      const response = await authService.register(params);
      return response;
    }
  );

export const authSignIn = createAsyncThunk(
  "auth/authSignIn",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    const response = await authService.signIn(params);
    return response;
  }
);

export const authVerify = createAsyncThunk(
  "auth/authVerify",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    const response = await authService.verifyAccount(params);
    return response;
  }
);

export const authRegenerateOTP = createAsyncThunk(
  "auth/authRegenerateOTP",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    const response = await authService.regenerateOTP(params);
    return response;
  }
);

// export const authLoginGoogle = createAsyncThunk(
//   "auth/authLoginGoogle",
//   async (params: any, { dispatch, getState, rejectWithValue }) => {
//     try {
//       const response = await authService.loginGoogle(params);
//       const { data } = response;

//       if (data && data.access_token) {
//         LocalStorage.setToken(data.access_token);
//       }
//       await dispatch(actions.getProfile({}));
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );
// export const authLogoutGoogle = createAsyncThunk(
//   "auth/authLogoutGoogle",
//   async (props: any, { dispatch, getState }) => {
//     dispatch(authLogout());
//     LocalStorage.clearToken();
//   }
// );
// export const authLogout =
//   () => async (dispatch: (arg0: { type: string }) => void, getState: any) => {
//     dispatch({ type: "AUTH_DESTROY_SESSION" });
//     localStorage.clear();
//   };
