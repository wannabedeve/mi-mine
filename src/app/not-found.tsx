'use client'

import { Handshake } from "lucide-react";

// app/not-found.tsx
export default function NotFound() {
    return (
        <div
            style={{
                position: 'relative', // make sure it's above the background
                zIndex: 10,           // higher than animation
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <div>Khaled AlKharashi's Profile Greeting You <Handshake /> </div>
            <h1 style={{ fontSize: '5rem', marginBottom: '1rem' }}>404</h1>
            <p style={{ marginBottom: '2rem' }}>Page not found</p>
            <a
                href="/"
                style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#38bdf8',
                    borderRadius: '8px',
                    color: '#020617',
                    textDecoration: 'none',
                    fontWeight: 600,
                }}
            >
                Go Home
            </a>
        </div>
    );
}
