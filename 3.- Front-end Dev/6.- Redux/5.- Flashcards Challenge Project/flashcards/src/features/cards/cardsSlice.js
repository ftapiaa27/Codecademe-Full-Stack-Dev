import { createSlice } from "@reduxjs/toolkit";

export const cards = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = { ...action.payload }
        }
    }
});

export const { addCard } = cards.actions;
export const selectCards = (state) => state.cards.cards;
export default cards.reducer;