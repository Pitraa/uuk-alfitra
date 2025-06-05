import React from "react";

const PaymentMethodCard = ({ title, description, options }) => (
    <div style={styles.card}>
        <h4>{title}</h4>
        <p>{description}</p>
        {options.map((option, i) => (
            <div key={i} style={styles.option}>
                <input type="radio" id={option} name={title} />
                <label htmlFor={option} style={styles.label}>{option}</label>
            </div>
        ))}
    </div>
);

const styles = {
    card: {
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '20px',
    },
    option: {
        marginTop: '10px',
        backgroundColor: '#fff',
        color: '#333',
        border: '1px solid #ccc',
        padding: '10px 15px',
        borderRadius: '6px',
        marginBottom: '10px',
        cursor: 'pointer',
        width: 'auto',
        textAlign: 'left',

    },
    label: {
        marginLeft: '8px',
    },
};

export default PaymentMethodCard;