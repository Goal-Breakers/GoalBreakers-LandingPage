// src/components/Features.jsx
import { Link } from "react-router-dom";
import { GiSoccerBall, GiMedal  } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";

export default function Features() {
  const items = [
    {
      title: "COPINHA",
      description:
        "Para você que quer uma imersão dentro de competições de futebol feminino, se inscreva para a Copinha Passa a Bola",
      link: "/copinha",
      icon: <GiSoccerBall className="w-18 h-18"/>,
      color: "bg-yellow-500",
      shadow: "shadow-[0_0_30px_0_rgba(251,255,9,0.76)]",
    },
    {
      title: "BANCO DE TALENTOS",
      description:
        "Você sempre desejou ser vista pelas suas habilidades mas nunca teve a oportunidade de ir a peneiras? Então Banco de Talentos é o lugar certo para você!",
      link: "/banco-talentos",
      icon: <GiMedal className="w-18 h-18"/>,
      color: "bg-purple-500",
      shadow: "shadow-[0_0_30px_0_rgba(165,9,255,0.76)]"
    },
    {
      title: "SOBRE NÓS",
      description: "Gostaria de saber um pouco mais sobre a equipe do Goal Breakers?",
      link: "/sobreNos",
      icon: <HiUserGroup className="w-17 h-17" />,
      color: "bg-red-500",
      shadow: "shadow-[0_0_30px_0_rgba(255,58,9,0.76)]"
    },
  ];

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-indigo-900 to-indigo-950 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-110"
          >
            {/* Ícone */}
            <div
              className={`absolute -top-10 w-22 h-22 rounded-full flex items-center justify-center ${item.color} ${item.shadow}`}
            >
              {item.icon}
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-gray-200 mb-6">{item.description}</p>
              <Link
                to={item.link}
                className="text-sm text-purple-400 hover:underline"
              >
                <strong>Veja mais →</strong>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
