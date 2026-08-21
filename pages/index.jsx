import { Fragment } from 'react';
import Head from 'next/head';

// Components
import Hero from 'components/Hero';
import About from 'components/About';
import Cards from 'components/Cards';
import PageProgress from 'components/PageProgress';
import UseIntersectionObserver from 'components/UseIntersectionObserver';
import { slideInUpAnimate } from 'components/animation';

// Data
import { treatments } from '../src/data';

const Home = () => {
  // Observe elements for animation triggers
  const [elementRef, isVisible] = UseIntersectionObserver({ threshold: 0.1 });

  return (
    <Fragment>
      <PageProgress />

      {/* SEO Metadata */}
      <Head>
        <title>OrthoCare – React & Next.js Template for Orthopaedic Doctors</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://orthocare.me" />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Banner */}
        <Hero
          img="/img/home/hero-bg.webp"
          heading="Top Orthopedic Specialist in Location"
          description="Dr. John Smith is a highly respected orthopedic surgeon in Location, known for his advanced expertise in treating joint, bone, and musculoskeletal conditions. He offers both surgical and non-surgical solutions, delivering exceptional care and successful outcomes."
        />

        {/* About Section */}
        <section className="wrapper">
          <div className="container mt-12 mt-md-14">
            <About
              headingH1="Best Orthopedic Doctor "
              span="in Location"
              subHeading="LEAD SURGEON & SPECIALIST"
              para="Dr. John Smith is a double board-certified orthopedic surgeon dedicated to restoring pain-free movement through state-of-the-art robotic precision, computer-guided navigation, and minimally invasive surgical techniques."
              para2="With more than 15 years of surgical leadership and 3,500+ successful joint procedures, Dr. Smith designs personalized recovery protocols to help patients return to an active, fulfilling lifestyle safely and quickly."
              imgPosition="left"
              src="/img/home/best-orthopedic-doctor.webp"
              btnTitle="Learn More About Dr. John"
              btnUrl="/about"
            />
          </div>
        </section>

        {/* Treatments Section */}
        <section className="wrapper">
          <div className="container py-14 py-md-16 home-card">
            <div className="row gx-lg-8 align-items-center mb-6">
              <div ref={elementRef}>
                <h3
                  className="fs-15 py-2 px-3 primary-bg-soft text-main rounded-pill d-inline-block"
                  style={isVisible ? slideInUpAnimate('0.3s') : {}}
                >
                  Treatments
                </h3>
                <h2
                  className="mb-3 mt-2"
                  style={isVisible ? slideInUpAnimate('0.6s') : {}}
                >
                  Explore Our <span>Orthopedic Treatments</span> in Location
                </h2>
              </div>
            </div>
            <Cards arr={treatments} />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
