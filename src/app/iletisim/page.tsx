import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Dentaverax",
  description:
    "Bize ulaşmak için iletişim formunu doldurun veya e-posta adresimizden doğrudan iletişime geçin. Dentaverax ekibi sizin için burada.",
};

export default function IletisimPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#b2f7ef]/40 to-[#a0c4ff]/40 dark:from-[#232946]/60 dark:to-[#1a1a2e]/60 pt-32 pb-16 px-4">
      <div className="max-w-2xl w-full bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-md p-8 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white text-center">
          İletişim
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Adınız"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/80 text-gray-800 dark:text-white rounded"
          />
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/80 text-gray-800 dark:text-white rounded"
          />
          <textarea
            placeholder="Mesajınız"
            rows={5}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/80 text-gray-800 dark:text-white rounded"
          />
          <button
            type="submit"
            className="bg-[#b2f7ef] text-[#232946] dark:bg-[#393e46] dark:text-[#b2f7ef] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#a0c4ff] dark:hover:bg-[#232946] transition w-full"
          >
            Gönder
          </button>
        </form>
        <div className="mt-8 text-gray-600 dark:text-gray-400 text-center text-sm space-y-1">
          <p>
            <span className="font-semibold">E-posta:</span> info@dentaverax.com
          </p>
          <p>
            <span className="font-semibold">Telefon:</span> +90 212 000 00 00
          </p>
        </div>
      </div>
    </section>
  );
}