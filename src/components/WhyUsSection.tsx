import { FaTools, FaStopwatch, FaSmileBeam, FaMicroscope } from 'react-icons/fa';

const features = [
  {
    icon: <FaMicroscope className="text-3xl text-[#3ed2a7]" />,
    title: 'Yüksek Teknoloji',
    desc: 'Son teknoloji CAD/CAM ekipmanlarıyla üretim yapıyoruz.',
  },
  {
    icon: <FaStopwatch className="text-3xl text-[#3ed2a7]" />,
    title: 'Hızlı Teslimat',
    desc: 'Zamanında ve planlı üretim süreci ile hızlı teslimat garantisi.',
  },
  {
    icon: <FaSmileBeam className="text-3xl text-[#3ed2a7]" />,
    title: 'Hasta Memnuniyeti',
    desc: 'Estetik ve işlevsellik odaklı çözümlerle hasta memnuniyetini ön planda tutuyoruz.',
  },
  {
    icon: <FaTools className="text-3xl text-[#3ed2a7]" />,
    title: 'Özelleştirilebilir Hizmet',
    desc: 'Her hekime özel ihtiyaçlara yönelik esnek çözümler sunarız.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Neden <span className="text-[#3ed2a7]">Dentaverax</span>?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Diş hekimleri ve klinikler neden bizi tercih ediyor?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
