// File: /app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { ad, soyad, email, telefon, mesaj, token } = await req.json();

    // 1. reCAPTCHA doğrulama
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ success: false, message: 'reCAPTCHA doğrulaması başarısız' }, { status: 400 });
    }
    console.log('reCAPTCHA doğrulaması başarılı:', verifyData);
    // reCAPTCHA doğrulaması başarılı

    // 2. E-posta gönderimi
    const emailResponse = await resend.emails.send({
      from: 'Dentaverax <hello@alanx.tr>',
      to: ['arslanalan.expert@gmail.com'],
      subject: 'Yeni İletişim Mesajı',
      html: `
        <h2>Yeni Mesaj</h2>
        <p><strong>Ad:</strong> ${ad}</p>
        <p><strong>Soyad:</strong> ${soyad}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Mesaj:</strong><br/>${mesaj}</p>
      `,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Gönderim başarısız', details: error }, { status: 500 });
  }
}
