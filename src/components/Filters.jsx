export default function Filters({
  posicao,
  setPosicao,
  idade,
  setIdade,
  nomeBusca,
  setNomeBusca,
  classificacao,
  setClassificacao,
  onSearch,
}) {
  return (
    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl mt-10">
      <h2 className="text-xl font-semibold text-center mb-4">Buscar Novos Talentos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Posição</label>
          <select
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}
            className="bg-purple-800 p-2 rounded-lg w-full"
          >
            <option>Todos</option>
            <option>Ala</option>
            <option>Fixo</option>
            <option>Pivô</option>
            <option>Goleira</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Idade</label>
          <select
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className="bg-purple-800 p-2 rounded-lg w-full"
          >
            <option>Qualquer</option>
            <option>18</option>
            <option>20</option>
            <option>22</option>
            <option>24</option>
            <option>26</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            value={nomeBusca}
            onChange={(e) => setNomeBusca(e.target.value)}
            className="bg-purple-800 p-2 rounded-lg w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Classificação</label>
          <select
            value={classificacao}
            onChange={(e) => setClassificacao(e.target.value)}
            className="bg-purple-800 p-2 rounded-lg w-full"
          >
            <option>Qualquer</option>
            <option value="3">3 estrelas</option>
            <option value="4">4 estrelas</option>
            <option value="5">5 estrelas</option>
          </select>
        </div>
      </div>

      <button
        onClick={onSearch}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg block mx-auto"
      >
        Buscar Jogadoras
      </button>
    </div>
  );
}
