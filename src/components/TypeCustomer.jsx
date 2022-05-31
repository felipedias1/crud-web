import React, {useContext} from "react";
import DataContext from '../context/DataContext';

function TypeCustomer(props) {
  const { setType, type } = props;
  const { edit } = useContext(DataContext);

  return (
    <div className="tipo" onChange={ ({ target }) => setType(target.value) }>
      <label className='tipo'> Tipo </label>
      <input 
        disabled={edit["id"] && true}
        type="radio" 
        value="J" 
        name="tipo"
        checked={type==="J"}
      /> Pessoa Jurídica
      <input
        disabled={edit["id"] && true}
        type="radio" 
        value="F" 
        name="tipo"
        checked={type==="F"}
      /> Pessoa Física
    </div>
  );
}

export default TypeCustomer












