import { useState } from 'react';
import { useChampionship } from '../contexts/ChampionshipContext';
import { useAuth } from '../contexts/AuthContext';

export default function Teams() {
  const { teams, updateTeam, deleteTeam } = useChampionship();
  const { isAdmin } = useAuth();
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (team) => {
    setEditingId(team.id);
    setEditData({ ...team });
  };

  const saveEdit = () => {
    updateTeam(editingId, editData);
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center px-6 py-12 text-white">
      <h1 className="text-4xl font-extrabold text-purple-300 mb-8 uppercase text-center">
        Gerenciamento de Times
      </h1>

      {teams.length === 0 ? (
        <p className="text-gray-300">Nenhum time inscrito ainda.</p>
      ) : (
        <div className="w-full max-w-4xl space-y-6">
          {teams.map((team) => (
            <div key={team.id} className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg">
              {editingId === team.id ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editData.nome}
                    onChange={(e) => setEditData({ ...editData, nome: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                    placeholder="Nome do Time"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={editData.representante?.nome || ''}
                      onChange={(e) => setEditData({
                        ...editData,
                        representante: { ...editData.representante, nome: e.target.value }
                      })}
                      className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                      placeholder="Nome do Representante"
                    />
                    <input
                      type="email"
                      value={editData.representante?.email || ''}
                      onChange={(e) => setEditData({
                        ...editData,
                        representante: { ...editData.representante, email: e.target.value }
                      })}
                      className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                      placeholder="Email do Representante"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={saveEdit}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full font-semibold transition text-white"
                    >
                      Salvar
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full font-semibold transition text-white"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">{team.nome}</h3>
                  <p className="text-gray-300 mb-2">Representante: {team.representante?.nome} ({team.representante?.email})</p>
                  <p className="text-gray-300 mb-4">Jogadoras: {team.jogadores?.length || 0}</p>
                  <div className="flex gap-4">
                    {isAdmin() && (
                      <>
                        <button
                          onClick={() => startEdit(team)}
                          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-semibold transition text-white"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deleteTeam(team.id)}
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-semibold transition text-white"
                        >
                          Deletar
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
