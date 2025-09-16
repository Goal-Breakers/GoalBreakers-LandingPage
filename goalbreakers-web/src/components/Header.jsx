import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../assets/logoBola.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [copinhaOpen, setCopinhaOpen] = useState(false);
  //const copinhaRef = useRef();
  const [isCopaDropdownOpen, setIsCopaDropdownOpen] = useState(false);

  const { user, logout } = useAuth();

  // Fecha o dropdown se clicar fora
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (copinhaRef.current && !copinhaRef.current.contains(event.target)) {
  //       setCopinhaOpen(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const handleInscrever = () => {
    if (user) {
      navigate("/copinha");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Lado esquerdo: Logo e Botão */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-12 w-auto transition-transform duration-200 ease-in-out hover:scale-125" />
          </Link>
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
            {/*MENU DROPDOWN*/}
            <div className="relative">
              <button
                onClick={() => setIsCopaDropdownOpen(!isCopaDropdownOpen)}
                className={`flex items-center gap-1 hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all ${
                  location.pathname.startsWith("/copa") ||
                  location.pathname.startsWith("/jogos") ||
                  location.pathname.startsWith("/resultados") ||
                  location.pathname.startsWith("/times")
                    ? "text-purple-500 after:w-full"
                    : "hover:after:w-full"
                }`}
              >
                COPA
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCopaDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isCopaDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-20">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover: text-white"
                    onClick={() => setIsCopaDropdownOpen(false)}
                  >
                    INSCRIÇÕES
                  </Link>
                  <Link
                    to="/copinha/jogos"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover: text-white"
                    onClick={() => setIsCopaDropdownOpen(false)}
                  >
                    JOGOS
                  </Link>
                  <Link
                    to="/copinha/times"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover: text-white"
                    onClick={() => setIsCopaDropdownOpen(false)}
                  >
                    TIMES
                  </Link>
                  <Link
                    to="copinha/resultados"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover: text-white"
                    onClick={() => setIsCopaDropdownOpen(false)}
                  >
                    RESULTADOS
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
              to="/sobreNos"
              className={`hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all ${
                location.pathname === "/sobreNos"
                  ? "text-purple-500 after:w-full"
                  : "hover:after:w-full"
              }`}
            >
              SOBRE NÓS
            </Link>
            {user ? (
              <>
                <span className="text-white">Olá, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="hover:text-purple-400 font-semibold"
                >
                  LOGOUT
                </button>
              </>
            ) : (
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
            )}
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
        <nav className="md:hidden bg-black/90 text-white px-6 py-6 font-semibold">
          {/* Contêiner flexível para centralizar todos os itens */}
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="block hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>

            {/* Container para o dropdown da Copa */}
            <div className="w-full text-center">
              <button
                onClick={() => setCopinhaOpen((open) => !open)}
                // CLASSE ALTERADA: Garante que o conteúdo (texto + seta) fique centralizado
                className="inline-flex items-center justify-center w-full hover:text-purple-400"
              >
                COPA
                {/* CÓDIGO DA SETA: A seta gira 180 graus (para cima) quando o menu está aberto */}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    copinhaOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {copinhaOpen && (
                <div className="space-y-2 mt-2">
                  <Link
                    to="/copinha"
                    className="block hover:text-purple-400"
                    onClick={() => {
                      setCopinhaOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    INSCRIÇÕES
                  </Link>
                  <Link
                    to="/jogos"
                    className="block hover:text-purple-400"
                    onClick={() => {
                      setCopinhaOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    JOGOS
                  </Link>
                  <Link
                    to="/times"
                    className="block hover:text-purple-400"
                    onClick={() => {
                      setCopinhaOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    TIMES
                  </Link>
                  <Link
                    to="/resultados"
                    className="block hover:text-purple-400"
                    onClick={() => {
                      setCopinhaOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    RESULTADOS
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
              to="/sobreNos"
              className="block hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              SOBRE NÓS
            </Link>
            {user ? (
              <>
                <span className="text-white">Olá, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="block hover:text-purple-400 font-semibold"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                LOGIN
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
