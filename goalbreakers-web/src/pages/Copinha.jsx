import { useState } from "react";
import CopinhaCard from "../components/CopinhaCard";

export default function FormularioCopinha() {
  const [times, setTimes] = useState(() => {
    const saved = localStorage.getItem("timesCampeonato");
    return saved ? JSON.parse(saved) : [];
  });

  const [representante, setRepresentante] = useState({
    nome: "",
    numero: "",
    email: "",
    nascimento: "",
  });

  const [jogadores, setJogadores] = useState(
    Array.from({ length: 7 }, () => ({
      nome: "",
      nascimento: "",
      posicao: "Fixo",
    }))
  );

  // Estado do nome do time
  const [timeNome, setTimeNome] = useState("");

  const atualizarJogador = (index, campo, valor) => {
    const novos = [...jogadores];
    novos[index][campo] = valor;
    setJogadores(novos);
  };

  const adicionarJogador = () => {
    if (jogadores.length < 10) {
      setJogadores([
        ...jogadores,
        { nome: "", nascimento: "", posicao: "Fixo" },
      ]);
    }
  };

  const removerJogador = (index) => {
    if (jogadores.length > 7) {
      setJogadores(jogadores.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações
    if (
      !representante.nome ||
      !representante.numero ||
      !representante.email ||
      !representante.nascimento
    ) {
      alert("Preencha todos os dados do representante.");
      return;
    }

    for (let j of jogadores) {
      if (!j.nome || !j.nascimento) {
        alert("Preencha todos os campos das jogadoras obrigatórias.");
        return;
      }
    }

    if (times.length >= 8) {
      alert("Número máximo de times atingido!");
      return;
    }

    const novoTime = {
      nome: timeNome,
      representante,
      jogadores,
    };

    const novosTimes = [...times, novoTime];
    setTimes(novosTimes);
    localStorage.setItem("timesCampeonato", JSON.stringify(novosTimes));
    alert("Time inscrito com sucesso!");

    // Resetar formulário
    setRepresentante({ nome: "", numero: "", email: "", nascimento: "" });
    setJogadores(Array(7).fill({ nome: "", nascimento: "", posicao: "Fixo" }));
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center px-6 py-12 text-white">
        <h1 className="text-4xl font-extrabold text-purple-300 mb-2 uppercase text-center">
          Copa Passa a Bola
        </h1>
        <CopinhaCard />
        <h2
          className="text-4xl font-extrabold text-purple-300 mb-2 uppercase text-center"
          id="formularioCopinha"
        >
          Formulário Copinha
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          Formulário de inscrição
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-8"
        >
          {/* Representante */}
          <div className="grid md:grid-cols-2 gap-6">
            {["nome", "numero", "email", "nascimento"].map((campo, i) => (
              <div key={i} className="flex flex-col">
                <label className="mb-1 font-semibold">
                  {campo === "nome" && "Nome do representante:"}
                  {campo === "numero" && "Número do representante:"}
                  {campo === "email" && "E-mail do representante:"}
                  {campo === "nascimento" && "Data de nascimento:"}
                </label>
                <input
                  type={campo === "email" ? "email" : "text"}
                  placeholder={campo === "nascimento" ? "DD / MM / AAAA" : ""}
                  value={representante[campo]}
                  onChange={(e) =>
                    setRepresentante({
                      ...representante,
                      [campo]: e.target.value,
                    })
                  }
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                />
              </div>
            ))}
          </div>

          {/* Informações do Time */}
          <div className="flex flex-col mb-6">
            <label className="mb-1 font-semibold">Nome do Time:</label>
            <input
              type="text"
              value={timeNome}
              onChange={(e) => setTimeNome(e.target.value)}
              placeholder="Digite o nome do time"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <hr className="border-gray-700" />

          {/* Jogadoras */}
          <h2 className="text-2xl font-bold text-purple-300">Jogadoras:</h2>
          {jogadores.map((j, index) => (
            <div
              key={index}
              className="grid md:grid-cols-3 gap-6 items-end mb-4"
            >
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">
                  Nome jogador {index + 1}:
                </label>
                <input
                  type="text"
                  value={j.nome}
                  onChange={(e) =>
                    atualizarJogador(index, "nome", e.target.value)
                  }
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">
                  Data de nascimento:
                </label>
                <input
                  type="text"
                  placeholder="DD / MM / AAAA"
                  value={j.nascimento}
                  onChange={(e) =>
                    atualizarJogador(index, "nascimento", e.target.value)
                  }
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Posição:</label>
                <select
                  value={j.posicao}
                  onChange={(e) =>
                    atualizarJogador(index, "posicao", e.target.value)
                  }
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:ring-2 focus:ring-purple-400"
                >
                  <option>Fixo</option>
                  <option>Goleiro</option>
                  <option>Alas</option>
                  <option>Pivô</option>
                </select>
              </div>
              {jogadores.length > 7 && (
                <button
                  type="button"
                  onClick={() => removerJogador(index)}
                  className="text-red-500 font-bold hover:text-red-700"
                >
                  Remover
                </button>
              )}
            </div>
          ))}

          {jogadores.length < 10 && (
            <button
              type="button"
              onClick={adicionarJogador}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-semibold transition text-white"
            >
              + Adicionar Jogadora Opcional
            </button>
          )}

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition text-white"
            >
              Enviar Inscrição
            </button>
          </div>
        </form>

        <h3 className="mt-8 text-purple-300 font-bold">
          Times Inscritos ({times.length}/8)
        </h3>
        <ul className="list-disc list-inside mt-2">
          {times.map((t, i) => (
            <li key={i}>
              {t.nome} - {t.jogadores.length} jogadoras
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
