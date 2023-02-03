import '@/styles/globals.css';
import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    feedback: '',
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <AppContext.Provider
      value={{ feedbackData, setFeedbackData, submitted, setSubmitted }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
