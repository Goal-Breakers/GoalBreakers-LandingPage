import Header from "../components/Header";


export default function SobreNos() {
  return (
    <div>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center px-6 py-12 text-white">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-purple-300 mb-6 uppercase text-center">
          Sobre Nós
        </h1>

        {/* Texto de apresentação */}
        <p className="max-w-3xl text-gray-300 text-center mb-12 leading-relaxed">
          Somos a <span className="text-purple-400 font-semibold">GoalBreakers</span>, 
          uma equipe apaixonada por esportes e tecnologia. Nosso objetivo é criar experiências 
          inovadoras que conectem pessoas, promovam a inclusão e fortaleçam a paixão pelo esporte.
        </p>

        {/* Cards de membros */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
          {[
            {
              nome: "Henrique Guedes",
              cargo: "Front-end Developer",
              descricao: "Responsável pela interface e experiência do usuário.",
            },
            {
              nome: "Áurea Sardinha",
              cargo: "UI/UX Designer",
              descricao: "Cuida da identidade visual e da usabilidade do projeto.",
            },
            {
              nome: "Eduardo Ulises",
              cargo: "Back-end Developer",
              descricao: "Desenvolve a estrutura e garante a performance do sistema.",
            },
            {
              nome: "Laura Tirgre",
              cargo: "UI/UX Designer",
              descricao: "Cuida da identidade visual e da usabilidade do projeto.",
            },
            {
              nome: "Otavio Inaba",
              cargo: "Back-end Developer",
              descricao: "Desenvolve a estrutura e garante a performance do sistema.",
            },
          ].map((pessoa, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="w-24 h-24 rounded-full bg-purple-500 mb-4 flex items-center justify-center text-2xl font-bold">
                {pessoa.nome.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-purple-300">{pessoa.nome}</h3>
              <p className="text-sm text-gray-400">{pessoa.cargo}</p>
              <p className="mt-3 text-gray-300 text-sm">{pessoa.descricao}</p>
            </div>
          ))}
        </div>

        {/* Missão, Visão, Valores */}
        <div className="max-w-4xl mt-16 space-y-8 text-center">
          <h2 className="text-3xl font-extrabold text-purple-300 uppercase">Nossa Essência</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titulo: "Missão",
                texto: "Transformar o esporte em uma experiência acessível, divertida e tecnológica.",
              },
              {
                titulo: "Visão",
                texto: "Ser referência em inovação esportiva e engajamento comunitário.",
              },
              {
                titulo: "Valores",
                texto: "Paixão, inclusão, trabalho em equipe e respeito.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/60 rounded-xl p-6 shadow-md hover:bg-gray-800 transition"
              >
                <h3 className="text-xl font-bold text-purple-300 mb-2">{item.titulo}</h3>
                <p className="text-gray-300">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
}