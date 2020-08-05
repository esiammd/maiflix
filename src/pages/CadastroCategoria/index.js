import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
import { Button } from "../../components/Button";

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

  useEffect(() => {
    const URL = "http://localhost:8080/categorias";
    fetch(URL).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

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
        <Button>Cadastrar</Button>
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
