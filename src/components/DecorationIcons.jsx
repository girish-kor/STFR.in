import msgIcon from '../assets/icons/message.svg'
import sLeftIcon from '../assets/icons/spring-left.svg'
import sRightIcon from '../assets/icons/spring-right.svg'

export default function DecorationIcons({ styles }) {
  return (
    <>
      <img src={sLeftIcon} alt='' style={styles.sLeftIcon} />
      <img src={sRightIcon} alt='' style={styles.sRightIcon} />
      <img src={msgIcon} alt='' style={styles.msgIconLeft} />
      <img src={msgIcon} alt='' style={styles.msgIconRight} />
    </>
  )
}
