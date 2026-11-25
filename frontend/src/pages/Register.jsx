import { AuthForm } from '../components/AuthForm.jsx';

const fields = [
  { name: 'nev', label: 'Teljes név', type: 'text', placeholder: 'A neved' },
  { name: 'emailcim', label: 'E-mail-cím', type: 'email', placeholder: 'nev@email.hu' },
  { name: 'jelszo', label: 'Jelszó', type: 'password', placeholder: 'Legalább 8 karakter' },
  { name: 'jelszo-ujra', label: 'Jelszó megerősítése', type: 'password', placeholder: 'Jelszó ismét' },
];

export const Register = () => (
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
  />
);
