import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {...action.payload, quizIds: []}
        }
    },
    extraReducers: {}

})

export const selectTopics = (state) => state.topics;
export const { addTopic } = topics.actions;
export default topics.reducer;
/*
    TOPICS SLICE TEMPLATE
topics: {
    topics: {
      '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: ['456']
      }
    }
  }
 */