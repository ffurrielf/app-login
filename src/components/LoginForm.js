import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL_LOGIN, {
        username,
        password
      });
      
      if (response.data.success) {
        localStorage.setItem('token', response.data.data.token);
        window.location.href = process.env.PUBLIC_URL + "/produtos";
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Erro na comunicação com o servidor");
    }
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
        {error && <p className="alert alert-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">ENTRAR</button>
      </form>
    </div>
  );
};

export default LoginForm;





// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Faça a validação ou envie os dados para o servidor aqui
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // Limpe os campos após enviar o formulário
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <div className="container col-lg-8 ">
//       <form onSubmit={handleSubmit} className=''>
//         <div className="form-group">
//           <label htmlFor="username">Usuário:</label>
//           <input
//             type="text"
//             id="username"
//             className="form-control"
//             placeholder='Digite seu email'
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Senha:</label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             placeholder='Digite sua senha'
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">ENTRAR</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
