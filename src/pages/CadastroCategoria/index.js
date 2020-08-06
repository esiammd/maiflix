import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
import { Button } from "../../components/Button";

import useForm from "../../hooks/useForm";
import URL_BACKEND from "../../config";

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "",
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`${URL_BACKEND}/categorias`).then(async (respostaDoServidor) => {
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
          clearForm(valoresIniciais);
        }}
      >
        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={valores.titulo}
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
        <Button type="submit">Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Carregando...</div>}

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={categoria.titulo}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
