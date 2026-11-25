import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { path: '/', label: 'Főoldal' },
  { path: '/rolunk', label: 'Rólunk' },
  { path: '/kapcsolat', label: 'Kapcsolat' },
];

const logoClass = 'text-[25px] font-extrabold tracking-[2px]';
const homeButtonClass = 'inline-block rounded-[7px] border border-solid px-[17px] py-2.5 text-[14px] font-bold [@media(max-width:720px)]:px-2.5 [@media(max-width:720px)]:py-2';

export const Header = ({ page, isAuthPage }) => {
  if (isAuthPage) {
    return (
      <header className="mx-auto flex w-full max-w-[1080px] items-center justify-between p-6 [@media(max-width:480px)]:p-[18px]">
        <Link className={logoClass} to="/">AFTR</Link>
        <Link className="text-[14px] text-muted" to="/">← Vissza a főoldalra</Link>
      </header>
    );
  }

  const isHome = page === 'home';
  const mobileLayout = page === 'about'
    ? '[@media(max-width:650px)]:flex-wrap'
    : '[@media(max-width:720px)]:flex-wrap';
  const mobileNav = page === 'about'
    ? '[@media(max-width:650px)]:order-3 [@media(max-width:650px)]:w-full [@media(max-width:650px)]:justify-between [@media(max-width:650px)]:gap-3'
    : '[@media(max-width:720px)]:order-3 [@media(max-width:720px)]:w-full [@media(max-width:720px)]:justify-between';
  const headerSize = isHome ? 'max-w-[1120px] gap-[22px]' : 'max-w-[1080px] gap-5';
  const navGap = isHome ? 'gap-[22px]' : 'gap-6';
  const contactNavGap = page === 'contact' ? '[@media(max-width:720px)]:gap-3' : '';

  return (
    <header className={`mx-auto flex items-center justify-between px-6 py-[22px] ${headerSize} ${mobileLayout}`}>
      <Link className={logoClass} to="/">AFTR</Link>
      <nav className={`flex items-center ${navGap} ${mobileNav} ${contactNavGap}`}>
        {navigation.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `text-[14px] hover:text-copy ${isActive ? 'text-copy' : 'text-muted'}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      {isHome ? (
        <div className="flex items-center gap-[22px] [@media(max-width:720px)]:gap-2">
          <Link className={`${homeButtonClass} border-[#494455] text-copy hover:bg-[#262331]`} to="/login">Bejelentkezés</Link>
          <Link className={`${homeButtonClass} border-accent bg-accent text-on-accent hover:bg-accent-hover`} to="/register">Regisztráció</Link>
        </div>
      ) : (
        <Link className="rounded-md bg-accent px-4 py-2.5 text-[14px] font-bold text-on-accent" to="/register">Regisztráció</Link>
      )}
    </header>
  );
};
