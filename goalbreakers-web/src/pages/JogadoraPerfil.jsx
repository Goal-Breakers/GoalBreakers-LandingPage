import { useEffect, useState } from "react";

export default function JogadoraPerfil() {
  const [jogadora, setJogadora] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/jogadora.json");
        if (!response.ok) {
          throw new Error(`Erro ao carregar dados: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setJogadora(data);
      } catch (err) {
        setError(err.message);
        console.error("Erro ao buscar dados da jogadora:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Carregando perfil...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Erro ao carregar o perfil da jogadora.</p>
        <p className="text-gray-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen text-gray-400 px-6 py-20">
      {/* Cabeçalho */}
      <div className="flex items-center gap-6">
        <div className="w-32 h-32 rounded-full bg-purple-300 border-4 border-purple-500"></div>
        <div>
          <h1 className="text-4xl font-bold text-purple-700">{jogadora.nome}</h1>
          <p className="text-gray-600 italic">{jogadora.atual}</p>
        </div>
      </div>

      {/* História */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-400">
          História da Jogadora
        </h2>
        <p className="text-justify leading-relaxed text-gray-400">
          {jogadora.historia}
        </p>
      </div>

      {/* Destaques */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-400">
          Destaques 🔥
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {jogadora.destaques.map((d, i) => (
            <div
              key={i}
              className="w-full h-32 bg-gradient-to-tr from-purple-700 to-purple-400 rounded-lg flex items-center justify-center shadow-md"
            >
              <span className="text-gray-400 font-semibold text-lg">{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Talentos e Características */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-400">
            Talentos
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-500">
            {jogadora.talentos.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-400">
            Características
          </h2>
          <ul className="space-y-1 text-gray-500">
            <li><b>Posição:</b> {jogadora.caracteristicas.posicao}</li>
            <li><b>Idade:</b> {jogadora.caracteristicas.idade} anos</li>
            <li><b>Altura:</b> {jogadora.caracteristicas.altura} m</li>
            <li><b>Peso:</b> {jogadora.caracteristicas.peso} kg</li>
          </ul>
        </div>
      </div>

      {/* Conexões */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-3 text-gray-400">
          Conexões
        </h2>
        <div className="flex flex-wrap gap-6 text-gray-500">
          <span className="flex items-center gap-2">
            👥 {jogadora.conexoes.seguidores} Seguidores
          </span>
          <span className="flex items-center gap-2">
            ✅ {jogadora.conexoes.seguindo} Seguindo
          </span>
          <span className="flex items-center gap-2">💬 Mensagens</span>
          <span className="flex items-center gap-2">🔗 Conexões</span>
          <span className="flex items-center gap-2">📌 Minhas inscrições</span>
        </div>
      </div>

      {/* Feed (Vídeos) */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-3 text-gray-400">Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jogadora.feed.map((post, i) => (
            <div
              key={i}
              className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src={post.video}
                title={post.titulo}
                className="w-full h-full absolute inset-0"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                <span className="text-gray-400 font-medium">{post.titulo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
