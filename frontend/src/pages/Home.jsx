import { Link } from 'react-router-dom';

const highlights = [
  { number: '01', text: 'Fogyasztás követése' },
  { number: '02', text: 'Szokások áttekintése' },
  { number: '03', text: 'Tudatosabb döntések' },
];

const features = [
  {
    number: '01',
    title: 'Fogyasztás naplózása',
    description: 'A koncepció része, hogy később egyszerűen rögzíthesd az elfogyasztott italokat.',
  },
  {
    number: '02',
    title: 'Statisztikák',
    description: 'Az adatokból idővel kirajzolódhatnak a heti és havi szokások.',
  },
  {
    number: '03',
    title: 'Tudatosabb hozzáállás',
    description: 'Az AFTR célja az önismeret támogatása, nem a fogyasztás ösztönzése.',
  },
];

const FeatureCard = ({ number, title, description }) => (
  <article className="rounded-[10px] border border-solid border-edge bg-panel p-[25px]">
    <span className="text-[13px] text-highlight">{number}</span>
    <h3 className="mb-2">{title}</h3>
    <p className="mb-0 text-[14px] text-muted">{description}</p>
  </article>
);

export const Home = () => (
  <main>
    <section className="mx-auto max-w-[1120px] px-6 pt-[86px] pb-[76px] [@media(max-width:720px)]:pt-[55px]">
      <p className="text-[12px] font-bold tracking-[2px] text-highlight">ISMERD MEG A SZOKÁSAIDAT</p>
      <h1 className="my-4 max-w-[760px] text-[clamp(38px,6vw,68px)] leading-[1.08] tracking-[-2px]">
        Több tudatosság.<br /><span className="text-accent">Kevesebb találgatás.</span>
      </h1>
      <p className="max-w-[610px] text-[17px] text-muted">
        Az AFTR egy alkoholfogyasztás-követő alkalmazás koncepciója, amely segít átlátni a szokásaidat és tudatosabb döntéseket hozni.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link className="inline-block rounded-[7px] border border-solid border-accent bg-accent px-[17px] py-2.5 text-[14px] font-bold text-on-accent hover:bg-accent-hover" to="/register">Kezdés</Link>
        <Link className="inline-block rounded-[7px] border border-solid border-[#494455] px-[17px] py-2.5 text-[14px] font-bold text-copy hover:bg-[#262331]" to="/rolunk">Ismerd meg az AFTR-t</Link>
      </div>
      <div className="mt-[70px] flex flex-wrap gap-11 border-t border-edge pt-[25px] [@media(max-width:720px)]:gap-[22px]">
        {highlights.map((highlight) => (
          <div key={highlight.number} className="flex flex-col gap-1">
            <strong className="text-[22px] text-highlight">{highlight.number}</strong>
            <span className="text-[13px] text-muted">{highlight.text}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#171520] px-6 pt-[60px] pb-[82px]">
      <div className="mx-auto max-w-[1072px]">
        <p className="text-[12px] font-bold tracking-[2px] text-highlight">MIT NYÚJT AZ AFTR?</p>
        <h2 className="mt-2 mb-7 text-[clamp(26px,4vw,38px)]">Átláthatóbb kép a szokásaidról</h2>
      </div>
      <div className="mx-auto grid max-w-[1072px] grid-cols-3 gap-[18px] [@media(max-width:720px)]:grid-cols-1">
        {features.map((feature) => (
          <FeatureCard key={feature.number} number={feature.number} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  </main>
);
