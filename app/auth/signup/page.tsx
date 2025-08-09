'use client';

import styles from './login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };
  
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title}>Crear usuario</h1>
          <div>
            <label htmlFor="name">Nombre completo</label>
            <input
              id="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>

          <div>
            <label htmlFor="username">Nombre de usuario</label>
            <input
              id="username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>

          <button type="submit" className={styles.button}>Entrar</button>
        </form>
      </div>
    </div>
  );

}