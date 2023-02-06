import '@/styles/globals.css';
import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AppContext.Provider value={{ submitted, setSubmitted }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
