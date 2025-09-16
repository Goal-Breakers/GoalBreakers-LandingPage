import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Cadastrar () {
  const { Cadastrar } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    const success = login(username, password);
    if (success) {
      setError('');
      navigate('/');
    } else {
      setError('Nome de usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <form onSubmit={handleSubmit} className="bg-black/70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Criar Conta</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-semibold">Nome Completo</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-semibold">CPF ou RG</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-semibold">Número de Telefone</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-semibold">Endereço de E-mail</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-semibold">Nome de Usuário</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-semibold">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold transition"
        >
          Log In
        </button>

        <p className='pt-6'>Já tem uma conta?</p>
        <Link to="/Login"><strong><p>Login</p></strong></Link> 

      </form>
    </div>
  );
}
