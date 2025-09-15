import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [copinhaOpen, setCopinhaOpen] = useState(false);
  const copinhaRef = useRef();

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (copinhaRef.current && !copinhaRef.current.contains(event.target)) {
        setCopinhaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInscrever = () => navigate("/inscricao");

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Lado esquerdo: Logo e Botão */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <button
            onClick={handleInscrever}
            className="bg-purple-600 hover:bg-purple-700 text-white
                       px-6 py-1 rounded-full font-bold
                       transition duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
                       [box-shadow:0_0_10px_2px_rgba(168,85,247,0.5)]
                       hover:[box-shadow:0_0_15px_4px_rgba(168,85,247,0.7)]"
          >
            INSCREVA-SE
          </button>
        </div>

        {/* Lado direito: Links de Navegação e Ícone do Menu */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 font-semibold text-white">
            <Link
              to="/"
              className={`hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all ${
                location.pathname === "/"
                  ? "text-purple-500 after:w-full"
                  : "hover:after:w-full"
              }`}
            >
              HOME
            </Link>
            <div className="relative" ref={copinhaRef}>
              <button
                onClick={() => setCopinhaOpen((open) => !open)}
                className={`hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all ${
                  location.pathname === "/copinha"
                    ? "text-purple-500 after:w-full"
                    : "hover:after:w-full"
                }`}
              >
                COPA
              </button>
              {copinhaOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-black/90 rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/copinha"
                    className="block px-4 py-2 hover:bg-purple-700 hover:text-white"
                    onClick={() => setCopinhaOpen(false)}
                  >
                    Inscrição
                  </Link>
                  <Link
                    to="/copinha/times"
                    className="block px-4 py-2 hover:bg-purple-700 hover:text-white"
                    onClick={() => setCopinhaOpen(false)}
                  >
                    Times
                  </Link>
                  <Link
                    to="/copinha/jogos"
                    className="block px-4 py-2 hover:bg-purple-700 hover:text-white"
                    onClick={() => setCopinhaOpen(false)}
                  >
                    Jogos
                  </Link>
                  <Link
                    to="/copinha/resultados"
                    className="block px-4 py-2 hover:bg-purple-700 hover:text-white"
                    onClick={() => setCopinhaOpen(false)}
                  >
                    Resultados
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/banco-talentos"
              className={`hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all ${
                location.pathname === "/banco-talentos"
                  ? "text-purple-500 after:w-full"
                  : "hover:after:w-full"
              }`}
            >
              BANCO DE TALENTOS
            </Link>
            <Link
              to="/login"
              className={`hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all ${
                location.pathname === "/login"
                  ? "text-purple-500 after:w-full"
                  : "hover:after:w-full"
              }`}
            >
              LOGIN
            </Link>
          </nav>
          <button
            className=" text-3xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-black/90 text-white px-6 py-6 space-y-4 font-semibold">
          <Link
            to="/"
            className="block hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <div>
            <button
              onClick={() => setCopinhaOpen((open) => !open)}
              className="block w-full text-left hover:text-purple-400"
            >
              COPA
            </button>
            {copinhaOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  to="/copinha"
                  className="block hover:text-purple-400"
                  onClick={() => {
                    setCopinhaOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Inscrição
                </Link>
                <Link
                  to="/times"
                  className="block hover:text-purple-400"
                  onClick={() => {
                    setCopinhaOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Times
                </Link>
                <Link
                  to="/jogos"
                  className="block hover:text-purple-400"
                  onClick={() => {
                    setCopinhaOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Jogos
                </Link>
                <Link
                  to="/resultados"
                  className="block hover:text-purple-400"
                  onClick={() => {
                    setCopinhaOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Resultados
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/banco-talentos"
            className="block hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            BANCO DE TALENTOS
          </Link>
          <Link
            to="/login"
            className="block hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            LOGIN
          </Link>
        </nav>
      )}
    </header>
  );
}
