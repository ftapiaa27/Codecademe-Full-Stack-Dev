// Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Create loadCommentsForArticleId here.
export const loadCommentsForArticleId = createAsyncThunk(
  'comments/loadCommentsForArticleId',
  async(id) => {
    const response = await fetch(`api/articles/${id}/comments`);
    const json = await response.json();
    return json;
  }
  )
// Create postCommentForArticleId here.

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
      // Add initial state properties here.
      byArticleId: {},
      isLoadingComments: false,
      failedToLoadComments: false
    },
    // Add extraReducers here.
    // Deprecated notation
    extraReducers: {
      [loadCommentsForArticleId.pending]: (state, action) => {
        state.isLoadingComments = true;
        state.failedToLoadComments = false;
      },
      [loadCommentsForArticleId.fulfilled]: (state, action) => {
        state.byArticleId[action.payload.articleId].push(action.payload.text);
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
      },
      [loadCommentsForArticleId.rejected]: (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = true;
      }
    }
    // New Notation
    // extraReducers: (builder) => {
    //   builder
    // }
  });
  
  export const selectComments = (state) => state.comments.byArticleId;
  export const isLoadingComments = (state) => state.comments.isLoadingComments;
  export const createCommentIsPending = (state) => state.comments.createCommentIsPending;
  
  export default commentsSlice.reducer;
  