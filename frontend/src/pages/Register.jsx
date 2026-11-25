import { useState } from 'react';
import { AuthForm } from '../components/AuthForm.jsx';
import { registerUser } from '../services/auth.js';

const fields = [
  { name: 'nev', label: 'Teljes név', type: 'text', placeholder: 'A neved' },
  { name: 'emailcim', label: 'E-mail-cím', type: 'email', placeholder: 'nev@email.hu' },
  { name: 'jelszo', label: 'Jelszó', type: 'password', placeholder: 'Legalább 8 karakter' },
  { name: 'jelszo-ujra', label: 'Jelszó megerősítése', type: 'password', placeholder: 'Jelszó ismét' },
];

export const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event) => {
    //console.log("REGISZTRÁCIÓS ŰRLAP ELKÜLDVE!");
    event.preventDefault();
    const form = event.currentTarget;

    setError('');
    setSuccess('');

    const formData = new FormData(event.currentTarget);

    const name = formData.get('nev');
    const email = formData.get('emailcim');
    const password = formData.get('jelszo');
    const passwordAgain = formData.get('jelszo-ujra');

    if (password !== passwordAgain) {
      setError('A két jelszó nem egyezik!');
      return;
    }

    try {
      setLoading(true);

      const data = await registerUser({
        name,
        email,
        password
      });

      setSuccess(data.message || 'Sikeres regisztráció!');
      form.reset();

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm
      isRegister
      heading="CSATLAKOZZ AZ AFTR-HEZ"
      title="Fiók létrehozása"
      description="Készíts fiókot a későbbi funkciók kipróbálásához."
      fields={fields}
      button="Regisztráció"
      question="Van már fiókod?"
      link="/login"
      linkText="Bejelentkezés"
      onSubmit={handleRegister}
      error={error}
      success={success}
      loading={loading}
    />
  );
};
