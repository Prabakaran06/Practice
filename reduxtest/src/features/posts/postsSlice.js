import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id:'1',
        title:'Learning Redux Toolkit',
        content:'Its easy'
    },
    {
        id:'2',
        title:'Subscribe....',
        content:'Its good'
    }
]
const postsSlice =createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
           reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content,userId)
        {
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }
    }
    }
})
export const selectAllPosts = (state)=>state.posts;
export const {postAdded}=postsSlice.actions
export default postsSlice.reducer;