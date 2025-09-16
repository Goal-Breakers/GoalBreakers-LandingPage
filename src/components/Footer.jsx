import Logo from "../assets/logoBola.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#161236] text-gray-300 py-10 px-6 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className=" p-2 rounded-full">
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            </div>
            <h2 className="text-lg font-bold text-white">GOALBREAKERS</h2>
          </div>
          <p className="text-sm leading-relaxed">
            O Maior Portal do Futebol Feminino. Conecte-se, acompanhe e apoie as
            meninas que fazem a diferença dentro e fora de campo.
          </p>
        </div>

        {/* Acesso Rápido */}
        <div>
          <h3 className="text-white font-semibold mb-4">Acesso Rápido</h3>
          <ul className="space-y-2 text-sm">
            <li> <Link
            to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/copa" className="hover:text-purple-400">Copa</Link></li>
            <li><Link to="/banco-talentos" className="hover:text-purple-400">Banco de Talentos</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-purple-400">Termos de Uso</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Inscreva-se</h3>
          <p className="text-sm mb-4">
            Receba as últimas notícias e atualizações diretamente na sua caixa de entrada.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-3 py-2 rounded-l-md bg-[#1f1f3d] text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-r-md text-lg font-bold"
            >
              &gt;
            </button>
          </form>
        </div>
      </div>

      {/* Linha de baixo */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2024 Goalbreakers. Todos os direitos reservados.
      </div>
    </footer>
  );
}
