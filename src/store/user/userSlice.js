
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PROFILE_URL } from "../../utils/constants";
import axios from "axios";

export const createUser = createAsyncThunk(
    'users/createUser',
    async(payload, thunkAPI)=>{ 
        //чтобы не вводить аватар       
        payload = {...payload, avatar: 'https://i.imgur.com/yhW6Yw1.jpg'}       
        try {
            const res = await axios.post(`${PROFILE_URL}/users`, payload)
            // return res.json          
            return res.data;
        } catch(err) {
            console.log(err)
            return thunkAPI.rejectWithValue('Server error.');
        }
    }
)

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async(payload, thunkAPI)=>{
        try {
            const res = await axios.post(`${PROFILE_URL}/auth/login`, payload);
            
            const login = await axios(`${PROFILE_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${res.data.access_token}`,
                },
            });           

            return login.data;
          
            
        } catch(err) {
            console.log(err) 
            if (err.response.status === 401) return thunkAPI.rejectWithValue('Username or password is incorrect.');         
            return thunkAPI.rejectWithValue('Server error. Try later.');
           
        }
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async(payload, thunkAPI)=>{
        payload = {...payload, avatar: 'https://i.imgur.com/yhW6Yw1.jpg'}   
        try {            

            const res = await axios.put(`${PROFILE_URL}/users/${payload.id}`, payload)
        
            return res.data;
        } catch(err) {
            console.log(err)           
            return thunkAPI.rejectWithValue('Cant\'t update. Server error. Try later.');
            
        }
    }
)

const addCurrentUser = (state, { payload }) => { 
    state.currentUser = payload; 
}


const initialState =   {
    currentUser: null,
    cart: [],
    favourite: [],
    isLoading : false,
    formType: "signup",
    showForm: false,
    error: null,
    update: false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        addItemToCart: (state, { payload }) =>{
            let newCart = [...state.cart];
            const found = state.cart.find(({ id }) => id === payload.id);

            if(found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id 
                    ? { ...item, quantity: payload.quantity || item.quantity+1 } : item; 
                });
            } else {
                newCart.push({ ...payload, quantity: 1 });
            }
            state.cart = newCart;
        },
        removeItemFromCart:  (state, { payload }) => {
            state.cart = state.cart.filter(({ id })=> id !== payload)           
        },
        addToFav: (state, { payload }) =>{           
            state.favourite.push(payload.item);                 
        },
        removeFromFav: (state, { payload }) => {                            
            state.favourite =  state.favourite.filter(({ id })=> id !== payload.id);
        },
                
        toggleForm: (state, { payload }) => {
            state.showForm = payload;
        },
        toggleFormType: (state, { payload }) => {
            state.formType = payload;
        }, 
        loadState: (state, {  payload  } ) => {                     
            state.cart = payload.cart;         
            state.favourite = payload.favourite;
            
        },
        resetState: (state) => {
            state.currentUser =null;
            state.cart = [];
            state.favourite =[];
            state.isLoading = false;
            state.formType = "signup";
            state.showForm = false;
        },
        addUser: (state, { payload }) => {                    
            state.currentUser = payload; 
        }, 
        resetError: (state) =>{
            state.error = null
        },
        resetUpdate: (state) =>{
            state.update = null
        }
    },
    extraReducers: builder=>{        
        builder.addCase(createUser.fulfilled, addCurrentUser),
        builder.addCase(createUser.rejected, (state, { payload })=>{            
            state.error = payload
        } ),

        builder.addCase(loginUser.fulfilled, addCurrentUser),
        builder.addCase(loginUser.rejected, (state, { payload })=>{                      
            state.error = payload
        } ),
        builder.addCase(updateUser.fulfilled, (state, { payload })=>{                       
            state.currentUser = payload; 
            state.update = true;           
        }),
        builder.addCase(updateUser.rejected, (state, { payload })=>{                   
            state.error = payload
        } )
        
    }

})

export const { addItemToCart, toggleForm, toggleFormType, removeItemFromCart, addToFav, removeFromFav, loadState, resetState, addUser, resetError, resetUpdate } = userSlice.actions;

export default userSlice.reducer