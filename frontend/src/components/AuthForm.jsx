import { Link } from 'react-router-dom';
import { FormButton, FormField } from './FormField.jsx';

export const AuthForm = ({
  isRegister = false,
  heading,
  title,
  description,
  fields,
  button,
  question,
  link,
  linkText,
  note,
  onSubmit,
  error,
  success,
  loading = false
}) => {
  const pagePadding = isRegister ? 'pt-[25px] pb-[50px]' : 'pt-[35px] pb-[65px]';
  const cardSize = isRegister
    ? 'max-w-[440px] px-[34px] py-[30px] [@media(max-width:480px)]:py-6'
    : 'max-w-[420px] p-[34px] [@media(max-width:480px)]:py-[25px]';
  const titleSize = isRegister ? 'text-[30px]' : 'text-[32px]';

  return (
    <main className={`flex min-h-[calc(100vh-78px)] items-center justify-center px-5 ${pagePadding}`}>
      <section className={`w-full rounded-xl border border-solid border-edge bg-panel [@media(max-width:480px)]:px-5 ${cardSize}`}>
        <p className="text-[12px] font-bold tracking-[2px] text-highlight">{heading}</p>
        <h1 className={`my-2 ${titleSize}`}>{title}</h1>
        <p className="text-[14px] text-muted">{description}</p>

        <form onSubmit={onSubmit} className={`flex flex-col ${isRegister ? 'mt-4' : 'mt-[25px]'}`}>
          {fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              labelSpacing={isRegister ? 'mt-2.5 mb-1.5' : 'mt-[13px] mb-[7px]'}
              inputPadding={isRegister ? 'py-[11px]' : 'py-3'}
            />
          ))}

          <FormButton
            margin={isRegister ? 'mt-5' : 'mt-[22px]'}
            disabled={loading}
          >
            {loading ? 'Feldolgozás...' : button}
          </FormButton>
        </form>

        {error && (
          <p className="mt-3 text-center text-sm text-red-500">{error}</p>
        )}

        {success && (
          <p className="mt-3 text-center text-sm text-green-500">{success}</p>
        )}

        <p className={`text-center text-[14px] text-muted ${isRegister ? 'mt-5' : 'mt-[23px]'}`}>
          {question} <Link className="text-highlight" to={link}>{linkText}</Link>
        </p>

        <p className="text-center text-[11px] text-muted">{note}</p>
      </section>
    </main>
  );
};
