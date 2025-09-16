import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Cadastrar () {
  const { Cadastrar } = useAuth();
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [ddd, setDdd] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nomeCompleto.trim() || !cpf.trim() || !ddd.trim() || !telefone.trim() || !email.trim() || !nomeUsuario.trim() || !senha.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (!ddd.includes('+')) {
      console.log('Código de país deve incluir +');
      setError('Código de país inválido.');
      return;
    }
    const phoneDigits = telefone.replace(/\s/g, '');
    if (phoneDigits.length !== 11 || isNaN(phoneDigits)) {
      console.log('Número de telefone deve ter exatamente 11 dígitos.');
      setError('Número de telefone inválido.');
      return;
    }
    console.log('Email entered:', email);
    if (!email.includes('@')) {
      console.log('Email deve conter @.');
      setError('Email inválido.');
      return;
    }
    const success = Cadastrar({ nomeCompleto, cpf, ddd, telefone, email, nomeUsuario, senha });
    if (success) {
      setError('');
      alert('Conta criada com sucesso!');
      navigate('/');
    } else {
      setError('Erro ao criar conta. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <form onSubmit={handleSubmit} className="bg-black/70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Criar Conta</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="nomeCompleto" className="block mb-1 font-semibold">Nome Completo</label>
          <input
            id="nomeCompleto"
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cpf" className="block mb-1 font-semibold">CPF ou RG</label>
          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex space-x-2">
            <div className="w-20">
              <label htmlFor="ddd" className="block mb-1 font-semibold">Código</label>
              <input
                id="ddd"
                type="text"
                value={ddd}
                onChange={(e) => setDdd(e.target.value)}
                className="w-full px-2 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                required
                placeholder="+55"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="telefone" className="block mb-1 font-semibold">Número de Telefone</label>
              <input
                id="telefone"
                type="number"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">Endereço de E-mail</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nomeUsuario" className="block mb-1 font-semibold">Nome de Usuário</label>
          <input
            id="nomeUsuario"
            type="text"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="senha" className="block mb-1 font-semibold">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold transition cursor-pointer"
        >
          Criar Conta
        </button>

        <p className='pt-6'>Já tem uma conta?</p>
        <Link to="/Login"><strong><p>Login</p></strong></Link> 

      </form>
    </div>
  );
}
