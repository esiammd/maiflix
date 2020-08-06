import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
import { Button } from "../../components/Button";
import useForm from "../../hooks/useForm";
import videosRepository from "../../repositories/videos";
import categoriasRepository from "../../repositories/categorias";

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriaTitulo = categorias.map(({ titulo }) => titulo);

  const valoresIniciais = {
    titulo: "",
    url: "",
    categoria: "",
  };

  const { valores, handleChange } = useForm(valoresIniciais);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === valores.categoria;
          });

          videosRepository
            .create({
              titulo: valores.titulo,
              url: valores.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              console.log(valores);
              history.push("/");
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoriaTitulo}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
