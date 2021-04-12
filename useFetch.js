import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {

        return () => {
            isMounted.current = false;
            console.log('componente desmontado');
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        //PROMISES
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.log('setState no se llamó');
                }

            })
            .catch(()=>{
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

        //ASYNG AWAIT    
        // const realizarPeticion = async()=>{
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     //console.log(data);
        //     setState({
        //         data: data, loading: false, error: null
        //     }); 
        // }
        // realizarPeticion();    
    }, [url])


    return state;


}
