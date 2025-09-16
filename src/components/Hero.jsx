export default function Hero() {
  return (
    <section className="hero relative min-h-screen bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 z-10">

        <h1 className="font-extrabold text-left">
          GOAL <br /> BREAKERS
        </h1>

        <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
            O Maior Portal do Futebol Feminino
          </h1>
          <h5 className="text-gray-200 text-base md:text-xl max-w-md leading-relaxed">
            Conecte-se, acompanhe e apoie as meninas que fazem a diferença
            dentro e fora de campo.
          </h5>
        </div>
      </div>
    </section>
  );
}
