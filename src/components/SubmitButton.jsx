export default function SubmitButton({
  sendAnswer,
  loading,
  answer,
  setButtonHovered,
  isMobile,
  styles,
}) {
  const getButtonStyle = () => ({
    ...styles.submitButton,
    ...(loading || !answer.trim()
      ? styles.submitButtonDisabled
      : {
          ...styles.submitButtonEnabled,
        }),
  })

  const buttonClass = !loading && answer.trim() ? 'pulse-animation' : ''

  return (
    <button
      onClick={sendAnswer}
      disabled={loading || !answer.trim()}
      style={getButtonStyle()}
      className={buttonClass}
      onMouseEnter={() => !isMobile && setButtonHovered(true)}
      onMouseLeave={() => setButtonHovered(false)}
      onFocus={() => setButtonHovered(true)}
      onBlur={() => setButtonHovered(false)}
      onTouchStart={() => setButtonHovered(true)}
      onTouchEnd={() => setTimeout(() => setButtonHovered(false), 150)}
    >
      {loading && (
        <span style={styles.loadingSpinner} className='loading-spinner'></span>
      )}
      {loading ? 'Sending your message...' : 'Send Anonymous Message'}
    </button>
  )
}
