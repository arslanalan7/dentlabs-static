import type { Metadata } from "next";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Dentaverax",
  description:
    "Bize ulaşmak için iletişim formunu doldurun veya e-posta adresimizden doğrudan iletişime geçin. Dentaverax ekibi sizin için burada.",
};

export default function IletisimPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#b2f7ef] to-[#a0c4ff] dark:from-[#232946] dark:to-[#1a1a2e] pt-32 px-2 md:px-8 pb-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Sol: Bilgi Kutusu */}
        <div className="flex flex-col justify-center bg-black/60 rounded-3xl p-8 md:p-12 text-white shadow-xl min-h-[480px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#5eead4]">Bize Ulaşın</h2>
          <p className="mb-8 text-base md:text-lg text-white/80">
            Dentaverax ekibi olarak her türlü sorunuz, talebiniz veya iş birliği öneriniz için bizimle iletişime geçebilirsiniz. Size en kısa sürede geri dönüş yapmak ve dijital dental çözümlerimizle tanışmanızı sağlamak için sabırsızlanıyoruz.
          </p>
          <div className="flex flex-col gap-4 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-[#5eead4]" />
              <span>hello@reallygreatsite.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-lg text-[#5eead4]" />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGlobe className="text-lg text-[#5eead4]" />
              <span>reallygreatsite.com</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.google.com/maps?q=123+Anywhere+St,+Any+City,+ST+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--accent)] hover:underline"
              >
                <FaMapMarkerAlt className="text-lg text-[#5eead4]" />
                <span>
                  123 Anywhere St., Any City, ST 12345
                  <br />
                  <span className="text-sm font-semibold text-[var(--accent-muted)]">
                    (Haritada Açmak İçin Tıklayın)
                  </span>
                </span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl overflow-hidden shadow-lg my-6">
                <iframe
                  src="https://www.google.com/maps?q=123+Anywhere+St,+Any+City,+ST+12345&output=embed"
                  width="100%"
                  height="250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] border-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sağ: Form */}
        <ContactForm />
      </div>
    </section>
  );
}
