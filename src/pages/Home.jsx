import React, { useState, useContext, useEffect } from "react";
import Table from "../components/Table";
import { getCustomers } from "../api";
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [search, setSearch] = useState("");
  const { allCustomers, setAllCustomers, edit, setEdit } = useContext(DataContext);
  const navigate = useNavigate();
  
  // Buscar todos os clientes
  useEffect(() => {
    getCustomers().then((response) => setAllCustomers(response))
  }, [allCustomers]);

  const resgister = () => {
    setEdit({})
    navigate('/customer')
  }

  return (
    <div>
      <button
        type="button"
        data-testid="button-create-customer"
        onClick={ resgister }
      >
        Cadastrar
      </button>
      <label className='search'>
        Pesquisar 
        <input 
          type="text" 
          name="search" 
          value={ search } 
          onChange={ ({ target }) => setSearch(target.value) } 
        />
      </label>
      <Table search={search}/>
    </div>
  );
}

export default Home;