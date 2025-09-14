import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleInscrever = () => navigate("/inscricao");

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-black/50 shadow-md backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <button
            onClick={handleInscrever}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition"
          >
            INSCREVA-SE
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-white">
          <Link
            to="/"
            className="hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all hover:after:w-full"
          >
            HOME
          </Link>
          <Link
            to="/copa"
            className="hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all hover:after:w-full"
          >
            COPA
          </Link>
          <Link
            to="/banco-talentos"
            className="hover:text-purple-400 relative after:content-[''] after:block after:h-[2px] after:bg-purple-500 after:w-0 after:transition-all hover:after:w-full"
          >
            BANCO DE TALENTOS
          </Link>
        </nav>

        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
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
          <Link
            to="/copa"
            className="block hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            COPA
          </Link>
          <Link
            to="/banco-talentos"
            className="block hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            BANCO DE TALENTOS
          </Link>
        </nav>
      )}
    </header>
  );
}
