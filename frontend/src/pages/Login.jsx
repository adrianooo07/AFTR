import { AuthForm } from '../components/AuthForm.jsx';

const fields = [
  { name: 'emailcim', label: 'E-mail-cím', type: 'email', placeholder: 'nev@email.hu' },
  { name: 'jelszo', label: 'Jelszó', type: 'password', placeholder: 'Jelszavad' },
];

export const Login = () => (
  <AuthForm
    heading="ÜDV ÚJRA"
    title="Bejelentkezés"
    description="Lépj be az AFTR felületére."
    fields={fields}
    button="Bejelentkezés"
    question="Még nincs fiókod?"
    link="/register"
    linkText="Regisztráció"
    note="Bemutatóverzió: az űrlap nem küld adatokat."
  />
);
