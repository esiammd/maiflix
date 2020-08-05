import { useState } from "react";

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function handleValue(chave, valor) {
    //chave: titulo, descricao, cor
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    handleValue(event.target.getAttribute("name"), event.target.value);
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}

export default useForm;
