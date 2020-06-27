import axios from 'axios';



const initialState={
    music:[]
}

const GET_MUSIC='GET_MUSIC'

export default function musicReducer(state=initialState, action){
    switch(action.type){
        case `${GET_MUSIC}_FULFILLED`:
        return {...state,music:action.payload}
        default:
            return state;
    }
}

export function getMusic(){
    return{
        type: GET_MUSIC,
        payload: axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
            return res.data
        })
    }
}