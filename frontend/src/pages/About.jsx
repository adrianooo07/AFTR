export const About = () => (
  <main className="mx-auto max-w-[850px] px-6 pt-[75px] pb-20 [@media(max-width:650px)]:pt-[45px]">
    <p className="text-[12px] font-bold tracking-[2px] text-highlight">A PROJEKTRŐL</p>
    <h1 className="max-w-[760px] text-[clamp(35px,5vw,54px)] leading-[1.15] tracking-[-1px]">
      Az AFTR a tudatosabb döntésekről szól.
    </h1>
    <p className="max-w-[700px] text-[18px] text-muted">
      Nem az a cél, hogy többet igyál, hanem hogy jobban átlásd a saját szokásaidat.
    </p>
    <section className="mt-9 rounded-[10px] border border-solid border-edge bg-panel p-7 [@media(max-width:650px)]:p-5">
      <h2 className="mt-2.5 text-[22px]">Miért készül?</h2>
      <p className="text-muted">
        Az alkoholfogyasztás könnyen rutinná válhat, miközben nehéz pontosan felmérni, milyen gyakran és mennyit fogyasztunk. Az AFTR ötlete erre a problémára keres egyszerű, átlátható megoldást.
      </p>
      <h2 className="mt-2.5 text-[22px]">Mi a célunk?</h2>
      <p className="text-muted">
        A tervezett alkalmazás lehetőséget adhat a fogyasztási szokások rögzítésére és a változások áttekintésére. A statisztikák segíthetnek felismerni a mintákat, a felhasználó pedig ezek alapján hozhat tudatosabb döntéseket.
      </p>
      <h2 className="mt-2.5 text-[22px]">Hol tart most a projekt?</h2>
      <p className="text-muted">
        Jelenleg a projekt első bemutatójához készül a statikus webes felület. A bejelentkezés, a regisztráció és az adatmentés még nem működik, a későbbi fejlesztés során ezek külön feladatként valósulhatnak meg.
      </p>
    </section>
  </main>
);
