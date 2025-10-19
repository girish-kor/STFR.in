import starIcon from '../assets/icons/star.svg'
import AnswerSection from './AnswerSection'
import UserHeader from './UserHeader'

export default function MainCard({
  username,
  question,
  answer,
  handleAnswerChange,
  isTyping,
  setTextareaFocused,
  cardHovered,
  setCardHovered,
  isMobile,
  isTablet,
  styles,
}) {
  const getCardBorderStyle = () => ({
    ...styles.cardBorder,
    ...(cardHovered &&
      !isMobile && {
        transform: 'scale(1.02)',
      }),
  })

  return (
    <section style={styles.cardContainer}>
      <img
        src={starIcon}
        alt=''
        style={styles.starIconRight}
        className='spin-animation'
      />
      <div
        style={getCardBorderStyle()}
        onMouseEnter={() => !isMobile && setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        onTouchStart={() => isMobile && setCardHovered(true)}
        onTouchEnd={() =>
          isMobile && setTimeout(() => setCardHovered(false), 150)
        }
      >
        <div style={styles.cardContent}>
          <UserHeader username={username} question={question} styles={styles} />
          <AnswerSection
            answer={answer}
            handleAnswerChange={handleAnswerChange}
            isTyping={isTyping}
            setTextareaFocused={setTextareaFocused}
            isMobile={isMobile}
            isTablet={isTablet}
            styles={styles}
          />
        </div>
      </div>
      <img
        src={starIcon}
        alt=''
        style={styles.starIconLeft}
        className='spin-animation'
      />
    </section>
  )
}
