import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Endereco from "../components/Endereco";
import { createCustomer, updateCustomer } from "../api";
import SelectUf from "./SelectUf";
import DataContext from '../context/DataContext';


function FormPF() {

  // Dados do Endereço
  const { address, edit, setEdit } = useContext(DataContext);
  const { cep, cidade, uf, endereco, numero, complemento, bairro, observacao } = address
  const navigate = useNavigate();

  // Dados da Pessoa Física
  const [nome_completo, setNomeCompleto] = useState(edit["id"] ? edit["nome_razao_social"] : "");
  const [apelido, setApelido] = useState(edit["id"] ? edit["apelido"] : "");
  const [cpf, setCpf] = useState(edit["id"] ? edit["cnpj_cpf"] : "");
  const [data_nascimento, setDataNascimento] = useState(edit["id"] ? edit["data_nascimento"] : "");
  const [estado_civil, setEstadoCivil] = useState(edit["id"] ? edit["estado_civil"] : "");
  const [rg, setRg] = useState(edit["id"] ? edit["rg"] : "");
  const [orgao_emissor, setOrgaoEmissor] = useState(edit["id"] ? edit["orgao_emissor"] : "");
  const [rg_uf, setRgUf] = useState(edit["id"] ? edit["rg_uf"] : "");
  const [cnh, setCnh] = useState(edit["id"] ? edit["cnh"] : "");
  const [seguranca, setSeguranca] = useState(edit["id"] ? edit["seguranca"] : "");
  const [cei, setCei] = useState(edit["id"] ? edit["cei"] : "");
  const [email, setEmail] = useState(edit["id"] ? edit["email"] : "");
  const [telefone, setTelefone] = useState(edit["id"] ? edit["telefone"] : "");
  const [celular, setCelular] = useState(edit["id"] ? edit["celular"] : "");
  

  // Função para montar o payload do cliente e enviar salvar no "Banco de dados"
  const sendCustomerPayload = () => {
    let customerPayload = {
      tipo_pessoa: "F",
      "nome_razao_social": nome_completo,
      apelido,
      "cnpj_cpf": cpf,
      data_nascimento,
      estado_civil,
      rg,
      orgao_emissor,
      rg_uf,
      cnh,
      seguranca,
      cei,
      email,
      telefone,
      celular,
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
    <form>
      <label className='nome-completo'>
        Nome Completo
        <input 
          type="text" 
          name="nome-completo" 
          value={ nome_completo } 
          onChange={ ({ target }) => setNomeCompleto(target.value) } 
        />
      </label>
      <label className='apelido'>
        Apelido
        <input 
          type="text" 
          name="apelido" 
          value={ apelido } 
          onChange={ ({ target }) => setApelido(target.value) } 
        />
      </label>
      <label className='cpf'>
        CPF
        <input 
          type="text" 
          name="cpf" value={ cpf } 
          onChange={ ({ target }) => setCpf(target.value) } 
        />
      </label>
      <label className='data-nascimento'>
        Data de Nascimento
        <input 
          type="text" 
          name="data-nascimento" 
          value={ data_nascimento } 
          onChange={({ target }) => setDataNascimento(target.value) } 
        />
      </label>
      <label 
        className='estado-civil'
        onChange={ ({target}) => setEstadoCivil(target.value) }
        >
        Estado Civil
        <select name="estado-civil" required>
          <option value="s">Solteiro(a)</option>
          <option value="c">Casado(a)</option>
          <option value="d">Divorciado(a)</option>
          <option value="v">Viúvo(a)</option>
        </select>
      </label>
      <label className='rg'>
        RG
        <input 
          type="text" 
          name="rg" value={ rg } 
          onChange={ ({ target }) => setRg(target.value) } 
        />
      </label>
      <label className='orgao-emissor'>
        Órgao Emissor
        <input 
          type="text" 
          name="orgao-emissor" value={ orgao_emissor } 
          onChange={ ({ target }) => setOrgaoEmissor(target.value) } 
        />
      </label>
      <SelectUf rgUf={rg_uf} setRgUf={setRgUf} notAdress={true}/>
      <label className='cnh'>
        Cnh
        <input 
          type="text" 
          name="cnh" value={ cnh } 
          onChange={ ({ target }) => setCnh(target.value) } 
        />
      </label>
      <label className='seguranca'>
        Seguranca
        <input 
          type="text" 
          name="seguranca" value={ seguranca } 
          onChange={ ({ target }) => setSeguranca(target.value) } 
        />
      </label>
      <label className='cei'>
        CEI
        <input 
          type="text" 
          name="cei" value={ cei } 
          onChange={ ({ target }) => setCei(target.value) } 
        />
      </label>
      <label className='email'>
        Email
        <input 
          type="text" 
          name="email" value={ email } 
          onChange={ ({ target }) => setEmail(target.value) } 
        />
      </label>
      <label className='telefone'>
        Telefone
        <input 
          type="text" 
          name="telefone" value={ telefone } 
          onChange={ ({ target }) => setTelefone(target.value) } 
        />
      </label>
      <label className='celular'>
        Celular
        <input 
          type="text" 
          name="celular" value={ celular } 
          onChange={ ({ target }) => setCelular(target.value) } 
        />
      </label>
      <Endereco />
      <button
        type="button"
        data-testid="button-create-customer"
        onClick={ sendCustomerPayload }
      >
        Enviar
      </button>
    </form>
  );
}

export default FormPF;