import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from '../model/article';
import { initialState } from './article-init';
import { findAllArticles, findArticleById } from './article-service';

const articleThunks = [findAllArticles]

const status = {
    pending : 'pending',
    fulfilled: 'fulfilled',
    rejected : 'rejected'
}

// const handlePending = (state:any) => {
    
// }
// const handleFulfilled = (state:any, {payload}: any) => {
//     state.array = payload
//     console.log(state.array)
// }
// const handleRejected = (state:any) => {
    
// }

export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled, (state:any, {payload}:any)=>{state.array=payload})
        .addCase(findArticleById.fulfilled, (state:any, {payload}:any)=>{state.json=payload})
    }
})

export const getAllArticles = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.article.array))
    return state.article.array;
} //result 지워버리면 length 오류는 없어짐.

export const getArticleById = (state:any) => {
    return state.article.json;
}

export const {} = articleSlice.actions

export default articleSlice.reducer;