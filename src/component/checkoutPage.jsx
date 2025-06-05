import React from "react";
import PaymentMethodCard from "../pages/paymentMethodCard";
import CheckoutSummary from "../pages/checkoutSummary";

const CheckoutPage = () => {
    return (
        <div style={styles.page}>
            <div style={styles.left}>
                <PaymentMethodCard
                    title="E-Wallet"
                    description="Transaksi mudah dengan akun e-wallet"
                    options={['OVO', 'GO-PAY']}
                />
                <PaymentMethodCard
                    title="Transfer Bank"
                    description="Lakukan transfer untuk proses verifikasi"
                    options={['BANK XYZ']}
                />
                <PaymentMethodCard
                    title="Transfer Virtual Account"
                    description="Transaksi otomatis"
                    options={['BANK MANDIRI', 'BANK BCA', 'BANK BNI', 'BANK BRI']}
                />
                <PaymentMethodCard
                    title="Kartu Kredit"
                    description="Transaksi dengan kartu kredit"
                    options={['VISA', 'MASTERCARD']}
                />
                <PaymentMethodCard
                    title="Minimarket"
                    description="Bayar di gerai terdekat"
                    options={['INDOMARET', 'ALFAMART']}
                />
            </div>

            <div style={styles.right}>
                <CheckoutSummary />
            </div>
        </div>
    );
};

const styles = {
    page: {
        display: 'flex',
        padding: '40px',
        gap: '40px',
        background: '#f7f7f7',
        color: '#fff',
        marginTop: '80px',
    },
    left: {
        flex: 3,
        color: '#333'
    },
    right: {
        flex: 1,
        position: 'sticky',
        top: '20px',
    }
};

export default CheckoutPage;