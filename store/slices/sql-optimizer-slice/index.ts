import { createSlice } from '@reduxjs/toolkit';
import { getDatabaseData } from '@store/actions/sql-optimizer-actions';


const initialState = {
  databaseTables: [],
  databaseSchema:'',
  isLoading: true,
};

const userDatabaseSlice = createSlice({
  name: 'User Database',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getDatabaseData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDatabaseData.fulfilled, (state, action) => {
      state.databaseTables = action.payload.tables;
      state.databaseSchema = action.payload.schema;
      state.isLoading = false;
    });
    builder.addCase(getDatabaseData.rejected, (state, action) => {
      state.databaseTables = [];
      state.databaseSchema = '';
      state.isLoading = false;
    });
  },
});

export default userDatabaseSlice.reducer;