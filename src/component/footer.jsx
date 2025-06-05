import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.grid}>
      <div>
        <img src="/LogoSMALL.png" alt="Logo" height="50" /><br />
        Providing, Complementing
      </div>
      <div>
        <b>Sitemap</b><br />
        Skill Dev<br />digiTalent Hub<br />Events<br />Course<br />About<br />Sign In
      </div>
      <div>
        <b>Address</b><br />
        Jl. Brawijaya No.63A, Ketawanggede, Lowokwaru<br />Kota Malang, Jawa Timur 65149
      </div>
      <div>
        <b>Contact</b><br />
        +62xxxxxxxxxx<br />
        rakryan@gmail.com
      </div>
      <div>
        <b>Operational Hours</b><br />
        Monday - Friday<br />08:00 - 16:00
      </div>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#252525', color: '#fff', padding: '40px',
    fontSize: '14px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px',
  }
};

export default Footer;
