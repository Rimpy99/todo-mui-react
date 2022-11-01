import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = {
    id: number
    title: string
    desc: string
    isCompleted: boolean
}

const initialState: Card[] = [];

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload);
        },
        removeCard: (state, action: PayloadAction<number>) => {
            state.filter(card => card.id !== action.payload);
        }
    }
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;