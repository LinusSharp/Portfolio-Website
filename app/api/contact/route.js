import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, message, service } = await req.json();

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${email}>`,
      to: 'linuscolesharp@gmail.com',
      subject: `Contact Request from ${firstname} ${lastname}`,
      text: `Service: ${service}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // HTML body
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}
