'use client';

export default function HeroAbout() {
  return (
    <section className="relative bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] pt-40 pb-32 px-4 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Sol: Hakkımızda Başlık ve Açıklama */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Biz Kimiz?</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Dentaverax, 2022 yılında dijital diş hekimliği alanında uzman, yenilikçi bir kadro ile kurulmuştur. Kalite, hız ve estetiği temel alan yaklaşımıyla kliniklere yüksek teknolojili çözümler sunmaktadır.
          </p>
        </div>

        {/* Sağ: Misyon & Vizyon Kartları */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] p-6">
            <h2 className="text-2xl font-bold text-[#3ed2a7] mb-2">Misyonumuz</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Diş hekimlerinin ve kliniklerin tüm ihtiyaçlarını anlayarak onlara yüksek kaliteli, hızlı ve dijital çözümler sunmak. Hasta memnuniyetini ve hekim verimliliğini artırmak için çalışıyoruz.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-sm dark:hover:shadow-[0_0_20px_rgba(62,210,167,0.25)] p-6">
            <h2 className="text-2xl font-bold text-[#3ed2a7] mb-2">Vizyonumuz</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Dijital dental çözümler alanında, yenilikçi üretim teknikleriyle global pazarda tanınan ve güven duyulan bir laboratuvar olmak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
