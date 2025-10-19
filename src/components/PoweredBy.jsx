import stoofersLogo from '../assets/stoofers.png'

export default function PoweredBy({ styles }) {
  return (
    <div style={styles.poweredBy}>
      <p style={styles.poweredByText}>powered by</p>
      <img src={stoofersLogo} alt='STFR Logo' style={styles.logo} />
    </div>
  )
}
