
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";
import axios from "axios";
import { getData, saveData } from '@/utils/storage';

const related = getData('related') !== null ? getData('related') : []

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async(_, thunkAPI)=>{
        try{
            
            const res = await axios(`${BASE_URL}/products`);             
            return res.data
           
        }catch(err){
            
            return thunkAPI.rejectWithValue(err);
        }
    }
)

export const productsSlice = createSlice({
    name:'products',
    initialState: {
        list: [],
        filtered: [],
        related,
        isLoading : false,
        productsByCat: [],
    },
    reducers: {
        filterByPrice: (state, { payload }) => {
            state.filtered = state.list.filter(({ price }) => price < payload )
        },
        getRelatedProducts: (state, { payload }) => {                       
            const list = state.list.filter(({ category: { id } }) => id === payload )            
            state.related = shuffle(list);
            saveData ('related', state.related)                       
        }
    },
    extraReducers: builder=>{
        builder.addCase(getProducts.pending, (state)=>{            
            state.isLoading = true;            
        })
        builder.addCase(getProducts.fulfilled, (state, {payload})=>{          
            state.list = payload;
            state.isLoading = false;        
        })
        builder.addCase(getProducts.rejected, (state)=>{         
            state.isLoading = false;
        })          
    }
})

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;
export default productsSlice.reducer
