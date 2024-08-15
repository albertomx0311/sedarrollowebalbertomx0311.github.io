// mailer.js
const nodemailer = require('nodemailer');

// Configuración del transportador
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar otro servicio como 'Yahoo', 'Outlook', etc.
  auth: {
    user: 'aronyarale@gmail.com', // Tu correo electrónico
    pass: 'cxly xuqy kdql piav', // Tu contraseña de la aplicación o contraseña
  },
});

// Función para enviar un correo electrónico
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'florescastroaaronisrael@gmail.com',
    to: 'aronyarale@gmail.com',
    subject: 'prueba',
    text: 'contraseña',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

module.exports = { sendEmail };
