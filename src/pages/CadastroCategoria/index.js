import React, { useState } from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [valores, setValores] = useState(valoresIniciais);

  function handleValue(chave, valor) {
    //chave: nome, descricao, cor
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    handleValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, valores]);
          setValores(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
