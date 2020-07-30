import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria} </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            nomeDaCategoria
          ]);}}>

          <div>
            <label>
              Nome da categoria: 
              <input 
              type="text" 
              value={nomeDaCategoria}
              onChange={function funcaoError(infosDoEvento) {
                setNomeDaCategoria(infosDoEvento.target.value);
              }}
              />
            </label>
          </div>
          <div>
            <label>
              Descrição: 
              <textarea 
              type="text" 
              value={nomeDaCategoria}
              onChange={function funcaoError(infosDoEvento) {
                setNomeDaCategoria(infosDoEvento.target.value);
              }}
              />
            </label>
          </div>
          <div>
            <label>
              Cor: 
              <input 
              type="color" 
              value={nomeDaCategoria}
              onChange={function funcaoError(infosDoEvento) {
                setNomeDaCategoria(infosDoEvento.target.value);
              }}
              />
            </label>
          </div>

          <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map( (categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            )
          } )}
        </ul>

        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;