import React from 'react';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: '', stack: '' },
    info: { componentStack: '' },
  };

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    console.log(error, info);
    const { children } = this.props;

    return hasError ? <ErrorComponent typeError={'technical'} /> : children;
  }
}

export default ErrorBoundary;
