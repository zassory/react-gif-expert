import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  
  //Tiene otro state
  const [ inputValue , setInputValue ] = useState('');

  //La funcion que añado en mi input
  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory( inputValue.trim() );//esta es la funcion que le pase como props
    setInputValue('');//Y al final limpia el estado
    //Pero solo el estado del inputValue
  }

  return (    
    <form onSubmit={ onSubmit }>
        <input
            type="text"            
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}