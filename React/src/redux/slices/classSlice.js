import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClasses = createAsyncThunk(
  'class/fetchClasses',
  async () => {
    const response = await axios.get('/api/classes');
    return response.data;
  }
);

export const enrollClass = createAsyncThunk(
  'class/enrollClass',
  async (classId) => {
    const response = await axios.post(`/api/classes/${classId}/enroll`);
    return response.data;
  }
);

export const withdrawClass = createAsyncThunk(
  'class/withdrawClass',
  async (classId) => {
    const response = await axios.post(`/api/classes/${classId}/withdraw`);
    return response.data;
  }
);

const classSlice = createSlice({
  name: 'class',
  initialState: {
    classes: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(enrollClass.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(enrollClass.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(enrollClass.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(withdrawClass.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(withdrawClass.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(withdrawClass.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default classSlice.reducer;
