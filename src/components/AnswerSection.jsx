export default function AnswerSection({
  answer,
  handleAnswerChange,
  isTyping,
  setTextareaFocused,
  isMobile,
  isTablet,
  styles,
}) {
  return (
    <div style={styles.answerSection}>
      <textarea
        value={answer}
        onChange={handleAnswerChange}
        placeholder='Type your message..'
        rows={isMobile ? 2 : isTablet ? 3 : 3}
        maxLength={1000}
        style={styles.textarea}
        className={isTyping ? 'typing-animation' : ''}
        onFocus={() => setTextareaFocused(true)}
        onBlur={() => setTextareaFocused(false)}
      />
    </div>
  )
}
