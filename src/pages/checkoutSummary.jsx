import React, { useState } from "react";

const CheckoutSummary = () => {
    const [price] = useState(''); // Harga awal, bisa diganti sesuai kebutuhan
    const [discount, setDiscount] = useState(0);
    const [voucherCode, setVoucherCode] = useState("");
    const [voucherApplied, setVoucherApplied] = useState(false);
    const [error, setError] = useState("");

    const handleUseVoucher = () => {
        if (voucherApplied) {
            setError("Voucher sudah digunakan.");
            return;
        }

        if (voucherCode.toUpperCase() === "DISKON50") {
            const diskon = price * 0.5;
            setDiscount(diskon);
            setVoucherApplied(true);
            setError("");
        } else {
            setError("Kode voucher tidak valid.");
            setDiscount(0);
        }
    };

    const totalPayment = price - discount;

    return (
        <div style={styles.summary}>
            <h4 style={styles.heading}>Total Price</h4>
            <p style={styles.text}>Price: Rp. {price.toLocaleString()}</p>
            <p style={styles.text}>Discount: Rp. {discount.toLocaleString()}</p>
            <p style={styles.text}>Voucher: {voucherApplied ? voucherCode.toUpperCase() : "-"}</p>

            <div style={styles.voucherContainer}>
                <input
                    type="text"
                    placeholder="Input voucher code"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    style={styles.input}
                    disabled={voucherApplied}
                />
                <button style={styles.useButton} onClick={handleUseVoucher} disabled={voucherApplied}>
                    Use
                </button>
            </div>

            {error && <p style={{ color: 'red', marginTop: '-10px' }}>{error}</p>}

            <p style={{ ...styles.text, fontWeight: 'bold' }}>
                Total Payment: Rp. {totalPayment.toLocaleString()}
            </p>
            <button style={styles.checkoutButton} onClick={() => alert("Pembayaran berhasil!")}>
                Bayar Course
            </button>
        </div>
    );
};

const styles = {
    summary: {
        border: '2px solid #d9d9d9',
        padding: '20px',
        borderRadius: '8px',
        background: '#fff',
        color: '#333',
    },
    heading: {
        marginBottom: '10px',
        color: '#333',
    },
    text: {
        color: '#333',
        margin: '5px 0',
    },
    voucherContainer: {
        margin: '20px 0',
        display: 'flex',
        gap: '10px',
    },
    input: {
        flex: 1,
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        color: '#000',
        backgroundColor: '#fff',
    },
    useButton: {
        padding: '8px 16px',
        background: '#c9a343',
        border: 'none',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    checkoutButton: {
        width: '100%',
        marginTop: '20px',
        padding: '10px',
        background: '#c9a343',
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '4px',
    },
};

export default CheckoutSummary;
