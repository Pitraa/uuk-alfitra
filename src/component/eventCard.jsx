import React from 'react';

const EventCard = () => (
  <div style={styles.card}>
    <div style={styles.cardLeft}><img src="./card.png" alt="event poster" style={styles.poster} /></div>
      
    <div style={styles.cardRight}>
      <div style={styles.badge}>OPEN</div>
      <h2 style={styles.title}>Earn Money Easily With Digital</h2>

      <div style={styles.cardDetails}>
        <div style={styles.section}>
          <p style={styles.sectionTitle}>Speaker</p>
          <p style={styles.text}>Ahmad Fatoni - Lead QA Engineer of DOT Indonesia</p>
          <p style={styles.text}>Fahmi Idris - Frontend Engineer Kata.ai</p>  
        </div>

        <div style={styles.verticalLine} />
          <div style={styles.section}>
            <p style={styles.sectionTitle}>Topics</p>
            <p style={styles.text}>
              Tips to keep productive for digiTalent<br /><br />
              Earn money at home<br /><br />
              Maximizing your digiTal Skills
            </p>
          </div>
        
        <div style={styles.verticalLine} />
          <div style={styles.section}>
            <p style={styles.sectionTitle}>Date and Time</p>
            <p style={styles.text}>
              Wednesday, 24th July 2020<br />
              13:00 WIB
            </p>
            <p style={{ ...styles.sectionTitle, marginTop: '16px' }}>Registration Fee</p>
            <p style={styles.text}>Rp. 0</p>
          </div>
      </div>
    </div>
  </div>
);

const styles = {
  card: {
    display: 'flex',
    background: '#fff',
    padding: '20px',
    maxWidth: '1100px',
    margin: '30px auto',
    marginBottom: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  cardLeft: {
    flex: '1',
    marginRight: '20px',
  },
  poster: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  cardRight: {
    flex: '2',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#8b8d6a',
    color: '#fff',
    padding: '6px 16px',
    borderBottomLeftRadius: '8px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  title: {
    color: '#a1872d',
    marginBottom: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  cardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#333',
  },
  section: {
    flex: 1,
    padding: '0 10px',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#96403d',
    marginBottom: '8px',
  },
  text: {
    color: '#333',
    lineHeight: '1.5',
  },
  verticalLine: {
    width: '1px',
    backgroundColor: '#ccc',
    margin: '0 10px',
  },
};

export default EventCard;
