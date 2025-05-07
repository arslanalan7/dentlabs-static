import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Dentaverax",
  description:
    "Bize ulaşmak için iletişim formunu doldurun veya e-posta adresimizden doğrudan iletişime geçin. Dentaverax ekibi sizin için burada.",
};

export default function IletisimPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 rounded">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">İletişim</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Adınız"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded"
        />
        <input
          type="email"
          placeholder="E-posta adresiniz"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded"
        />
        <textarea
          placeholder="Mesajınız"
          rows={5}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Gönder
        </button>
      </form>
      <div className="mt-8 text-gray-600 dark:text-gray-400 text-sm">
        <p>E-posta: info@dentaverax.com</p>
        <p>Telefon: +90 212 000 00 00</p>
      </div>
    </section>
  );
}
