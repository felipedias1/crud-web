import React, {useState, useContext} from "react";
import FormPJ from "../components/FormPJ";
import FormPF from "../components/FormPF";
import TypeCustomer from "../components/TypeCustomer"
import DataContext from '../context/DataContext';

function Customers() {

  const { edit } = useContext(DataContext);

  const [type, setType] = useState(edit["id"] ? edit["tipo_pessoa"] : "J");

  return (
    <div>
      <h1 className="header">Cliente</h1>
      <h2>{edit["id"]? "Editar Cliente" : "Adicionar Novo Cliente" }</h2>
      <TypeCustomer type={type} setType={setType} />
      { type === "F"? <FormPF /> : <FormPJ /> }
    </div>
  );
}

export default Customers;