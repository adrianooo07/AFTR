import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';

const pages = [
  { path: '/', name: 'home', title: 'AFTR – Tudatosabb szokások', Component: Home },
  { path: '/rolunk', name: 'about', title: 'Rólunk – AFTR', Component: About },
  { path: '/kapcsolat', name: 'contact', title: 'Kapcsolat – AFTR', Component: Contact },
  { path: '/login', name: 'login', title: 'Bejelentkezés – AFTR', Component: Login },
  { path: '/register', name: 'register', title: 'Regisztráció – AFTR', Component: Register },
];

const PageLayout = ({ page, title, children }) => {
  const isAuthPage = page === 'login' || page === 'register';
  const lineHeight = page === 'about' ? 'leading-[1.7]' : 'leading-[1.6]';

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className={isAuthPage ? 'flex min-h-screen flex-col' : lineHeight}>
      <Header page={page} isAuthPage={isAuthPage} />
      {children}
      {!isAuthPage && <Footer isHome={page === 'home'} />}
    </div>
  );
};

export const App = () => (
  <HashRouter>
    <Routes>
      {pages.map(({ path, name, title, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <PageLayout page={name} title={title}>
              <Component />
            </PageLayout>
          }
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </HashRouter>
);
