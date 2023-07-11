import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";
export const addQuizToTopic = (payload) => {
    return (dispatch) => {
        dispatch(quizzes.actions.addQuiz(payload));
        dispatch(addQuizId({topicId: payload.topicId, quizId: payload.id}))
    }
}

export const quizzes = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            // let quizId = Object.values(state.quizzes).length;
            state.quizzes[action.payload.id] = {...action.payload}
        }
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzes.actions;
export default quizzes.reducer;