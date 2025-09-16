import { useState } from "react";
import SuggestionCarousel from "../components/SuggestionCarousel";
import Filters from "../components/Filters";
import PlayerList from "../components/PlayerList";

export default function BancoDeTalentos() {
  const [jogadoras] = useState([
    {
      id: 1,
      nome: "Beatriz Ribeiro",
      posicao: "Ala",
      idade: 22,
      localizacao: "Rio de Janeiro, RJ",
      estrelas: 4,
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      nome: "Fernanda Costa",
      posicao: "Pivô",
      idade: 20,
      localizacao: "Belo Horizonte, MG",
      estrelas: 3,
      foto: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 3,
      nome: "Gabriela Lima",
      posicao: "Goleira",
      idade: 24,
      localizacao: "Curitiba, PR",
      estrelas: 4,
      foto: "https://randomuser.me/api/portraits/women/66.jpg",
    },
    {
      id: 4,
      nome: "Amanda Nunes",
      posicao: "Fixo",
      idade: 26,
      localizacao: "Porto Alegre, RS",
      estrelas: 5,
      foto: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 5,
      nome: "Rafaela Santos",
      posicao: "Ala",
      idade: 18,
      localizacao: "Salvador, BA",
      estrelas: 3,
      foto: "https://randomuser.me/api/portraits/women/77.jpg",
    },
  ]);

  const sugestoes = [
    {
      id: 101,
      nome: "Juliana Paiva",
      posicao: "Ala",
      idade: 23,
      estrelas: 3,
      foto: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 102,
      nome: "Mariana Fernandes",
      posicao: "Pivô",
      idade: 21,
      estrelas: 3,
      foto: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 103,
      nome: "Carla Souza",
      posicao: "Goleira",
      idade: 25,
      estrelas: 5,
      foto: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];

  const [posicao, setPosicao] = useState("Todos");
  const [idade, setIdade] = useState("Qualquer");
  const [nomeBusca, setNomeBusca] = useState("");

  const [classificacao, setClassificacao] = useState("Qualquer");

  const jogadorasFiltradas = jogadoras.filter((j) => {
    const filtroPosicao = posicao === "Todos" || j.posicao === posicao;
    const filtroIdade =
      idade === "Qualquer" || j.idade === parseInt(idade, 10);
    const filtroNome =
      !nomeBusca ||
      j.nome.toLowerCase().includes(nomeBusca.toLowerCase());
    const filtroClassificacao =
      classificacao === "Qualquer" || j.estrelas >= parseInt(classificacao, 10);

    return filtroPosicao && filtroIdade && filtroNome && filtroClassificacao;
  });
  const renderStars = (qtd) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={i < qtd ? "text-yellow-400" : "text-gray-400"}
        >
          ★
        </span>
      ));

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">BANCO DE TALENTOS</h1>

      <SuggestionCarousel suggestions={sugestoes} renderStars={renderStars} />

      <Filters
        posicao={posicao}
        setPosicao={setPosicao}
        idade={idade}
        setIdade={setIdade}
        nomeBusca={nomeBusca}
        setNomeBusca={setNomeBusca}
        classificacao={classificacao}
        setClassificacao={setClassificacao}
      />

      <PlayerList players={jogadorasFiltradas} renderStars={renderStars} />
    </div>
  );
}
