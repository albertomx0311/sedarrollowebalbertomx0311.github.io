// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambia esto según el servicio de correo que uses
  auth: {
    user: 'aronyarale@gmail.com', // Tu correo electrónico
    pass: 'cxly xuqy kdql piav', // Tu contraseña o contraseña de aplicación
  },
});

// Endpoint para enviar el correo de recuperación
app.post('/send-recovery-email', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'florescastroaaronisrael@gmail.com',
    to: 'aronyarale',
    subject: 'Recuperación de Contraseña',
    text: 'Haz clic en el siguiente enlace para restablecer tu contraseña: localhost:3001/reset-password?token=some_token',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error al enviar el correo');
    }
    res.status(200).send('Correo enviado');
  });
});

// Configura el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
