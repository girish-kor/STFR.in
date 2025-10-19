// theme.js
// Centralized theme for all styles

export function getStyles({
  isMobile,
  isTablet,
  isDesktop,
  cardHovered,
  textareaFocused,
  buttonHovered,
}) {
  return {
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: isMobile ? '16px' : isTablet ? '24px' : '32px',
      color: 'white',
      boxSizing: 'border-box',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      overflow: 'hidden',
      position: 'relative',
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: isMobile
        ? '100%'
        : isTablet
        ? '480px'
        : isDesktop
        ? '640px'
        : '600px',
      position: 'relative',
      marginBottom: isMobile ? '120px' : isTablet ? '100px' : '90px',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform:
        cardHovered && !isMobile ? 'translateY(-4px)' : 'translateY(0)',
    },
    cardBorder: {
      width: '100%',
      border: `${isMobile ? '2px' : isTablet ? '2.5px' : '3px'} solid #ffffff`,
      borderRadius: isMobile ? '20px' : isTablet ? '24px' : '28px',
      position: 'relative',
      backgroundColor: 'transparent',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
      filter:
        cardHovered && !isMobile
          ? 'drop-shadow(0 8px 32px rgba(255, 255, 255, 0.15))'
          : 'none',
    },
    cardContent: {
      width: '100%',
      backgroundColor: '#C8FF32',
      borderRadius: isMobile ? '16px' : isTablet ? '20px' : '24px',
      position: 'relative',
      transform: isMobile
        ? 'translate(-4px, -4px)'
        : isTablet
        ? 'translate(-5px, -5px)'
        : 'translate(-6px, -6px)',
      overflow: 'hidden',
      boxShadow: isMobile
        ? '4px 4px 0px rgba(255, 255, 255, 0.15)'
        : isTablet
        ? '5px 5px 0px rgba(255, 255, 255, 0.15)'
        : '6px 6px 0px rgba(255, 255, 255, 0.15)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    userHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: isMobile ? '12px' : isTablet ? '14px' : '16px',
      padding: isMobile
        ? '20px 20px 16px 20px'
        : isTablet
        ? '24px 24px 20px 24px'
        : '28px 28px 24px 28px',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    avatar: {
      width: isMobile ? '40px' : isTablet ? '44px' : '48px',
      height: isMobile ? '40px' : isTablet ? '44px' : '48px',
      borderRadius: '50%',
      flexShrink: 0,
      border: '2px solid rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      transform:
        cardHovered && !isMobile
          ? 'scale(1.08) rotate(2deg)'
          : 'scale(1) rotate(0deg)',
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0,
    },
    username: {
      color: '#414141',
      fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
      fontWeight: '600',
      margin: '0 0 8px 0',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    question: {
      color: '#000000',
      fontWeight: '700',
      fontSize: isMobile ? '15px' : isTablet ? '16px' : '18px',
      margin: 0,
      lineHeight: '1.4',
      wordWrap: 'break-word',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      letterSpacing: '0.3px',
    },
    answerSection: {
      borderRadius: isMobile
        ? '0 0 14px 14px'
        : isTablet
        ? '0 0 18px 18px'
        : '0 0 22px 22px',
      padding: '0',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: textareaFocused ? 'scale(1.01)' : 'scale(1)',
      backgroundColor: textareaFocused ? '#ffffff' : '#f5f5f5',
      boxShadow: textareaFocused
        ? 'inset 0 0 0 2px rgba(0, 232, 31, 0.3)'
        : 'none',
    },
    textarea: {
      width: '100%',
      padding: isMobile ? '20px' : isTablet ? '24px' : '28px',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: '#000000',
      resize: 'vertical',
      borderRadius: isMobile
        ? '0 0 14px 14px'
        : isTablet
        ? '0 0 18px 18px'
        : '0 0 22px 22px',
      fontSize: isMobile ? '15px' : isTablet ? '16px' : '17px',
      fontFamily: 'inherit',
      lineHeight: '1.6',
      minHeight: isMobile ? '80px' : isTablet ? '90px' : '100px',
      maxHeight: isMobile ? '160px' : isTablet ? '200px' : '240px',
      boxSizing: 'border-box',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fontWeight: '500',
      letterSpacing: '0.3px',
    },
    footer: {
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: isMobile
        ? '0 20px 24px 20px'
        : isTablet
        ? '0 24px 28px 24px'
        : '0 32px 32px 32px',
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    submitButton: {
      padding: isMobile ? '16px 24px' : isTablet ? '18px 28px' : '20px 32px',
      fontSize: isMobile ? '15px' : isTablet ? '16px' : '17px',
      fontWeight: '700',
      border: 'none',
      borderRadius: isMobile ? '24px' : isTablet ? '28px' : '32px',
      width: '100%',
      maxWidth: isMobile
        ? '100%'
        : isTablet
        ? '480px'
        : isDesktop
        ? '640px'
        : '600px',
      marginBottom: isMobile ? '16px' : '20px',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      cursor: 'pointer',
      outline: 'none',
      letterSpacing: '0.5px',
      position: 'relative',
      overflow: 'hidden',
    },
    submitButtonEnabled: {
      backgroundColor: '#C8FF32',
      color: '#000000',
      boxShadow: '0 8px 24px rgba(0, 232, 31, 0.4)',
      transform: buttonHovered
        ? 'translateY(-2px) scale(1.02)'
        : 'translateY(0) scale(1)',
    },
    submitButtonDisabled: {
      backgroundColor: '#ffffffff',
      color: '#000000',
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'translateY(0) scale(1)',
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '8px',
    },
    poweredBy: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      transform: cardHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
    },
    poweredByText: {
      fontSize: isMobile ? '11px' : '12px',
      color: '#c4c4c4',
      margin: 0,
      fontWeight: '500',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      letterSpacing: '0.5px',
    },
    logo: {
      width: isMobile ? '65px' : isTablet ? '70px' : '75px',
      height: 'auto',
      borderRadius: '10px',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      filter: cardHovered && !isMobile ? 'brightness(1.1)' : 'brightness(1)',
    },
    msgIconLeft: {
      position: 'absolute',
      left: isMobile ? '-15px' : isTablet ? '-20px' : '-25px',
      bottom: '30%',
      width: isMobile ? '50px' : isTablet ? '60px' : '70px',
      height: 'auto',
      zIndex: 1,
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: `rotate(-35deg) ${
        cardHovered && !isMobile ? 'scale(1.1)' : 'scale(1)'
      }`,
    },
    msgIconRight: {
      position: 'absolute',
      right: isMobile ? '-15px' : isTablet ? '-20px' : '-25px',
      bottom: '20%',
      width: isMobile ? '50px' : isTablet ? '60px' : '70px',
      height: 'auto',
      zIndex: 1,
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: `rotate(215deg) ${
        cardHovered && !isMobile ? 'scale(1.1)' : 'scale(1)'
      }`,
    },
    starIconLeft: {
      position: 'absolute',
      left: isMobile ? '50px' : '70px',
      bottom: isMobile ? '-25px' : '-30px',
      width: isMobile ? '40px' : isTablet ? '45px' : '50px',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform:
        cardHovered && !isMobile
          ? 'rotate(180deg) scale(1.2)'
          : 'rotate(0deg) scale(1)',
      opacity: 0.9,
    },
    starIconRight: {
      position: 'absolute',
      right: isMobile ? '-10px' : '-15px',
      top: '-20px',
      width: isMobile ? '40px' : isTablet ? '45px' : '50px',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform:
        cardHovered && !isMobile
          ? 'rotate(-180deg) scale(1.2)'
          : 'rotate(0deg) scale(1)',
      opacity: 0.9,
    },
    sLeftIcon: {
      position: 'absolute',
      top: '10%',
      left: isMobile ? '-80px' : isTablet ? '-90px' : '-100px',
      width: isMobile ? '200px' : isTablet ? '250px' : '300px',
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      opacity: isMobile ? 0.5 : 0.7,
      transform:
        cardHovered && !isMobile ? 'translateX(10px)' : 'translateX(0px)',
    },
    sRightIcon: {
      position: 'absolute',
      bottom: '20%',
      right: isMobile ? '-80px' : isTablet ? '-90px' : '-100px',
      width: isMobile ? '200px' : isTablet ? '250px' : '300px',
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      opacity: isMobile ? 0.5 : 0.7,
      transform:
        cardHovered && !isMobile ? 'translateX(10px)' : 'translateX(0px)',
    },
    sentConfirmationContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '320px',
      width: '100%',
      padding: isMobile
        ? '40px 0 60px 0'
        : isTablet
        ? '60px 0 80px 0'
        : '80px 0 100px 0',
      background: 'transparent',
      position: 'relative',
      zIndex: 2,
    },
    sentTickIcon: {
      width: isMobile ? '70px' : isTablet ? '80px' : '90px',
      height: 'auto',
      marginBottom: isMobile ? '18px' : '22px',
      display: 'block',
    },
    sentTitle: {
      color: '#C8FF32',
      fontSize: isMobile ? '2rem' : isTablet ? '2.2rem' : '2.5rem',
      fontWeight: 800,
      margin: 0,
      marginBottom: isMobile ? '8px' : '12px',
      textAlign: 'center',
      letterSpacing: '1px',
    },
    sentSubtitle: {
      color: '#7f7f7fff',
      fontSize: isMobile ? '1.1rem' : isTablet ? '1.2rem' : '1.3rem',
      fontWeight: 500,
      margin: 0,
      textAlign: 'center',
      letterSpacing: '0.5px',
      marginBottom: isMobile ? '18px' : '22px',
    },
    sendAnotherButton: {
      marginBottom: isMobile ? '10px' : '16px',
      width: '100%',
      padding: isMobile ? '12px 24px' : isTablet ? '14px 28px' : '16px 32px',
      fontSize: isMobile ? '15px' : isTablet ? '16px' : '17px',
      fontWeight: 700,
      border: 'none',
      borderRadius: isMobile ? '20px' : isTablet ? '24px' : '28px',
      backgroundColor: '#C8FF32',
      color: '#000',
      cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(0, 232, 31, 0.15)',
      transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
      letterSpacing: '0.5px',
      outline: 'none',
    },
  }
}
