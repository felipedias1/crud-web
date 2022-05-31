import React, { useState, useContext, useEffect } from "react";
import Table from "../components/Table";
import { getCustomers } from "../api";
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [search, setSearch] = useState("");
  const { allCustomers, setAllCustomers, setEdit, erase } = useContext(DataContext);
  const navigate = useNavigate();
  
  // Buscar todos os clientes
  useEffect(() => {
    getCustomers().then((response) => setAllCustomers(response))
  }, [erase]);

  const resgister = () => {
    setEdit({})
    navigate('/customer')
  }

  return (
    <div className="home-page">
      <div className="search-bar-register">
        <button
          type="button"
          data-testid="button-create-customer"
          onClick={ resgister }
        >
          Cadastrar
        </button>
        <label className='search'>
          Pesquisar 
          {console.log(allCustomers)}
          <input 
            type="text" 
            name="search" 
            value={ search } 
            onChange={ ({ target }) => setSearch(target.value) } 
          />
        </label>
      </div>
      <div className="customer-table">
        <Table search={search}/>
      </div>
    </div>
  );
}

export default Home;