import React,{useState} from 'react'
import Input from '../../componentes/Input'
import Botao from '../../componentes/botao'
import * as C from "./estilo"
import { Link,useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Incricao = () => {
    const [email, setEmail] = useState("")
    const [emailConf, setEmailconf] = useState("")
    const [senha, setSenha] = useState("")
    const [erro ,setError] = useState("")
   
    const navigate = useNavigate();
    const { signup } = useAuth()

    const handleSignup = () => {
        if(!email | !emailConf | !senha){
            setError("Preencha todos os campos")
            return;
    }else if(email !== emailConf){
        setError("Os E-mails não conferem")
        return;
    }

    const res = signup(email ,senha)
    if(res){
        setError(res)
        return;
    }

    alert("Usuario cadastrado com sucesso!!")
    navigate("/")
 }
  return (
  <C.Container>
    <C.Label>Sistema de Login</C.Label>
    <C.Content>
        <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e)=>[setEmail(e.target.value), setError("")]}
        />
        <Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e)=>[setEmailconf(e.target.value), setError("")]}
        />
        <Input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}       
        />
        <C.labelErro>{erro}</C.labelErro>
        <Botao Text="Inscreva-se" onClick={handleSignup}/>
        <C.LabelSignin>
            Já tem uma conta?
            <C.Strong>
                <Link to="/">&nbsp;Entrar</Link>
            </C.Strong>
        </C.LabelSignin>
    </C.Content>
  </C.Container>
  );
};

export default Incricao;
