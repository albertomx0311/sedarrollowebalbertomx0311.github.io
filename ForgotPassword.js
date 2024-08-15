import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { auth } from '../firebase'; // Importa la configuración de Firebase
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Se ha enviado un enlace de restablecimiento de contraseña a tu correo electrónico.');
    } catch (error) {
      console.error('Error al enviar el correo de restablecimiento:', error);
      setMessage('Error al enviar el correo de restablecimiento.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Recuperar Contraseña</h2>
          <Form onSubmit={handleForgotPassword}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar Enlace de Recuperación
            </Button>
          </Form>
          {message && <p className="mt-3">{message}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
