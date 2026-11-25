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

      console.log('1. Login indítása');

      const data = await loginUser({
        email,
        password
      });

      console.log('2. Backend adatok:', data);
      console.log('3. Kapott token:', data.token);
      console.log('4. Felhasználó:', data.user);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      console.log('5. Mentett token:', localStorage.getItem('token'));
      console.log('6. Mentett felhasználó:', localStorage.getItem('user'));

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
