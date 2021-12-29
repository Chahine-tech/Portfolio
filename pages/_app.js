import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
