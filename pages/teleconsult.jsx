import { Fragment, useState } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';

const TeleConsultPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <Fragment>
      <Head>
        <title>Schedule TeleConsult | OrthoCare Virtual Consultation</title>
        <meta
          name="description"
          content="Schedule a secure, HIPAA-compliant video teleconsultation with orthopedic specialist Dr. John Smith from the comfort of your home."
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Banner */}
        <Hero
          img="/img/teleconsult/teleconsult-hero-bg.webp"
          heading="Schedule a TeleConsultation"
          description="Speak to Dr. John Smith virtually. Safe, convenient, and direct orthopedic medical consultations without leaving your home."
        />

        {/* Appointment Form Section */}
        <section className="wrapper">
          <div className="container py-14 py-md-16">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <div className="card shadow-lg border border-soft-dark">
                  <div className="card-body p-6 p-md-8">
                    <h3 className="display-6 mb-4 text-center">Book Your Virtual Appointment</h3>
                    
                    {booked ? (
                      <div className="alert alert-success text-center py-6" role="alert">
                        <i className="uil uil-check-circle display-4 text-success mb-3 d-block" />
                        <h4 className="alert-heading mb-2">Appointment Reserved Successfully!</h4>
                        <p className="mb-0">
                          We have sent a confirmation email with details and the secure video link to: <strong>{formData.email}</strong>.
                        </p>
                        <p className="mt-2 text-muted">
                          Date: {formData.date} | Time Slot: {formData.time}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleBooking}>
                        <div className="row gy-4">
                          <div className="col-md-12">
                            <label className="form-label text-dark font-weight-bold">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label text-dark font-weight-bold">Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              required
                              placeholder="john.doe@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label text-dark font-weight-bold">Phone Number</label>
                            <input
                              type="tel"
                              className="form-control"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label text-dark font-weight-bold">Preferred Date</label>
                            <input
                              type="date"
                              className="form-control"
                              required
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label text-dark font-weight-bold">Preferred Time Slot</label>
                            <select
                              className="form-select"
                              required
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            >
                              <option value="">Choose slot...</option>
                              <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                              <option value="10:30 AM - 11:30 AM">10:30 AM - 11:30 AM</option>
                              <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                              <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                            </select>
                          </div>

                          <div className="col-md-12">
                            <label className="form-label text-dark font-weight-bold">Reason for Visit / Symptoms</label>
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="Briefly describe your symptoms (e.g. chronic knee pain, joint stiffness...)"
                              value={formData.reason}
                              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            />
                          </div>

                          <div className="col-md-12 mt-6">
                            <button type="submit" className="btn btn-primary rounded-pill w-100 py-3">
                              Confirm Appointment Request
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default TeleConsultPage;
