import { useState } from 'react';
import { CounterState } from './CounterType.type';
/* 
    ¿Which is the useState?

        the useState is a function which accept inside a variable allow us save the state of the component, this accept
        a initual value for this variable, and return a array with two elements, the value of variable and the function 
        for update this. 


        const [state = setState ] = useState(default)

        const [state = setState ] = useState({
            default1,
            default2,
            default3,
    })
*/

export const CounterApp = () => {

    const [ state, setCounter] = useState<CounterState>({/* 
                                                we can recaive the state of multiples propierties or objects, we don't limit a only one
                                            */
        counter1: 10,  
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

  return (
    <>
        <h1>Counter1: { counter1 }</h1>
        <h1>Counter2: { counter2 }</h1>
        <h1>Counter3: { counter3 }</h1>

        <hr />

        <button 
            className="btn" 
            onClick={ 
                () => setCounter({/*
                                    we use spread operator, passing first the parameters, in this case the array for persist the information,
                                    and after the variable that we want update or add.
                                */
                    ...state, 
                    counter1: counter1 + 1,
                })}>
                 +1
        </button>

        <button 
            className="btn" 
            onClick={ 
                () => setCounter({
                    ...state,
                    counter1: counter1 + -1,
                })}>
                 -1
        </button>


        <button 
            className="btn" 
            onClick={ 
                () => setCounter({
                    ...state,
                    counter1: 0,
                })}>
                 reset
        </button>
    
    </>
  )
}
