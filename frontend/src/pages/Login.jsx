
import { useState } from 'react';
import { AuthForm } from '../components/AuthForm.jsx';
import { loginUser } from '../services/auth.js';

const fields = [
  { name: 'emailcim', label: 'E-mail-cím', type: 'email', placeholder: 'nev@email.hu' },
  { name: 'jelszo', label: 'Jelszó', type: 'password', placeholder: 'Jelszavad' },
];

export const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setError('');
    setSuccess('');

    const email = formData.get('emailcim');
    const password = formData.get('jelszo');

    try {
      setLoading(true);

      console.log('Login indítása...');

      const data = await loginUser({
        email,
        password
      });

      console.log('Backend adatok:', data);
      console.log('Kapott token:', data.token);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      console.log('Mentett token:', localStorage.getItem('token'));

      setSuccess(data.message || 'Sikeres bejelentkezés!');
      form.reset();

    } catch (error) {
      console.error('Login hiba:', error);
      setError(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      heading="ÜDV ÚJRA"
      title="Bejelentkezés"
      description="Lépj be az AFTR felületére."
      fields={fields}
      button="Bejelentkezés"
      question="Még nincs fiókod?"
      link="/register"
      linkText="Regisztráció"
      onSubmit={handleLogin}
      error={error}
      success={success}
      loading={loading}
    />
  );
};
