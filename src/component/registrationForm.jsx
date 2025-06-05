import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegistrationForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        phone: '',
        job: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, birthDate, gender, email, phone, job } = formData;

        if (!firstName || !lastName || !birthDate || !gender || !email || !phone || !job) {
            alert("Semua field wajib diisi.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Email tidak valid.");
            return;
        }

        navigate('/checkout');
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.header}>Event Registration</h3>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.row}>
                    <input
                        name="firstName"
                        style={styles.input}
                        type="text"
                        placeholder="Nama Depan"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        name="lastName"
                        style={styles.input}
                        type="text"
                        placeholder="Nama Belakang"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.row}>
                    <input
                        name="birthDate"
                        style={styles.input}
                        type="date"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                    <select
                        name="gender"
                        style={styles.input}
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
                <input
                    name="email"
                    style={styles.input}
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    name="phone"
                    style={styles.input}
                    type="tel"
                    placeholder="No. Telp"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    name="job"
                    style={styles.input}
                    type="text"
                    placeholder="Pekerjaan"
                    value={formData.job}
                    onChange={handleChange}
                />
                <button type="submit" style={styles.submit}>Daftar Sekarang</button>
            </form>
        </div>
    );
};

const styles = {
    header: {
        color: 'black',
    },
    container: {
        background: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    row: {
        display: 'flex',
        gap: '20px',
    },
    submit: {
        backgroundColor: 'white',
        border: '1px solid #c9a343',
        padding: '10px',
        color: '#c9a343',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    input: {
        flex: 1,
        padding: '10px 14px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none',
        backgroundColor: '#fff',
        color: '#333',
        fontFamily: 'inherit',
        boxShadow: 'none',
        appearance: 'none'
    }
};

export default RegistrationForm;
