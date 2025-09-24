// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomepageMarinhoMendes from "./HomepageMarinhoMendes.jsx";
import AreaPrevidenciarioPage from "./pages/areas/Previdenciario.jsx";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white" style={{background:"#0A0C14"}}>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Página não encontrada</h1>
        <p className="mt-2 opacity-70">Use o botão abaixo para voltar.</p>
        <Link to="/" className="mt-4 inline-block rounded-full bg-white text-neutral-900 px-4 py-2 font-semibold">
          Página principal
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageMarinhoMendes />} />
      <Route path="/areas/previdenciario" element={<AreaPrevidenciarioPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
