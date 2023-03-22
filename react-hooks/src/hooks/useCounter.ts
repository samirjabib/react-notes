import { useState } from "react"

/*
    Counter Custom Hook

*/

export const useCounter = ( initialValue : number  ) => {
                                                    /*
                                                        we will receive for paremeters the initial value  with wich 
                                                        set the function
                                                    */

    const [ counter, setCounter ] = useState( initialValue )

    const increment = ( value = 1 ) => { //assign a new num default to value in case in the not to have nothing in the argument of functions.
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        if ( counter === 0 ) return;

        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}

