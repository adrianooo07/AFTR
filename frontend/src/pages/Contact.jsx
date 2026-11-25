import { FormButton, FormField } from '../components/FormField.jsx';

const fields = [
  { name: 'nev', label: 'Név', type: 'text', placeholder: 'Teljes neved' },
  { name: 'emailcim', label: 'E-mail-cím', type: 'email', placeholder: 'nev@email.hu' },
  { name: 'targy', label: 'Tárgy', type: 'text', placeholder: 'Miről írnál?' },
  { name: 'uzenet', label: 'Üzenet', rows: 5, placeholder: 'Írd ide az üzeneted...' },
];

export const Contact = () => (
  <main className="mx-auto grid max-w-[1080px] grid-cols-2 items-start gap-[55px] px-6 pt-[55px] pb-[75px] [@media(max-width:720px)]:grid-cols-1 [@media(max-width:720px)]:gap-[30px] [@media(max-width:720px)]:pt-[35px]">
    <section>
      <p className="text-[12px] font-bold tracking-[2px] text-highlight">KAPCSOLAT</p>
      <h1 className="mt-2 mb-[14px] text-[clamp(36px,5vw,52px)] leading-[1.1]">Van kérdésed?</h1>
      <p className="text-muted">
        Írj nekünk az AFTR projekttel kapcsolatban. Ez a felület jelenleg bemutatóverzió, ezért az űrlap még nem küld üzenetet.
      </p>
      <div className="mt-9 border-t border-edge pt-[18px]">
        <h2 className="mt-0 text-[22px]">Elérhetőségek</h2>
        <p className="[overflow-wrap:anywhere] text-[14px] text-muted"><strong>E-mail:</strong> aftr.projekt@example.com</p>
        <p className="[overflow-wrap:anywhere] text-[14px] text-muted"><strong>Projekt:</strong> AFTR – alkoholfogyasztás-követő webalkalmazás</p>
      </div>
    </section>
    <section className="rounded-[10px] border border-solid border-edge bg-panel p-7 [@media(max-width:720px)]:p-[22px]">
      <h2 className="mt-0 text-[22px]">Üzenet küldése</h2>
      <form className="flex flex-col">
        {fields.map((field) => (
          <FormField key={field.name} field={field} labelSpacing="mt-3 mb-1.5" />
        ))}
        <FormButton>Üzenet elküldése</FormButton>
      </form>
    </section>
  </main>
);
