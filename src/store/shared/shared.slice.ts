import Cookies from 'js-cookie';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISharedType } from './shared.types';

const mode = Cookies.get('mode');

const initialState: ISharedType = {
  mode: mode === 'dark' ? 'dark' : 'light',
  menuLabel: '',
  searchValue: '',
  drawerShowRoute: true,
  drawerShowInfo: true,
  modalShow: false,
};

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    toggleColorMode(state, { payload }: PayloadAction<'dark' | 'light'>) {
      if (payload === 'light') {
        Cookies.set('mode', (state.mode = 'light'));
      } else {
        Cookies.set('mode', (state.mode = 'dark'));
      }
    },
    toggleDrawerRoute(state) {
      state.drawerShowRoute = !state.drawerShowRoute;
    },
    toggleDrawerInfo(state) {
      state.drawerShowInfo = !state.drawerShowInfo;
    },
    toggleModal(state) {
      state.modalShow = !state.modalShow;
    },
    setLabel(state, { payload }: PayloadAction<string>) {
      state.menuLabel = payload;
    },
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
  },
});
export const { reducer, actions } = sharedSlice;
