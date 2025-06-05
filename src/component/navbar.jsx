import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <img src="/rakryan.png" alt="logo" style={{ height: '40px', width: 'auto' }} />
            </div>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.navLink}>Home</Link>
                <a href="#" style={styles.navLink}>Skill Dev</a>
                <a href="#" style={styles.navLink}>digiTalent Hub</a>
                <a href="#" style={styles.navLink}>Events</a>
                <Link to="/checkout" style={styles.navLink}>Course</Link>
                <a href="#" style={styles.navLink}>About</a>
            </div>
            <div style={styles.profile}><a href="#">Latif</a></div>
        </nav>
    );
    
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px',
        backgroundColor: '#fff',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '60px',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    logo: {
        flex: '1',
        display: 'flex',
        alignItems: 'center',
    },
    navLinks: {
        display: 'flex',
        gap: '20px',
        left: '70%',
        transform: 'translateX(-50%)',
        fontSize: '14px',
    },
    profile: {
        color: 'green',
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '500',
        alignItems: 'center',
    }
};

export default Navbar;