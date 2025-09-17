export default function Hero() {
  return (
    <section className="hero relative min-h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="relative w-full h-full min-h-screen 
                      flex flex-col justify-end 
                      md:grid md:grid-cols-12 
                      px-6 md:px-20 z-10 py-10"
      >
        <div
          className="order-1 md:col-span-6 flex flex-col md:justify-center text-left 
                        mb-8 md:mb-0 
                        pt-20 md:pt-0"
        >
          <h1 className="text-white text-7xl md:text-[14rem] font-extrabold leading-none">
            GOAL <br /> BREAKERS
          </h1>
        </div>

        <div className="order-2 md:col-span-6 flex flex-col text-left md:pl-10 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-purple-400 mb-4 mt-auto">
            O Maior Portal do Futebol Feminino
          </h1>

          <h5 className="text-gray-200 text-lg md:text-xl max-w-md leading-relaxed">
            Conecte-se, acompanhe e apoie as meninas que fazem a diferença
            dentro e fora de campo.
          </h5>
        </div>
      </div>
    </section>
  );
}
