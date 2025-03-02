import React from 'react'
import { useReducer } from 'react'

const initialState = 0;

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state,action){
        if(action.type==='Increment'){
            return state + 1;
        }else if(action.type==="Decrement"){
            return state - 1;
        }else if(
            action.type==="Reset"){
                return  0;
            }else{
                return state;
            }
    }

    // Dispatch Function
    function handleIncrement(){
        dispatch({type:"Increment"})
    }

    function handleDcerement(){
        dispatch({type:"Decrement"})
    }

    function Reset(){
        dispatch({type:"Reset"})
    }

  return (
    <>
    <h1>Learning Use Reducer Hook in React</h1>
    <h2>Count : {state} </h2>

    <button onClick={handleIncrement}>Plus</button>
    <button onClick={handleDcerement}>Minus</button>
    <button onClick={Reset}>Reset</button>


    </>
  )
}

export default Counter