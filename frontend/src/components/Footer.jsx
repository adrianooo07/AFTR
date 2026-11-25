export const Footer = ({ isHome }) => {
  if (isHome) {
    return (
      <footer className="mx-auto flex max-w-[1120px] justify-between px-6 py-[25px] text-[12px] text-muted [@media(max-width:720px)]:flex-col [@media(max-width:720px)]:gap-1">
        <span className="font-extrabold tracking-[2px] text-copy">AFTR</span>
        <p>Iskolai projekt</p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-edge p-6 text-center text-[12px] text-muted">
      AFTR · Iskolai szoftverfejlesztői projekt
    </footer>
  );
};
