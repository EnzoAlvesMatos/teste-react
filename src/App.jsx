import "./app.css";
import Botao from "./componente/Botao/Botao";
import CaixaSenha from "./componente/CaixaSenha/CaixaSenha";
import CaixaTexto from "./componente/CaixaTexto/CaixaTexto";
import Check from "./componente/Check/Check";
export default function app(){
  return(
    <>
      <main>
        <p>Please enter your detals</p>
        <h1>Welcome Back</h1>
        <br />
        <CaixaTexto nome="Email adress"/>
        <CaixaSenha nome="Password"/>
        <Check nome="Remembar for 30 days" nome2="Forgot password"/>
        <Botao background="" Color="white"> Sign up</Botao>
        <Botao background="white"><img className="emoji" src="../public/google.png"  alt="" /> Sign in with Google  </Botao>
        <p className="pp">Don't have an accout? <a className="aa" href="#">Sign up</a></p>
      </main>
   
    </>
  )
}