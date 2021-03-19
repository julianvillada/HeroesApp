import { useState } from "react"

export const useForm = (initialState = {} ) => {
    //this useForm reciveb object (initialState)
    
    const [value, setValue] = useState(initialState);


    //Reset Form Export reset to array
    const reset = () => {
        setValue( initialState );
    }


    const handleInputChange = ({ target }) =>{
        setValue({
            ...value,
            [ target.name]: target.value 
        })
    }
    
    return [ value, handleInputChange, reset ];
}