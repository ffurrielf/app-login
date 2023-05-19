import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça a validação ou envie os dados para o servidor aqui
    console.log('Username:', username);
    console.log('Password:', password);
    // Limpe os campos após enviar o formulário
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container col-lg-8 ">
      <form onSubmit={handleSubmit} className=''>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder='Digite seu email'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder='Digite sua senha'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">ENTRAR</button>
      </form>
    </div>
  );
};

export default LoginForm;
