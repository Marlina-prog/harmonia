import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Crea música con Inteligencia Artificial
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center text-gray-300">
        Bienvenido a Harmonia AI. Empieza tu canción en segundos.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-2xl transition">
        Comenzar
      </button>
    </div>
  );
}