import React from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';


export const FormWithCustomHook = () => {
    
    //recibimos lo que retorna el customHook -> useForm
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    //desestructuración
    const { name, email, password } = formValues;


    const handleSumit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    const pulsar = (e) => {
        //console.log(e.target.name);
        if (e.target.name === 'guardar') {
            console.log('Boton Guardar')
        }else{
            console.log('Boton Actualizar')
        }
    }

    return (
        <form onSubmit={handleSumit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name}
                    onChange={handleInputChange} />
            </div>
            <br />
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={email}
                    onChange={handleInputChange} />
            </div>
            <br />
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="****" value={password}
                    onChange={handleInputChange} />
            </div>
            <br />
            <button type="submit" onClick={pulsar} className="btn btn-primary" name="guardar" >Guardar</button>
            <button type="submit" onClick={pulsar} className="btn btn-success" name="actualizar" >Actualizar</button>
        </form>
    )
}
