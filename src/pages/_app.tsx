import { store } from '@/store/index';
import '@styles/style.scss';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import CustomTheme from '@/shared/middleware/theme';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import { createContext } from 'react';
import { Provider } from 'react-redux';

import { Manrope } from '@next/font/google';
import { ConfigProvider } from 'antd';
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export const ThemeContext = createContext<any>(undefined);

function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
        <CustomTheme>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: manrope,
              },
            }}
          >
            <style jsx global>{`
              :root {
                font-family: ${manrope.style.fontFamily};
              }
            `}</style>
            <main className={manrope.className}>
              assxd
              {getLayout(
                <>
                  <NextNProgress
                    color={'bg-primary'}
                    options={{ showSpinner: false }}
                    showOnShallow
                    height={5}
                  />
                  <Component {...pageProps} />
                </>
              )}
            </main>
          </ConfigProvider>
        </CustomTheme>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
