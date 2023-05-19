import React from 'react'
import Logo from '../img/Logo.png';
import LoginForm from '../components/LoginForm';
import Ecommerce from '../img/eco.png';

const Login = (props) => {
  return (
    <div className='container container  mw-100 vh-100'>
      <div className='row'>
        <div className='col-lg-6 bg-light vh-100'>
          <div className='container col-8 col-sm-12 '>
            <div className='row'>
              <div className='col text-center mt-5 mb-5'>
                <img src={Logo} alt='Logo da Empresa' className='img-fluid logo-style '/>
              </div>
            </div>
            <h1 className='text-center'>Login</h1>
            <div className='row'>
              <LoginForm/>
            </div>
          </div>
        </div>
        <div className='col-lg-6 ilustration-div'>
          <img src={Ecommerce} alt='Imagem' className='img-fluid illustration'/>
        </div>
      </div>
    </div>
  )
}

export default Login
