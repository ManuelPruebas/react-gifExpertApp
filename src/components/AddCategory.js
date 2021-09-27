import React, {useState} from 'react';
import propTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {   //---- me traigo el props desestructurado, solo necesito setcategories de App.js

    const [inputValue, setInputValue] = useState('');  // ---- si no pongo nada, me da un warning : undefined

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();     // --- para evitar que se vuelva a cargar la página
        
        if (inputValue.trim().length > 2 ) {   // --- para prevenir que entre un valor vacío 
            setCategories( cats => [ inputValue, ...cats ]);  // -- le casco el valor de inputValue, antes de cats para que se muestre al inicio
            setInputValue(''); // -- lo vacío para prevenir que no entre un valor repetido
        }
        
    }
        // --- con el elemnto form conseguimos realizar un posteo, pero no quiero que se vuelva a cargar la página
    return (
        <form onSubmit={handleSubmit}>  
            <input
                type="text"
                value = {inputValue}
                onChange = { handleInputChange }
            />
            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
