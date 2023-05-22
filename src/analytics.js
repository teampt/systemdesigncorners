// analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-GSS01Z2VN6');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

// Trigger logPageView on each page load
export const trackPageView = (history) => {
  history.listen(() => {
    logPageView();
  });
};