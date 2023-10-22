// import { LocalStorage } from "@/utils/LocalStorage";
// import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";

// import { ISignInParams } from "@/models/redux-models";

// import { authService } from "@/app/api/authService";

// import * as actions from ".";
// import { toastMessage } from "@/app/utils/lib";
// import { addAlert } from "../reducers/alert";

// export const authSignIn = createAsyncThunk(
//   "auth/authSignIn",
//   async (params: ISignInParams, { dispatch, getState, rejectWithValue }) => {
//     try {
//       const response = await authService.signIn(params);
//       if (response?.data) {
//         LocalStorage.setToken(response.data.access_token);
//         dispatch(actions.getProfile(response.data.public_address));
//         // toastMessage("Login successfully");
//         dispatch(
//           addAlert({
//             type: "success",
//             key: 1,
//             message: {
//               status: "success",
//               title: "Login Successfully",
//               description: "",
//             },
//             duration: undefined,
//           })
//         );
//       }
//     } catch (error) {
//       dispatch(
//         addAlert({
//           type: "error",
//           key: 1,
//           message: {
//             status: "error",
//             title: "Login Error",
//             description: "",
//           },
//           duration: undefined,
//         })
//       );
//       // toastMessage("Login error");
//     }
//   }
// );

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
