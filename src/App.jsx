import { useEffect, useState } from 'react';
import { getStyles } from './theme';

import DecorationIcons from './components/DecorationIcons';
import MainCard from './components/MainCard';
import PoweredBy from './components/PoweredBy';
import SentConfirmation from './components/SentConfirmation';
import SubmitButton from './components/SubmitButton';

import './global.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [question, setQuestion] = useState('Loading question...');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sent, setSent] = useState(false);

  // Get styles from theme.js
  const styles = getStyles({
    isMobile,
    isTablet,
    isDesktop,
    cardHovered,
    textareaFocused,
    buttonHovered,
  });

  useEffect(() => {
    const path = window.location.pathname;
    const user = path.split('/').filter(Boolean)[0] || 'XYZ';
    setUsername(user);
    fetchQuestion(user);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const fetchQuestion = async (user) => {
    try {
      const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://localhost:8080/api/web/v1/question/${encodeURIComponent(user)}`
      )}`;

      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const proxyResponse = await res.json();
      const responseText = proxyResponse.contents;
      const data = JSON.parse(responseText);
      const questionText = data.data?.question || 'Send me anonymous messages!';
      setQuestion(questionText);
    } catch (error) {
      console.error('Error fetching question:', error);
      setQuestion('Send me anonymous messages!');
    }
  };

  const sendAnswer = async () => {
    if (!answer.trim()) {
      return;
    }

    setLoading(true);

    try {
      const targetUrl = `http://localhost:8080/api/web/v1/question/${encodeURIComponent(
        username
      )}/answer/`;

      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
      const requestBody = { answer: answer.trim() };

      const response = await fetch(proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setAnswer('');
      setIsTyping(false);
      setSent(true);
      // alert('Answer sent successfully!')
    } catch (error) {
      console.error('Error sending answer:', error);
      alert('Failed to send answer. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <>
      <main style={styles.main}>
        <DecorationIcons styles={styles} />
        {sent ? (
          <SentConfirmation styles={styles} onSendAnother={() => setSent(false)} />
        ) : (
          <MainCard
            username={username}
            question={question}
            answer={answer}
            handleAnswerChange={handleAnswerChange}
            isTyping={isTyping}
            setTextareaFocused={setTextareaFocused}
            cardHovered={cardHovered}
            setCardHovered={setCardHovered}
            isMobile={isMobile}
            isTablet={isTablet}
            styles={styles}
          />
        )}
        <footer style={styles.footer}>
          {!sent && (
            <SubmitButton
              sendAnswer={sendAnswer}
              loading={loading}
              answer={answer}
              setButtonHovered={setButtonHovered}
              isMobile={isMobile}
              styles={styles}
            />
          )}
          {sent && (
            <button style={styles.sendAnotherButton} onClick={() => setSent(false)} type="button">
              Send another message
            </button>
          )}
          <PoweredBy styles={styles} />
        </footer>
      </main>
    </>
  );
}
