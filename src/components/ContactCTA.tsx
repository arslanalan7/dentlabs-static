import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#3ed2a7] dark:bg-[#2fb397] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Dijital dental çözümlerimizle tanışmaya hazır mısınız?
        </h2>
        <p className="text-lg md:text-xl text-white/90">
          Size özel çözümler ve detaylı bilgi için bizimle iletişime geçin.
        </p>
        <Link href="/iletisim">
          <span className="inline-block bg-white text-[#232946] font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition">
            İletişime Geçin
          </span>
        </Link>
      </div>
    </section>
  );
}
