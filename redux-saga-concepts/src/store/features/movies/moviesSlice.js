import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
name: 'movie',
initialState: {
 moviesList : [],
 movie:{}
 
},
reducers: {
    increment: (state, /* action */ ) => {
      state.counter += 1;
   },
}
});