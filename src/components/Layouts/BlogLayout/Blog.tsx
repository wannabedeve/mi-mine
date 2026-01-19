'use client';

import { useState, useRef } from 'react';

export default function BlogLayout() {
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [shake, setShake] = useState(false);

    const lockBoxRef = useRef<HTMLDivElement | null>(null);

    // const correctPassword = '1234'; // fake password

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // if (password === correctPassword) {
        //     setAlertMessage('Unlocked!');
        //     setPassword('');
        //     setTimeout(() => setAlertMessage(''), 2000);
        // } else {
        setAlertMessage('Incorrect Password!');
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setPassword('');
        setTimeout(() => setAlertMessage(''), 3000);
        // }
    };

    return (
        <div style={styles.page}>
            <div style={styles.blurBackground} />

            <div
                ref={lockBoxRef}
                style={{
                    ...styles.lockBox,
                    animation: shake ? 'shake 0.5s' : undefined,
                }}
            >
                <div style={styles.avatar}>
                    <img
                        src="https://dummyimage.com/80x80/000/fff&text=User"
                        alt="User"
                        style={{ borderRadius: '50%' }}
                    />
                </div>
                <h2 style={styles.title}>Are You Khaled ?</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        autoFocus
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>
                        Unlock
                    </button>
                </form>
                {alertMessage && <div style={styles.alert}>{alertMessage}</div>}
            </div>

            {/* CSS Keyframes */}
            <style>
                {`
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
        `}
            </style>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        marginTop: '50px',
        position: 'relative',
    },
    blurBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0,0,0,0.1)',
        zIndex: 0,
        borderRadius: '12px',
    },
    lockBox: {
        position: 'relative',
        zIndex: 1,
        // backgroundColor: '#1c1c1c',
        // background: 'transparent',
        // padding: '40px 50px',
        // borderRadius: '16px',
        // boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
        // width: '70%',
        // textAlign: 'center',
        // color: '#fff',
        transition: 'all 0.3s',
    },
    avatar: {
        marginBottom: '20px',
    },
    title: {
        marginBottom: '16px',
        fontSize: '20px',
        letterSpacing: '0.5px',
        color: '#fff'
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid gray',
        fontSize: '16px',
        color: 'gray',
        marginBottom: '16px',
        outline: 'none',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        // backgroundColor: '#4caf50',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '16px',
    },
    alert: {
        marginTop: '16px',
        padding: '10px',
        // backgroundColor: '#ffcccc',
        color: '#900',
        borderRadius: '8px',
        fontWeight: 'bold',
    },
};
