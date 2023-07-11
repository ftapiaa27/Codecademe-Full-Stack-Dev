import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            // let topicId = Object.keys(state.topics).length;
            state.topics[action.payload.id] = {...action.payload, quizIds: []}
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    },
    extraReducers: {}

})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topics.actions;
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