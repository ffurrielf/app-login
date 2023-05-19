import React from 'react'
import Logo from '../img/Logo.png';
import LoginForm from '../components/LoginForm';
import Ecommerce from '../img/eco.png';

const Login = (props) => {
  return (
    <div className='container-geral'>
      <div className='leftDiv'>
        <div className='container-form'>
          <div className='container-logo'>
            <img src={Logo} alt='Logo da Empresa'/>
          </div>
          <h1>Login</h1>
          <div className='Formulário'>
            <LoginForm/>          
          </div>
        </div>
      <div className='rightDiv'>
        <img src={Ecommerce} alt='Imagem'/>

      </div>
      </div>
    </div>
  )
}

export default Login