import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpenModal: false,
}

const modalNFTSlice = createSlice({
    name: 'modalNFT',
    initialState: initialState,
    reducers: {
      openModalNFT(state, action: PayloadAction<any>) {
        state.isOpenModal = true
      },
  
      closeModalNFT(state, action) {
        state.isOpenModal = false
      },
    },
    extraReducers: (builder) => {},
  })
export const {openModalNFT,closeModalNFT} = modalNFTSlice.actions;
export default modalNFTSlice.reducer;

export const selectIsOpenModalNFT = (state:any)=>state.modalNFT.isOpenModal;
