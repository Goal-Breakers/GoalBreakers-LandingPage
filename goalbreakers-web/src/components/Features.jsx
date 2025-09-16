// src/components/Features.jsx
import { Link } from "react-router-dom";

export default function Features() {
  const items = [
    {
      title: "COPINHA",
      description:
        "Para você que quer uma imersão dentro de competições de futebol feminino, se inscreva para a Copinha Passa a Bola",
      link: "/copinha",
      icon: "",
      color: "bg-yellow-500",
    },
    {
      title: "BANCO DE TALENTOS",
      description:
        "Você sempre desejou ser vista pelas suas habilidades mas nunca teve a oportunidade de ir a peneiras? Então Banco de Talentos é o lugar certo para você!",
      link: "/banco-talentos",
      icon: "",
      color: "bg-purple-500",
    },
    {
      title: "PASSA A BOLA",
      description: "Conheça os bastidores do projeto",
      link: "/sobreNos",
      icon: "",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-indigo-900 to-indigo-950 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            {/* Ícone */}
            <div
              className={`absolute -top-10 w-16 h-16 rounded-full flex items-center justify-center ${item.color}`}
            >
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-gray-200 mb-6">{item.description}</p>
              <Link
                to={item.link}
                className="text-sm text-purple-400 hover:underline"
              >
                Veja mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
