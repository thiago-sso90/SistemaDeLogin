import React, { useState } from 'react'
import Input from '../../componentes/Input'
import Botao from '../../componentes/botao'
import * as C from "./estilo"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const Entrar = () => {
  const {signin} = useAuth();
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [error, setError] = useState("");

const handleLogin = () => {
  if(!email | !senha){
    setError("Preencha todos os campos")
    return;
  }
  const res = signin(email,senha);
  if (res){
    setError(res);
    return;
  }
  navigate("/home");
}
  return (
   <C.Container>
    <C.Label>Sistema De Login</C.Label>
    <C.Content>
      <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
      />
      <C.labelErro>{error}</C.labelErro>
      <Botao Text="Entrar" onClick={handleLogin}/>
      <C.LabelSignup>
         Não tem uma conta?
        <C.Strong>
         <Link to="/inscricao">&nbsp;Registre-se</Link>
        </C.Strong>
      </C.LabelSignup>
    </C.Content>
   </C.Container>
  );
};

export default Entrar;
