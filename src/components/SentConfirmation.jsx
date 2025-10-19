import tickmarkIcon from '../assets/icons/tickmark.svg'

export default function SentConfirmation({ styles }) {
  return (
    <div style={styles.sentConfirmationContainer}>
      <img src={tickmarkIcon} alt='Sent!' style={styles.sentTickIcon} />
      <h2 style={styles.sentTitle}>Sent!</h2>
      <p style={styles.sentSubtitle}>Your message is out there</p>
    </div>
  )
}
