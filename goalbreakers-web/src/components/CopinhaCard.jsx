import React from "react";

export default function CopinhaCard() {
  return (
    <div className="py-24 flex flex-col items-center justify-center text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Card do evento */}
        <div className="bg-purple-200 text-purple-800 rounded-xl p-8 w-80 flex flex-col items-center space-y-6">
          <h2 className="text-center font-bold text-lg">PRÓXIMA COPINHA</h2>
          <p className="text-center font-semibold">17/09/2025</p>

          <div className="flex items-center gap-2">
            <span className="material-icons">place</span>
            <p className="font-semibold">Appito</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="material-icons">Às</span>
            <p className="font-semibold">07:00</p>
          </div>

          <a
            href="#formularioCopinha"
            className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full font-semibold transition text-white"
          >
            INSCREVA-SE
          </a>
        </div>

        {/* Requisitos */}
        <div className="text-left flex flex-col text-white space-y-2 max-w-md">
          <h3 className="font-bold text-lg mb-2">REQUISITOS PARA INSCRIÇÃO</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>NOME DO TIME</li>
            <li>REPRESENTANTE DO TIME</li>
            <li>MÍNIMO 7 INTEGRANTES - MÁXIMO 10</li>
            <li>NOME & IDADE DOS INTEGRANTES</li>
            <li>DOCUMENTO COM FOTO DOS INTEGRANTES</li>
            <li>VÍDEO DE APRESENTAÇÃO DO TIME</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
