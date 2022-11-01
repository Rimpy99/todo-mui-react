import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from '../features/cardsSlice';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;