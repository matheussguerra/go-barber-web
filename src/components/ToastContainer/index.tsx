import React from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} hasDescription={}>
          <FiAlertCircle size={20} />
          <div>
            <strong>Aconteceu um erro</strong>
            <p>Não foi possível fazer o login na aplicação</p>
          </div>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
