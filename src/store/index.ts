import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { reducer as shared } from './shared/shared.slice';
import { reducer as tasks } from './tasks/task.slice';
import { api } from './index.api';

const reducers = combineReducers({ shared, tasks, [api.reducerPath]: api.reducer });

export const store = configureStore({
  reducer: reducers,
  devTools: import.meta.env.MODE !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
