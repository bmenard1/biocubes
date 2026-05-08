import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import ReactGA from "react-ga4";
import './i18n'; // Import the i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root'));

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-BRCY2C9YJX');
};


const appHeight = () => {
  console.log("APP HEIGHT SET")
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

ReactGA.initialize("G-BRCY2C9YJX")
root.render(
  <React.StrictMode>
        <meta name="viewport" content="width=device-width,initial-scale=1, viewport-fit=cover"/>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
