import React from 'react'
import * as C from "./estilo"

const Botao = ({Text,onClick,Type = "button"}) => {
  return (
  <C.Botao type={Type} onClick={onClick}>
    {Text}
  </C.Botao>
  );
};

export default Botao
