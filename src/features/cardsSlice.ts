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
            // console.log(action.payload)
            // state = state.filter(card => card.id !== action.payload);
            // console.log(state)

            const index = state.findIndex((todo) => todo.id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;