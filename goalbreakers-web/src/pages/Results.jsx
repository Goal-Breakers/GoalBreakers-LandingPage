import { useState } from 'react';
import { useChampionship } from '../contexts/ChampionshipContext';
import { useAuth } from '../contexts/AuthContext';

export default function Results() {
  const { teams, games, updateGameResult } = useChampionship();
  const { isAdmin } = useAuth();
  const [selectedGame, setSelectedGame] = useState(null);
  const [score1, setScore1] = useState('');
  const [score2, setScore2] = useState('');

  const handleUpdateResult = (e) => {
    e.preventDefault();
    if (selectedGame && score1 !== '' && score2 !== '') {
      updateGameResult(selectedGame, parseInt(score1), parseInt(score2));
      setSelectedGame(null);
      setScore1('');
      setScore2('');
    }
  };

  const pendingGames = games.filter(g => g.score1 === null || g.score2 === null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center px-6 py-12 text-white">
      <h1 className="text-4xl font-extrabold text-purple-300 mb-8 uppercase text-center">
        Entrada de Resultados
      </h1>

      {isAdmin() && (
        <form onSubmit={handleUpdateResult} className="w-full max-w-4xl bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-300">Atualizar Resultado</h2>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Selecione o Jogo:</label>
            <select
              value={selectedGame || ''}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Selecione um jogo</option>
              {pendingGames.map((game) => {
                const team1 = teams.find(t => t.id == game.team1);
                const team2 = teams.find(t => t.id == game.team2);
                return (
                  <option key={game.id} value={game.id}>
                    {team1?.nome} vs {team2?.nome} - {new Date(game.date).toLocaleDateString()}
                  </option>
                );
              })}
            </select>
          </div>
          {selectedGame && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Placar Time 1:</label>
                <input
                  type="number"
                  value={score1}
                  onChange={(e) => setScore1(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                  min="0"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Placar Time 2:</label>
                <input
                  type="number"
                  value={score2}
                  onChange={(e) => setScore2(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                  min="0"
                />
              </div>
            </div>
          )}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition text-white"
            disabled={!selectedGame || score1 === '' || score2 === ''}
          >
            Atualizar Resultado
          </button>
        </form>
      )}

      <h2 className="text-2xl font-bold text-purple-300 mb-4">Resultados dos Jogos</h2>
      {games.filter(g => g.score1 !== null && g.score2 !== null).length === 0 ? (
        <p className="text-gray-300">Nenhum resultado registrado.</p>
      ) : (
        <div className="w-full max-w-4xl space-y-4">
          {games.filter(g => g.score1 !== null && g.score2 !== null).map((game) => {
            const team1 = teams.find(t => t.id == game.team1);
            const team2 = teams.find(t => t.id == game.team2);
            return (
              <div key={game.id} className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <p className="text-lg font-semibold">{team1?.nome} vs {team2?.nome}</p>
                <p className="text-gray-300">{new Date(game.date).toLocaleString()}</p>
                <p className="text-green-300 font-bold text-xl">Resultado: {game.score1} - {game.score2}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
