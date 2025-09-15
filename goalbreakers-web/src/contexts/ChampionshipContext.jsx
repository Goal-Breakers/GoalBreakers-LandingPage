import { createContext, useContext, useState, useEffect } from 'react';

const ChampionshipContext = createContext();

export const useChampionship = () => useContext(ChampionshipContext);

export const ChampionshipProvider = ({ children }) => {
  const [teams, setTeams] = useState(() => {
    const saved = localStorage.getItem('championshipTeams');
    return saved ? JSON.parse(saved) : [];
  });

  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem('championshipGames');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('championshipTeams', JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    localStorage.setItem('championshipGames', JSON.stringify(games));
  }, [games]);

  const addTeam = (team) => {
    setTeams(prev => [...prev, { ...team, id: Date.now() }]);
  };

  const updateTeam = (id, updatedTeam) => {
    setTeams(prev => prev.map(t => t.id === id ? { ...t, ...updatedTeam } : t));
  };

  const deleteTeam = (id) => {
    setTeams(prev => prev.filter(t => t.id !== id));
  };

  const addGame = (game) => {
    setGames(prev => [...prev, { ...game, id: Date.now(), score1: null, score2: null }]);
  };

  const updateGameResult = (id, score1, score2) => {
    setGames(prev => prev.map(g => g.id === id ? { ...g, score1, score2 } : g));
  };

  const deleteGame = (id) => {
    setGames(prev => prev.filter(g => g.id !== id));
  };

  return (
    <ChampionshipContext.Provider value={{
      teams,
      games,
      addTeam,
      updateTeam,
      deleteTeam,
      addGame,
      updateGameResult,
      deleteGame
    }}>
      {children}
    </ChampionshipContext.Provider>
  );
};
