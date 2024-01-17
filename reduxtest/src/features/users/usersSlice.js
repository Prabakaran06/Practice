import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id:'0',name:"Prabu"},
    {id:'1',name:"Raja"},
    {id:'2',name:"king"}
]
const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers =(state)=>state.users;
export default usersSlice.reducer