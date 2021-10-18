import React from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState ('')

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();         //ESTO EVITA QUE HAGA REFRESH LA PAGINA
        //console.log('Submit hecho')

        if ( inputValue.trim().length > 2 ) {
            setCategories( c => [inputValue, ...c]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={inputValue}
                onChange={(e) => { handleInputChange(e) }}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}

