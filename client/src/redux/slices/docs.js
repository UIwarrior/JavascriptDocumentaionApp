// slices/docsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Import your existing axios instance
import axiosInstance from '../../core/api';

// Async thunk for fetching documents (replaces docsFetchData)
export const docsFetchData = createAsyncThunk('docs/docsFetchData', async (_, { rejectWithValue }) => {
  try {
    console.log('thunk fetching data');
    const response = await axiosInstance.get('/getdocument');
    console.log(response);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const docsSlice = createSlice({
  name: 'docs',
  initialState: {
    data: [],
    isLoading: false,
    hasErrored: false,
    error: null,
  },
  reducers: {
    // Synchronous actions (if you need any)
    clearDocs: (state) => {
      state.data = [];
      state.hasErrored = false;
      state.error = null;
    },
    clearError: (state) => {
      state.hasErrored = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(docsFetchData.pending, (state) => {
        state.isLoading = true;
        state.hasErrored = false;
        state.error = null;
      })
      .addCase(docsFetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasErrored = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(docsFetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasErrored = true;
        state.error = action.payload;
      });
  },
});

// Export actions
export const { clearDocs, clearError } = docsSlice.actions;

// Export selectors
export const selectDocsData = (state) => state.docs.data;
export const selectDocsLoading = (state) => state.docs.isLoading;
export const selectDocsError = (state) => state.docs.hasErrored;
export const selectDocsErrorMessage = (state) => state.docs.error;

// Export reducer
export default docsSlice.reducer;
