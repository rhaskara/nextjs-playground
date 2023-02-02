import React from 'react';
import { ErrorComponentProps } from '../../utilities/interface';
import { ErrorContainer, ErrorText, ReloadButton } from './styles';

const ErrorComponent = ({ message = 'Error: Something Went Wrong' }: ErrorComponentProps) => {
  const handleReload = () => {
    window.location.reload();
  }

  return (<ErrorContainer>
    <ErrorText data-testid="error-message">{message}</ErrorText>
    <ReloadButton data-testid="error-reload-button" onClick={handleReload}>Reload</ReloadButton>
  </ErrorContainer>)
};

export default ErrorComponent;