import { useNavigate } from "react-router-dom";

export default function PlayerCard({ player, renderStars }) {
  const navigate = useNavigate();

  return (
    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg">
      <img
        src={player.foto}
        alt={player.nome}
        className="w-20 h-20 rounded-full mx-auto mb-2"
      />
      <h3 className="text-lg font-bold">{player.nome}</h3>
      <p className="text-sm">
        {player.posicao} | {player.idade} anos
      </p>
      {player.localizacao && (
        <p className="text-xs text-gray-300">{player.localizacao}</p>
      )}
      <div className="flex justify-center my-2">{renderStars(player.estrelas)}</div>
      <button
        onClick={() => navigate('/jogadora', { state: { player } })}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
      >
        Ver Perfil
      </button>
    </div>
  );
}
