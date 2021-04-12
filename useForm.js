import {useState} from 'react';

export const useForm = ( initialState = {} ) => {
    const [values , setvalues] = useState(initialState);
    const rest =()=>{
        setvalues(initialState);
    }
    const handleInputChange = ({target})=>{
        //console.log(e.target.value);
        setvalues({
            ...values,
            [target.name]:target.value
        })
    }
    return [values, handleInputChange,rest];
}
