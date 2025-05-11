// src/app/page.tsx

"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from '../assets/logo.svg';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-950 to-gray-900 text-white px-4">
      <div className="text-center max-w-xl">
        <Image
          src={Logo}
          alt="FRS Finance Logo"
          className="mx-auto mb-8"
          width={120}
          height={120}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Controle suas <span className="text-blue-500">Finanças</span> com Eficiência
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Uma plataforma intuitiva e poderosa para gerenciar sua vida financeira de forma simples e segura.
        </p>
        <button
          onClick={() => router.push("/auth")}
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-xl text-lg font-semibold"
        >
          Começar agora
        </button>
      </div>
    </main>
  );
}
