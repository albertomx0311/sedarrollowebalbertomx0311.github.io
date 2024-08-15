import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRecovery = async (e) => {
    e.preventDefault();
    // Aquí puedes implementar el envío del correo con Nodemailer
    console.log('Recuperar contraseña para:', email);
    setMessage('Se ha enviado un correo de recuperación a ' + email);
  };

  return (
    <div className="container">
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleRecovery}>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar Correo</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordRecovery;
