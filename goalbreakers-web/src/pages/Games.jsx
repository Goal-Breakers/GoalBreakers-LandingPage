import { useState } from 'react';
import { useChampionship } from '../contexts/ChampionshipContext';
import { useAuth } from '../contexts/AuthContext';

export default function Games() {
  const { teams, games, addGame, deleteGame } = useChampionship();
  const { isAdmin } = useAuth();
  const [newGame, setNewGame] = useState({ team1: '', team2: '', date: '' });

  const handleAddGame = (e) => {
    e.preventDefault();
    if (newGame.team1 && newGame.team2 && newGame.date) {
      addGame(newGame);
      setNewGame({ team1: '', team2: '', date: '' });
    }
  };

  // Add a sample game if no games exist
  if (games.length === 0 && teams.length >= 2) {
    const sampleGame = {
      id: Date.now(),
      team1: teams[0].id,
      team2: teams[1].id,
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
      score1: null,
      score2: null,
    };
    addGame(sampleGame);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center px-6 py-12 text-white">
      <h1 className="text-4xl font-extrabold text-purple-300 mb-8 uppercase text-center">
        Agendamento de Jogos
      </h1>

      {isAdmin() && (
        <form onSubmit={handleAddGame} className="w-full max-w-4xl bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-300">Adicionar Novo Jogo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Time 1:</label>
              <select
                value={newGame.team1}
                onChange={(e) => setNewGame({ ...newGame, team1: e.target.value })}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Selecione</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>{team.nome}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Time 2:</label>
              <select
                value={newGame.team2}
                onChange={(e) => setNewGame({ ...newGame, team2: e.target.value })}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Selecione</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>{team.nome}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Data:</label>
              <input
                type="datetime-local"
                value={newGame.date}
                onChange={(e) => setNewGame({ ...newGame, date: e.target.value })}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition text-white"
          >
            Adicionar Jogo
          </button>
        </form>
      )}

      <h2 className="text-2xl font-bold text-purple-300 mb-4">Jogos Agendados</h2>
      {games.length === 0 ? (
        <p className="text-gray-300">Nenhum jogo agendado.</p>
      ) : (
        <div className="w-full max-w-4xl space-y-4">
          {games.map((game) => {
            const team1 = teams.find(t => t.id == game.team1);
            const team2 = teams.find(t => t.id == game.team2);
            return (
              <div key={game.id} className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{team1?.nome} vs {team2?.nome}</p>
                  <p className="text-gray-300">{new Date(game.date).toLocaleString()}</p>
                  {game.score1 !== null && game.score2 !== null && (
                    <p className="text-green-300 font-bold">Resultado: {game.score1} - {game.score2}</p>
                  )}
                </div>
                {isAdmin() && (
                  <button
                    onClick={() => deleteGame(game.id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-semibold transition text-white"
                  >
                    Remover
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
