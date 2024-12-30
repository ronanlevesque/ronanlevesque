import { Libre_Baskerville, Roboto, Roboto_Mono } from 'next/font/google';
import cx from 'classnames';

import '@/css/globals.css';

const roboto = Roboto({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

const roboto_mono = Roboto_Mono({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
});

const libre = Libre_Baskerville({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-libre',
  weight: ['400', '700'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={cx(
        libre.variable,
        roboto.variable,
        roboto_mono.variable,
        'm-0 bg-blackPearl font-roboto ~px-12/20'
      )}
    >
      <div className="m-auto max-w-1200">{children}</div>
    </body>
  </html>
);

export default RootLayout;
