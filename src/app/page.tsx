export const metadata = {
  title: 'FRS Finance Web',
  description: 'Transformando suas finanças com tecnologia e visão de futuro.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 tracking-tight">
        💸 FRS Finance Web
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-300 max-w-2xl mb-8">
        Transformando suas finanças com tecnologia, inteligência de dados e propósito familiar. Seja bem-vindo ao futuro da gestão financeira.
      </p>
      <a
        href="#"
        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
      >
        Começar agora
      </a>
    </main>
  );
}
