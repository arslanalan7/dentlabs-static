import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Dentaverax",
  description:
    "Kişisel ve profesyonel gelişiminiz için tasarlanmış danışmanlık, rehberlik ve dijital araç destekli hizmetlerimizle tanışın.",
};

export default function HizmetlerimizPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Hizmetlerimiz</h1>
      <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
        <li className="bg-gray-50 dark:bg-gray-800 p-4 rounded">Dijital strateji ve dönüşüm danışmanlığı</li>
        <li className="bg-gray-50 dark:bg-gray-800 p-4 rounded">Fiziksel, zihinsel ve finansal farkındalık koçluğu</li>
        <li className="bg-gray-50 dark:bg-gray-800 p-4 rounded">Kişisel gelişim için online rehberlik içerikleri</li>
        <li className="bg-gray-50 dark:bg-gray-800 p-4 rounded">İşletmeler için verimlilik artırıcı araçlar</li>
      </ul>
    </section>
  );
}
