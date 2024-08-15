import React, { useState } from 'react';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    console.log('Nuevo Password:', newPassword);
    // Aquí puedes agregar la lógica para actualizar la contraseña
    setMessage('Contraseña actualizada con éxito.');
  };

  return (
    <div className="container">
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleReset}>
        <div className="mb-3">
          <label className="form-label">Nueva Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Restablecer Contraseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordReset;
