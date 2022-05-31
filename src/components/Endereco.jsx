import React, { useState, useContext, useEffect } from "react";
import SelectUf from "../components/SelectUf";
import DataContext from '../context/DataContext';

function Form() {
  // Dados do Endereço
  const { edit, setAddress} = useContext(DataContext);

  const [cep, setCep] = useState(edit["id"] ? edit.endereco["cep"] : "");
  const [cidade, setCidade] = useState(edit["id"] ? edit.endereco["cidade"] : "");
  const [uf, setUf] = useState(edit["id"] ? edit.endereco["uf"] : "");
  const [endereco, setEndereco] = useState(edit["id"] ? edit.endereco["endereco"] : "");
  const [numero, setNumero] = useState(edit["id"] ? edit.endereco["numero"] : "");
  const [complemento, setComplemento] = useState(edit["id"] ? edit.endereco["complemento"] : "");
  const [bairro, setBairro] = useState(edit["id"] ? edit.endereco["bairro"] : "");
  const [observacao, setObservacao] = useState(edit["id"] ? edit.endereco["observacao"] : "");
  
  useEffect(() => {
    const data = {
      cep, cidade, uf, endereco, numero, complemento, bairro, observacao
    }
    setAddress(data)
  }, [cep, cidade, uf, endereco, numero, complemento, bairro, observacao]);

  return (
    <form>
      <div className="form-end-part1">
        <label className='cep'>
          CEP
          <input 
            type="text" 
            name="cep" 
            value={ cep } 
            onChange={ (e) => setCep(e.target.value) }
            required 
          />
        </label>
        <label className='cep'>
          Cidade
          <input type="text" name="cidade" value={ cidade } onChange={ (e) => setCidade(e.target.value) } />
        </label>
        <SelectUf uf={uf} setUf={setUf}/>
      </div>
      <div className="form-end-part2">
        <label className='endereco'>
          Endereço
          <input type="text" name="endereco" value={ endereco } onChange={ (e) => setEndereco(e.target.value) } />
        </label>
        <label className='numero'>
          Numero
          <input type="text" name="numero" value={ numero } onChange={ (e) => setNumero(e.target.value) } />
        </label>
      </div>
      <div className="form-end-part3">
        <label className='complemento'>
          Complemento
          <input type="text" name="complemento" value={ complemento } onChange={ (e) => setComplemento(e.target.value) } />
        </label>
        <label className='bairro'>
          Bairro
          <input type="text" name="bairro" value={ bairro } onChange={ (e) => setBairro(e.target.value) } />
        </label>
      </div>
      <div className="form-end-part4">
        <label className='observacao'>
          Observacao
          <textarea type="textarea" name="observacao" value={ observacao } onChange={ (e) => setObservacao(e.target.value) } />
        </label>
      </div>
    </form>
  );
}

export default Form;