import React, { useState } from "react";
import PropTypes from "prop-types";
import DataContext from "./DataContext";

function DataProvider({ children }) {
  // Criando os estados do componente Provider
  const [address, setAddress] = useState({});
  const [allCustomers, setAllCustomers] = useState([]);
  const [edit, setEdit] = useState({});
  const [columns, setColumns] = useState([
    "ID",
    "Nome/Razão Social",
    "CPF/CNPJ",
    "Email",
    "Tel",
    "cel",
  ]);

  const contextValue = {
    address,
    setAddress,
    allCustomers,
    setAllCustomers,
    columns,
    setColumns,
    edit,
    setEdit,
  };

  return (
    <div>
      <DataContext.Provider value={contextValue}>
        {children}
      </DataContext.Provider>
    </div>
  );
}

DataProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default DataProvider;
