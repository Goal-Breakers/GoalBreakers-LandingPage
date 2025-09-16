export default function Hero() {
  return (
    // 1. Contêiner principal para a imagem de fundo e altura total
    <section className="hero relative min-h-screen bg-cover bg-center">
      {/* Camada de sobreposição escura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contêiner de Conteúdo: Usamos Grid para posicionar os elementos */}
      <div className="relative w-full h-full min-h-screen grid grid-cols-12 px-6 md:px-20 z-10">
        {/* --------------------------------- */}
        {/* LADO ESQUERDO: GOAL BREAKERS e ÁREA 1 */}
        {/* Ocupa da coluna 1 à 6, posicionado verticalmente no centro/abaixo */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-end h-full text-left pb-50">
          <h1 className="text-white text-9xl md:text-[10rem] font-extrabold leading-none mb-10">
            GOAL <br /> BREAKERS
          </h1>
        </div>

        {/* --------------------------------- */}
        {/* LADO DIREITO: Portal Feminino e ÁREA 2 */}
        {/* Ocupa da coluna 7 à 12, posicionado verticalmente no centro/abaixo */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-end h-full py-10 text-left md:pl-10">
          {/* TÍTULO Roxo */}
          <h1 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
            O Maior Portal do Futebol Feminino
          </h1>

          {/* TEXTO DA ÁREA 2: Ajustado para o círculo 2 */}
          <h5 className="text-gray-200 text-base md:text-xl max-w-md leading-relaxed">
            Conecte-se, acompanhe e apoie as meninas que fazem a diferença
            dentro e fora de campo.
            {/* Coloque aqui o restante do texto da Área 2 */}
          </h5>
        </div>
      </div>
    </section>
  );
}
