import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async(_, thunkAPI)=>{
        try{
            const res = await axios(`${BASE_URL}/categories`);              
            return res.data;
        }catch(err){
            return thunkAPI.rejectWithValue(err);
        }
    }
)

export const categorySlice = createSlice({
    name:'categories',
    initialState: {
        list:[],
        isLoading : false,
    },
    reducers: {},
    extraReducers: builder=>{
        builder.addCase(getCategories.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(getCategories.fulfilled, (state, {payload})=>{           
            state.list = payload;            
            state.isLoading = false;            
            
            //исправляю косяк API (некоторые url картинок некорректны)            
            state.list.forEach(item=>{
                //проверка расширений картинок
                const data = (item.image);
                if(!data.match(/\.(jpeg|jpg|gif|png)$/)){
                //удаляем этот товар из массива
                    state.list=state.list.filter((el)=>el.id!==item.id)                    
                    // console.log(item.image);                              
                } 
                // console.log(state.list);
            })        
           
        })
        builder.addCase(getCategories.rejected, (state)=>{         
            state.isLoading = false;
        })
    }

})


export default categorySlice.reducer
