import { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';
import About from 'components/About';

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About Dr. John Smith | OrthoCare Orthopaedic Specialist</title>
        <meta
          name="description"
          content="Learn more about Dr. John Smith, a premier orthopedic surgeon specializing in joint replacements, sports injuries, and advanced musculoskeletal care."
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Banner */}
        <Hero
          img="/img/about/about-hero-bg.webp"
          heading="About Dr. John Smith"
          description="Dedicated to restoring your mobility and helping you live a pain-free life through advanced orthopedic solutions."
        />

        {/* Doctor Details Section */}
        <section className="wrapper">
          <div className="container mt-12 mt-md-14">
            <About
              headingH1="Meet Dr. John Smith"
              span=" - Orthopaedic Surgeon"
              subHeading="LEAD SURGEON & SPECIALIST"
              para="Dr. John Smith is a double board-certified orthopedic surgeon with over 15 years of experience in performing robotic joint replacements, reconstructive surgery, and sports medicine. Graduating at the top of his class from the prestigious Johns Hopkins School of Medicine, he has dedicated his life to perfecting minimally invasive procedures that accelerate recovery and maximize joint longevity."
              para2="Throughout his career, Dr. Smith has successfully performed over 3,500 joint replacements. He is a pioneer in computer-assisted navigation and robotic orthopedic surgery, giving patients extremely precise implant placements for natural-feeling movement and long-lasting relief."
              para3="At OrthoCare, Dr. Smith believes in a patient-first approach. Whether through state-of-the-art non-surgical therapies or advanced robotic surgery, the goal is always to design a customized pathway to restore active lifestyles safely and efficiently."
              imgPosition="left"
              src="/img/about/dr-john-consultation.webp"
              btnTitle="Book TeleConsultation"
              btnUrl="/teleconsult"
            />
          </div>
        </section>

        {/* Credentials / Core Values Section */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6">
                <h2 className="display-4 mb-3">Our Core Philosophy</h2>
                <p className="lead fs-lg mb-6">We don't just treat symptoms; we restore lifestyles.</p>
                
                <div className="d-flex flex-row mb-6">
                  <div>
                    <span className="icon btn btn-circle btn-primary disabled me-4">
                      <span className="number">1</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-1">Patient-Centric Care</h4>
                    <p className="mb-0">Every treatment plan is tailored to the individual patient’s unique goals, lifestyle, and diagnostic findings.</p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-6">
                  <div>
                    <span className="icon btn btn-circle btn-primary disabled me-4">
                      <span className="number">2</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-1">Advanced Technology</h4>
                    <p className="mb-0">Utilizing robotic precision and high-definition navigation tools for surgical procedures to ensure better long-term outcomes.</p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-primary disabled me-4">
                      <span className="number">3</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-1">Full-Cycle Rehabilitation</h4>
                    <p className="mb-0">From pre-surgery guidance to comprehensive post-op physical therapy coordination, we walk with you every step of the way.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <h3 className="display-6 mb-5">Professional Qualifications</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-primary me-2">✔</span>
                    <div>
                      <strong>Doctor of Medicine (M.D.)</strong>
                      <p className="mb-0 text-muted fs-15">Johns Hopkins School of Medicine (High Honors)</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-primary me-2">✔</span>
                    <div>
                      <strong>Fellowship in Joint Reconstruction</strong>
                      <p className="mb-0 text-muted fs-15">Cleveland Clinic Orthopaedic Department</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-primary me-2">✔</span>
                    <div>
                      <strong>Member of AAOS</strong>
                      <p className="mb-0 text-muted fs-15">American Academy of Orthopaedic Surgeons</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="text-primary me-2">✔</span>
                    <div>
                      <strong>Active Research & Board Member</strong>
                      <p className="mb-0 text-muted fs-15">International Society for Computer Assisted Orthopaedic Surgery</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutPage;
