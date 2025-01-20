import React from 'react';
import Navigations from './components/Navigations';
import Logo from './components/Logo';

export const metadata = {
  title: 'The Wild Oasis',
};
function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
      <header>
          <Logo />
        <Navigations />
      </header>
        <main>{children}</main>
        <footer>Copyright by the wild Oasis</footer>
      </body>
    </html>
  );
}

export default RootLayout;
