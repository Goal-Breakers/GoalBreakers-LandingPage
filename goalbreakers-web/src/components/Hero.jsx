export default function Hero() {
  return (
    <section className="hero relative min-h-screen bg-cover bg-center flex items-center">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo */}
      <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 z-10">
        {/* Título grande à esquerda */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-left md:w-1/2">
          GOAL <br /> BREAKERS
        </h1>

        {/* Texto à direita */}
        <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
            O Maior Portal do Futebol Feminino
          </h2>
          <p className="text-gray-200 text-base md:text-lg max-w-md leading-relaxed">
            Conecte-se, acompanhe e apoie as meninas que fazem a diferença
            dentro e fora de campo.
          </p>
        </div>
      </div>
    </section>
  );
}
