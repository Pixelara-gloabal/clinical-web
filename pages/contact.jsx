import { Fragment, useState } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Fragment>
      <Head>
        <title>Contact Us | OrthoCare Clinic Location & Phone</title>
        <meta
          name="description"
          content="Get in touch with OrthoCare. Find our clinic address, opening hours, contact phone numbers, and submit an online inquiry."
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Banner */}
        <Hero
          img="/img/home/hero-bg.webp"
          heading="Contact Our Clinic"
          description="We are here to help you. Reach out to schedule an appointment, verify insurance, or ask questions about our orthopedic services."
        />

        {/* Contact Info & Form */}
        <section className="wrapper">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10">
              
              {/* Info Column */}
              <div className="col-lg-5">
                <div className="d-flex flex-row mb-6">
                  <div className="icon text-primary fs-28 me-4 mt-1">
                    <i className="uil uil-location-pin-alt" />
                  </div>
                  <div>
                    <h5 className="mb-1">Clinic Address</h5>
                    <address className="contact-address mb-0 text-muted">
                      123 Healing Touch Boulevard, Suite 400,<br />
                      Location City, State 12345
                    </address>
                  </div>
                </div>

                <div className="d-flex flex-row mb-6">
                  <div className="icon text-primary fs-28 me-4 mt-1">
                    <i className="uil uil-phone-volume" />
                  </div>
                  <div>
                    <h5 className="mb-1">Phone & Email</h5>
                    <p className="mb-0 text-muted">
                      Direct: <a href="tel:+911234567890" className="text-reset">+91 12345 67890</a><br />
                      Support: <a href="mailto:info@orthocare.com" className="text-reset">info@orthocare.com</a>
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-6">
                  <div className="icon text-primary fs-28 me-4 mt-1">
                    <i className="uil uil-clock" />
                  </div>
                  <div>
                    <h5 className="mb-1">Operating Hours</h5>
                    <p className="mb-0 text-muted">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="col-lg-7">
                <h3 className="display-6 mb-4">Send Us a Message</h3>
                {submitted ? (
                  <div className="alert alert-success" role="alert">
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row gx-4">
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <textarea
                          className="form-control"
                          placeholder="Write your message here..."
                          rows="4"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary rounded-pill w-100">Send Message</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ContactPage;
