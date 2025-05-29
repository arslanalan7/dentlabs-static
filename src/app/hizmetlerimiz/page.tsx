import type { Metadata } from "next";
import { FaLightbulb, FaBrain, FaLaptopCode, FaChartLine } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Dentaverax",
  description:
    "Kişisel ve profesyonel gelişiminiz için tasarlanmış danışmanlık, rehberlik ve dijital araç destekli hizmetlerimizle tanışın.",
};

const services = [
  {
    icon: <FaLightbulb className="text-3xl text-[#7c3aed]" />,
    title: "Dijital Strateji ve Dönüşüm Danışmanlığı",
    desc: "Dijitalleşme yolculuğunuzda size özel stratejiler ve dönüşüm çözümleri sunuyoruz.",
  },
  {
    icon: <FaBrain className="text-3xl text-[#7c3aed]" />,
    title: "Fiziksel, Zihinsel ve Finansal Farkındalık Koçluğu",
    desc: "Bütünsel gelişim için koçluk ve rehberlik desteğiyle yanınızdayız.",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-[#7c3aed]" />,
    title: "Kişisel Gelişim için Online Rehberlik İçerikleri",
    desc: "Kişisel gelişiminize katkı sağlayacak dijital içerikler ve eğitimler.",
  },
  {
    icon: <FaChartLine className="text-3xl text-[#7c3aed]" />,
    title: "İşletmeler için Verimlilik Artırıcı Araçlar",
    desc: "İş süreçlerinizi optimize eden modern dijital çözümler.",
  },
];

export default function HizmetlerimizPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] pt-32 pb-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-white text-center">
        Hizmetlerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex items-start gap-5 bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-md p-6 hover:scale-[1.03] transition"
          >
            <div className="flex-shrink-0">{service.icon}</div>
            <div>
              <h2 className="text-xl font-semibold mb-1 text-gray-800 dark:text-[#b2f7ef]">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}