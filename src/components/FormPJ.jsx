import React, { useState, useContext } from "react";
import Endereco from "../components/Endereco";
import { createCustomer, updateCustomer } from "../api";
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';


function FormPJ() {
  // Dados do Endereço
  const { address, edit, setEdit } = useContext(DataContext);
  const { cep, cidade, uf, endereco, numero, complemento, bairro, observacao } = address
  const navigate = useNavigate();

  // Dados da Empresa
  const [razao_social, setRazaoSocial] = useState(edit["id"] ? edit["nome_razao_social"] : "");
  const [nome_fantasia, setNomeFantasia] = useState(edit["id"] ? edit["nome_fantasia"] : "");
  const [status, setSatus] = useState(edit["id"] ? edit["status"] : true);
  const [cnpj, setCnpj] = useState(edit["id"] ? edit["cnpj_cpf"] : "");
  const [contribuinte, setContribuinte] = useState(edit["id"] ? edit["contribuinte"] : "Não");
  const [inscricao_estadual, setInscEst] = useState(edit["id"] ? edit["inscricao_estadual"] : "");
  const [inscricao_municipal, setInscMun] = useState(edit["id"] ? edit["inscricao_municipal"] : "");
  const [email, setEmail] = useState(edit["id"] ? edit["email"] : "");

  // Dados do Responsavel pelo CNPJ
  const [nome, setNome] = useState(edit["id"] ? edit.responsavel.nome : "");
  const [cpf, setCpf] = useState(edit["id"] ? edit.responsavel.cpf : "");
  const [data_nascimento, setDataNascimento] = useState(edit["id"] ? edit.responsavel.data_nascimento : "");
  const [telefone, setTelefone] = useState(edit["id"] ? edit.responsavel.telefone : "");
  const [celular, setCelular] = useState(edit["id"] ? edit.responsavel.celular : "");
  const [email_responsavel, setEmailResp] = useState(edit["id"] ? edit.responsavel.email_responsavel : "");

  // Função para montar o payload do cliente e enviar salvar no "Banco de dados"
  const sendCustomerPayload = () => {
    let customerPayload = {
      tipo_pessoa: "J",
      "nome_razao_social": razao_social,
      nome_fantasia,
      status,
      "cnpj_cpf": cnpj,
      contribuinte,
      inscricao_estadual,
      inscricao_municipal,
      email,
      "responsavel": {
        nome,
        cpf,
        data_nascimento,
        telefone,
        celular,
        email_responsavel
      },
      "endereco": {
        cep, 
        cidade, 
        uf, 
        endereco, 
        numero, 
        complemento, 
        bairro, 
        observacao
      }
    }
    edit["id"] ? updateCustomer(edit["id"], customerPayload) : createCustomer(customerPayload)
    setEdit({})
    navigate('/');
  } 

  return (
    <form className="form">
      <div className="form-pj-part1">
        <label className='razao-social'>
          Razão Social 
          <input 
            type="text" 
            name="razao-social" 
            value={ razao_social } 
            onChange={ ({ target }) => setRazaoSocial(target.value) } 
          />
        </label>
        <label className='nome-fantasia'>
          Nome Fantasia
          <input 
            type="text" 
            name="nome-fantasia" 
            value={ nome_fantasia } 
            onChange={ ({ target }) => setNomeFantasia(target.value) } 
          />
        </label>
        <label className='status'>
          <input 
            type="checkbox" 
            name="status" required
            checked= {status}
            onChange={ () => status ? setSatus(false) : setSatus(true)}
          />
          Ativo
        </label>
      </div>
      <div className="form-pj-part2">
        <label className='cnpj'>
          CNPJ
          <input 
            type="text" 
            name="cnpj" value={ cnpj } 
            onChange={ ({ target }) => setCnpj(target.value) } 
          />
        </label>
        <div onChange={({ target }) => setContribuinte(target.value) }>
          <label className='contribuinte'> Contribuinte </label>
          <input 
            type="radio" 
            value="Sim" 
            name="gender"
          /> Sim
          <input 
            type="radio" 
            value="Não" 
            name="gender" 
            defaultChecked={true}
          /> Não
        </div>
      </div>
      <div className="form-pj-part3">
        <label className='inscricao-estadual'>
          Insc. Estadual
          <input 
            type="text" 
            name="inscricao-estadual" 
            value={ inscricao_estadual } 
            onChange={ ({ target }) => setInscEst(target.value) } 
          />
        </label>
        <label className='inscricao-municipal'>
          Insc. Municipal
          <input 
            type="text" 
            name="inscricao-municipal" 
            value={inscricao_municipal } 
            onChange={({ target }) => setInscMun(target.value) } 
          />
        </label>
      </div>
      <div className="form-pj-part4">
        <label className='email'>
          Email
          <input 
            type="text" 
            name="email" 
            value={ email } 
            onChange={({ target }) => setEmail(target.value) } 
          />
        </label>
      </div>
      <div className="form-pj-part5">
        <label className='nome'>
          Nome do Responsável
          <input 
            type="text" 
            name="nome" 
            value={ nome } 
            onChange={({ target }) => setNome(target.value) } 
          />
        </label>
      </div>
      <div className="form-pj-part6">
        <label className='cpf'>
          CPF
          <input 
            type="text" 
            name="cpf" 
            value={ cpf } 
            onChange={({ target }) => setCpf(target.value) } 
          />
        </label>
        <label className='data-nascimento'>
          Data. Nasc. Resp
          <input 
            type="date" 
            name="data-nascimento" 
            value={ data_nascimento } 
            onChange={({ target }) => setDataNascimento(target.value) } 
          />
        </label>
      </div>
      <div className="form-pj-part7">
        <label className='telefone'>
          Telefone
          <input 
            type="tel" 
            name="telefone" 
            value={ telefone } 
            onChange={({ target }) => setTelefone(target.value) } 
          />
        </label>
        <label className='celular'>
          Celular
          <input 
            type="number" 
            name="celular" 
            value={ celular } 
            onChange={({ target }) => setCelular(target.value) } 
          />
        </label>
        <label className='email_responsavel'>
          Email
          <input 
            type="email"
            name="email_responsavel" 
            value={ email_responsavel } 
            onChange={({ target }) => setEmailResp(target.value) } 
          />
        </label>
      </div>
      <Endereco />
      <div className="buttons">
        <button
          id="Enviar"
          type="submit"
          data-testid="button-create-customer"
          onClick={ sendCustomerPayload }
        >
          Enviar
        </button>
        <button
          id="Cancelar"
          type="button"
          data-testid="button-create-customer"
          onClick={ () => navigate('/') }
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default FormPJ;