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
    <section className='forms'>
      <form onSubmit={handleSubmit}>
        <div className='user'>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            placeholder='Digite seu email'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='pass'>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder='Digite sua senha'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">ENTRAR</button>
      </form>
    </section>
  );
};

export default LoginForm;
