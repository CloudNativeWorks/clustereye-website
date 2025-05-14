import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer yapılandırması - Bu bilgileri güvenli bir şekilde saklayın
// (örn: .env dosyasında)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.example.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'user@example.com',
    pass: process.env.EMAIL_PASSWORD || 'password',
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;
    
    // Form validasyonu
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'İsim, e-posta ve mesaj alanları zorunludur' },
        { status: 400 }
      );
    }

    // E-posta format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      );
    }

    // E-posta içeriği
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@clustereye.com',
      to: process.env.EMAIL_TO || 'info@clustereye.com',
      subject: `İletişim Formu: ${name}`,
      replyTo: email,
      text: `
İsim: ${name}
E-posta: ${email}
Şirket: ${company || 'Belirtilmemiş'}
Telefon: ${phone || 'Belirtilmemiş'}

Mesaj:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #6b46c1;">ClusterEye İletişim Formu</h2>
  <p><strong>İsim:</strong> ${name}</p>
  <p><strong>E-posta:</strong> ${email}</p>
  <p><strong>Şirket:</strong> ${company || 'Belirtilmemiş'}</p>
  <p><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #6b46c1;">
    <p style="margin-top: 0;"><strong>Mesaj:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  </div>
</div>
      `
    };

    try {
      // Nodemailer yapılandırması doğruysa e-postayı gönder
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        await transporter.sendMail(mailOptions);
      } else {
        // Yapılandırma eksikse sadece loglama yapılır (test/geliştirme için)
        console.log('E-posta gönderimi simüle edildi:', mailOptions);
      }
      
      // Başarılı yanıt
      return NextResponse.json(
        { success: true, message: 'Mesajınız başarıyla gönderildi' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('E-posta gönderimi hatası:', emailError);
      return NextResponse.json(
        { error: 'E-posta gönderilirken bir hata oluştu' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Form gönderimi hatası:', error);
    return NextResponse.json(
      { error: 'Mesajınız gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 