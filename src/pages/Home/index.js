import React, { useEffect, useState } from "react";

import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import categoriesRepository from "../../repositories/categories";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault type="home">
      {dadosIniciais.length === 0 && <div>Carregando...</div>}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription={
                  "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
                }
              />

              <Carousel ignoreFirstVideo category={categoria} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
