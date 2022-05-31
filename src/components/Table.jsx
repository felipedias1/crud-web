import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { deleteCustomer, getCustomersById } from "../api/index"
import DataContext from '../context/DataContext';
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"

function Table(props) {

  const { columns, allCustomers, setEdit, erase, setErase } = useContext(DataContext);
  const { search } = props;
  const navigate = useNavigate();
 
  const editCustomer = async (id) => {
    const customer = await getCustomersById(id);
    setEdit({})
    setEdit(customer)
    navigate('/customer');
  }

  const customerDelete = async (id) => {
    await deleteCustomer(id)
    erase? setErase(false) : setErase(true)
  }

  return (
    allCustomers && 
    (<table>
      <thead>
        <tr>
          {columns.map((column) => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {allCustomers
          .filter(i => i["nome_razao_social"].toLowerCase().includes(search.toLowerCase()))
          .map((customer) => (
            <tr key={customer["id"]}>
              <td>{customer["id"]}</td>
              <td>{customer["nome_razao_social"]}</td>
              <td>{customer["cnpj_cpf"]}</td>
              <td>{customer["email"]}</td>
              <td>{customer["telefone"]}</td>
              <td>{customer["celular"]}</td>
              <td>
                <button
                type="button"
                onClick={ () => editCustomer(customer["id"])} 
                >
                  <img src={Edit} alt="edit" height ="20" width="20" />
                </button>
                <button
                 type="button"
                 onClick={ () => customerDelete(customer["id"]) } 
                >
                  <img src={Delete} alt="delete" height ="20" width="20" />
                </button>
              </td>
            </tr>)
        )}
      </tbody>
    </table>)
  );
}

export default Table;