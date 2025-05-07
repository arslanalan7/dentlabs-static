import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Dentaverax",
  description:
    "Dentaverax, bireyler ve işletmeler için kişisel gelişim, finansal sağlık ve iş verimliliği alanlarında dijital çözümler sunan modern bir danışmanlık platformudur.",
};

export default function HakkimizdaPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 rounded">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Hakkımızda</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Dentaverax, bireyler ve küçük işletmeler için kişisel gelişim, iş verimliliği ve finansal farkındalık odaklı modern dijital çözümler sunar.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Misyonumuz; insanların fiziksel, zihinsel ve finansal yaşam kalitesini artıracak araçlar ve danışmanlık hizmetleri ile dijital dönüşümlerine rehberlik etmektir.
      </p>
    </section>
  );
}
