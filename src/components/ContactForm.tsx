'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [form, setForm] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    mesaj: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      if (!recaptchaRef.current) {
        console.error("ReCAPTCHA component hazır değil.");
        setStatus("error");
        return;
      }
      let token: string | null = null;
      try {
        token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
      } catch (err) {
        console.error("executeAsync() sırasında hata:", err);
        setStatus("error");
        return;
      }

      if (!token) {
        console.error("reCAPTCHA token alınamadı.");
        setStatus('error');
        return;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      });

      let result = null;
      try {
        result = await res.json();
      } catch (jsonError) {
        console.error("Yanıt JSON olarak ayrıştırılamadı:", jsonError);
      }

      if (!res.ok || !result?.success) {
        console.error("Form gönderim hatası:", result);
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ ad: '', soyad: '', email: '', telefon: '', mesaj: '' });
    } catch (error) {
      console.error('İstisna oluştu:', error);
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-4 bg-transparent rounded-3xl p-2 md:p-8"
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        size="invisible"
      />

      <label className="mb-1 text-gray-700 dark:text-gray-200">Adınız</label>
      <input
        type="text"
        name="ad"
        value={form.ad}
        onChange={handleChange}
        placeholder="Adınız"
        required
        className="w-full p-3 border border-gray-400 rounded-xl bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5eead4]"
      />
      <label className="mb-1 text-gray-700 dark:text-gray-200">Soyadınız</label>
      <input
        type="text"
        name="soyad"
        value={form.soyad}
        onChange={handleChange}
        placeholder="Soyadınız"
        required
        className="w-full p-3 border border-gray-400 rounded-xl bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5eead4]"
      />
      <label className="mb-1 text-gray-700 dark:text-gray-200">E-posta Aresiniz</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-posta Adresiniz"
        required
        className="w-full p-3 border border-gray-400 rounded-xl bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5eead4]"
      />
      <label className="mb-1 text-gray-700 dark:text-gray-200">Telefon Numaranız</label>
      <input
        type="tel"
        name="telefon"
        value={form.telefon}
        onChange={handleChange}
        placeholder="Telefon Numaranız"
        className="w-full p-3 border border-gray-400 rounded-xl bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5eead4]"
      />
      <label className="mb-1 text-gray-700 dark:text-gray-200">Mesajınız</label>
      <textarea
        name="mesaj"
        value={form.mesaj}
        onChange={handleChange}
        placeholder="Mesajınız"
        rows={5}
        required
        className="w-full p-3 border border-gray-400 rounded-xl bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5eead4]"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-4 bg-[#5eead4] text-[#232946] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#99f6e4] transition w-full"
      >
        {status === 'loading' ? 'Gönderiliyor...' : 'GÖNDER'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 mt-2">Mesajınız başarıyla gönderildi!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Gönderim başarısız oldu. Lütfen tekrar deneyin.</p>
      )}
    </form>
  );
}
