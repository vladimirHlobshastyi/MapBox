import React from 'react';
import PWAPrompt from 'react-ios-pwa-prompt';

const ModalPWA = () => {
  return (
    <PWAPrompt
      promptOnVisit={1}
      timesToShow={5}
      delay={3000}
      permanentlyHideOnDismiss={false}
      copyTitle={'Встановити додаток на смартфон'}
      copyBody={
        'Ви маєте можливість встановити сайт "повітрянніх тривог" як додаток на ваш смартфон.'
      }
      copyShareButtonLabel={
        'Натисніть іконку "Поділитися" у строці меню унизу.'
      }
      copyAddHomeButtonLabel={'Натисніть "Додати на головний екран".'}
      copyClosePrompt={'Зачинити'}
    />
  );
};

export default ModalPWA;
