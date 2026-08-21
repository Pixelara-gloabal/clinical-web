// Core Imports
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Theme and Layout
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Global Styles
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Load Bootstrap only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  // Initialize ScrollCue plugin on route change
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Disable loader after initial mount
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OrthoCare – Next.js Healthcare Template for Orthopaedic Doctors & Clinics</title>
        <meta name="description" content="OrthoCare - A specialized React and Next.js template tailored for orthopedic practices." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OrthoCare – Clinic & Orthopaedic Specialist Website" />
        <meta property="og:description" content="OrthoCare - A specialized medical portal for orthopedic doctors, clinics, and joint care services." />
        <meta property="og:url" content="https://github.com/Pixelara-gloabal/clinical-web" />
        <meta property="og:image" content="/img/logo.webp" />
        <meta property="og:image:secure_url" content="/img/logo.webp" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="OrthoCare – Clinic & Orthopaedic Specialist Website" />
        <meta name="twitter:description" content="OrthoCare - A specialized medical portal for orthopedic doctors, clinics, and joint care services." />
        <meta name="twitter:image" content="/img/logo.webp" />
      </Head>
      <Layout>
        <ThemeProvider>
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
