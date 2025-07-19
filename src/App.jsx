import React, { useState } from 'react';

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: '65%', left: '55%' });

  const moveNoButton = () => {
    const newTop = Math.floor(Math.random() * 130) + 10;
    const newLeft = Math.floor(Math.random() * 150) + 10;
    setNoPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        {!yesClicked ? (
          <>
            <h1 style={styles.question}>💍 Will You Marry Me? 💖</h1>
            <div style={styles.buttonGroup}>
              <button
                style={{ ...styles.button, ...styles.yes, position:'absolute' , top: '65%' ,left:'20%' }}
                onClick={() => setYesClicked(true)}
              >
                Yes 💘
              </button>
              <button
                onMouseEnter={moveNoButton}
                style={{
                  ...styles.button,
                  ...styles.no,
                  position: 'absolute',
                  top: noPosition.top,
                  left: noPosition.left,
                }}
              >
                No ❌
              </button>
            </div>
          </>
        ) : (
          <h1 style={styles.answer}>Yaaay!! I knew it 😍💍💖</h1>
        )}
      </div>
    </div>
  );
}

const styles = {
  background: {
    background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: `'Segoe UI', cursive`,
    transition: 'all 1s ease',
  },
  card: {
    backgroundColor: '#fff0f5',
    padding: '50px',
    borderRadius: '30px',
    boxShadow: '0 20px 50px rgba(255, 182, 193, 0.4)',
    textAlign: 'center',
    position: 'relative',
    minWidth: '320px',
    maxWidth: '500px',
    animation: 'fadeIn 2s ease',
  },
  question: {
    fontSize: '2rem',
    color: '#d81b60',
    marginBottom: '40px',
    transition: 'opacity 1s ease',
  },
  answer: {
    fontSize: '2rem',
    color: '#c2185b',
    animation: 'bounceIn 1s ease-in-out',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
  },
  yes: {
    backgroundColor: '#f48fb1',
    color: '#fff',
    boxShadow: '0 4px 20px rgba(244, 143, 177, 0.5)',
  },
  no: {
    backgroundColor: '#ffcccb',
    color: '#d32f2f',
    boxShadow: '0 4px 20px rgba(255, 105, 135, 0.4)',
  },
};

// ✨ Optional CSS animation (add this to index.css or inject using styled-components)
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounceIn {
  0% { transform: scale(0.8); opacity: 0; }
  60% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); }
}
*/

export default App;
