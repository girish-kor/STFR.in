export default function UserHeader({ username, question, styles }) {
  return (
    <div style={styles.userHeader}>
      <img
        src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(
          username
        )}`}
        alt={`Avatar for ${username}`}
        style={styles.avatar}
      />
      <div style={styles.userInfo}>
        <p style={styles.username}>@{username}</p>
        <p style={styles.question}>{question}</p>
      </div>
    </div>
  )
}
