import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Hero from 'components/Hero';
import { treatments } from '../src/data';

const TreatmentsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Orthopaedic Treatments & Services | OrthoCare</title>
        <meta
          name="description"
          content="Explore advanced orthopedic treatments offered by Dr. John Smith, including robotic joint replacements, knee & hip replacements, arthroscopy, and trauma care."
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Banner */}
        <Hero
          img="/img/treatments/treatments-hero-bg.webp"
          heading="Our Treatments & Services"
          description="Providing world-class orthopedic care with advanced robotic precision, minimally invasive techniques, and personalized recovery plans."
        />

        {/* Treatments Detailed List */}
        <section className="wrapper">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gy-10 align-items-center mb-12">
              <div className="col-lg-8 mx-auto text-center">
                <h3 className="fs-15 py-2 px-3 primary-bg-soft text-main rounded-pill d-inline-block">Specialized Care</h3>
                <h2 className="display-4 mt-2">Comprehensive Joint & Musculoskeletal Solutions</h2>
                <p className="lead">We utilize modern surgical and non-surgical procedures to restore function and eliminate pain.</p>
              </div>
            </div>

            <div className="row gy-10">
              {treatments.map((treatment) => (
                <div 
                  key={treatment.id} 
                  id={`treatment-${treatment.id}`}
                  className="col-12 border-bottom pb-8 scroll-margin-top"
                  style={{ scrollMarginTop: '100px' }}
                >
                  <div className="row align-items-center">
                    <div className="col-md-2 text-center text-md-start mb-4 mb-md-0">
                      <div className="p-3 primary-bg-soft rounded-circle d-inline-block">
                        <Image
                          src={treatment.icon}
                          alt={treatment.title}
                          width={80}
                          height={80}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <h3 className="display-6 mb-2">{treatment.title}</h3>
                      <p className="mb-0 text-muted">{treatment.cardDescription}</p>
                      <p className="mt-3">
                        Our approach to {treatment.title.toLowerCase()} starts with a complete diagnostic evaluation using digital mapping. For joint replacements, robotic accuracy provides a customized fit tailored to your natural anatomy, which minimizes post-operative pain and significantly improves the lifespan of the implant.
                      </p>
                    </div>
                    <div className="col-md-3 text-center text-md-end">
                      <Link href="/teleconsult" className="btn btn-sm btn-primary rounded-pill">Book Consultation</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default TreatmentsPage;
