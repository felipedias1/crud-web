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
      <TypeCustomer type={type} setType={setType} />
      { type === "F"? <FormPF /> : <FormPJ /> }
    </div>
  );
}

export default Customers;