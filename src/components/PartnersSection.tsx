import Image from 'next/image';

export default function PartnersSection() {
  const partners = [
    '/logos/logo1.svg',
    '/logos/logo2.svg',
    '/logos/logo3.svg',
    '/logos/logo4.svg',
    '/logos/logo5.svg',
  ];

  return (
    <section className="py-20 bg-[#f0faff] dark:bg-[#1a1a2e] px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Bize Güvenen İş Ortaklarımız
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Diş hekimlerinden klinik zincirlerine kadar geniş bir çözüm ağına sahibiz.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center max-w-5xl mx-auto">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex items-center justify-center shadow hover:scale-105 transition"
          >
            <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={100}
                height={48}
                className="h-16 w-auto object-contain"
                />
          </div>
        ))}
      </div>
    </section>
  );
}
