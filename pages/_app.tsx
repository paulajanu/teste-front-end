import type { AppProps } from 'next/app';
import GlobalStyle from '../src/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Centro Pokémon</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
