import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';

import { treatments, usefulLinks } from '../data.js'; // Data for footer links

// ============================================================
// Helper function to render widget sections with premium hover
// ============================================================
const widget = (list, title, isTreatment) => (
  <div className="widget">
    <h4 className="widget-title fs-20 mb-4 text-white font-weight-bold d-flex align-items-center">
      <span className="footer-title-bar me-2" />
      {title}
    </h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ title, id }) => {
        let href = "#";
        if (isTreatment) {
          href = `/treatments#treatment-${id}`;
        } else {
          switch (title) {
            case 'Home': href = '/'; break;
            case 'About Dr. John': href = '/about'; break;
            case 'Disease': href = '/diseases'; break;
            case 'News & Activities':
            case 'Blog': href = '/blog'; break;
            case 'Schedule TeleConsult': href = '/teleconsult'; break;
            case 'Contact Us': href = '/contact'; break;
            default: href = '#'; break;
          }
        }
        return (
          <li key={id} className="mb-2">
            <NextLink
              href={href}
              title={
                <span className="footer-link-text d-inline-flex align-items-center">
                  <i className="uil uil-angle-right-b footer-link-icon me-1" />
                  {title}
                </span>
              }
              className="footer-nav-link text-white opacity-80 hover text-decoration-none"
            />
          </li>
        );
      })}
    </ul>
  </div>
);

// ============================================================
// Footer Component
// Displays logo, contact info, social links, navigation, and map
// ============================================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top bg-primary-dark overflow-hidden text-white position-relative">
      {/* Subtle ambient light glow in footer background */}
      <div className="footer-glow" />

      <div className="container pt-12 pt-md-14 pb-8 position-relative" style={{ zIndex: 2 }}>
        <div className="row g-8 justify-content-between">

          {/* Col 1: Logo, description, and contact info */}
          <div className="col-lg-4 col-xl-3">
            <div className="widget d-flex flex-column">
              <div className="mb-4">
                <Image
                  src="/img/logo-light.webp"
                  alt="Logo | OrthoCare"
                  width={180}
                  height={55}
                  className="img-fluid"
                />
              </div>
              <p className="lead mb-4 text-justify fs-15 text-white opacity-90" style={{ lineHeight: '1.65' }}>
                Premier orthopedic surgical excellence in Location. Dedicated to restoring lifelong joint mobility through robotic precision and compassionate patient care.
              </p>

              {/* Contact item pills */}
              <div className="footer-contact-pill mb-2 d-flex align-items-center">
                <div className="contact-pill-icon me-3 d-flex align-items-center justify-content-center">
                  <i className="uil uil-envelope fs-18 text-white" />
                </div>
                <div>
                  <span className="d-block fs-11 text-uppercase opacity-75 fw-bold">Email Inquiries</span>
                  <a href="mailto:info@orthocare.com" className="text-white text-decoration-none fw-semibold fs-14 hover">
                    info@orthocare.com
                  </a>
                </div>
              </div>

              <div className="footer-contact-pill mb-4 d-flex align-items-center">
                <div className="contact-pill-icon me-3 d-flex align-items-center justify-content-center">
                  <i className="uil uil-phone-volume fs-18 text-white" />
                </div>
                <div>
                  <span className="d-block fs-11 text-uppercase opacity-75 fw-bold">24/7 Helpline</span>
                  <a href="tel:+911234567890" className="text-white text-decoration-none fw-bold fs-15 hover">
                    +91 12345 67890
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="d-flex flex-column">
                <span className="fs-13 text-uppercase opacity-75 fw-bold mb-2">Connect With Us</span>
                <SocialLinks className="nav social" />
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white">
            {widget(usefulLinks, 'Quick Navigation', false)}
          </div>

          {/* Col 3: Treatments */}
          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white">
            {widget(treatments, 'Specialized Treatments', true)}
          </div>

          {/* Col 4: Location Map Widget */}
          <div className="col-lg-4 col-xl-3 mt-md-5 mt-xl-0 mt-5">
            <div className="widget">
              <h4 className="widget-title fs-20 mb-4 text-white font-weight-bold d-flex align-items-center">
                <span className="footer-title-bar me-2" />
                Our Location
              </h4>
              <div className="footer-map-card overflow-hidden shadow-lg position-relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  title="OrthoCare Clinic Map Location"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3 text-white opacity-90 fs-13">
                <div className="d-flex align-items-center">
                  <i className="uil uil-location-pin-alt me-1 fs-18 text-warning" />
                  <span>123 Healing Touch Blvd</span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge bg-white text-main text-decoration-none py-1 px-2 rounded-pill fw-bold shadow-sm"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="mt-8 mb-6 border-white opacity-15" />

        {/* Copyright & Trust line */}
        <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
          <p className="mb-2 mb-lg-0 text-white opacity-85 fs-14">
            © {currentYear} OrthoCare Clinic. All rights reserved.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3 fs-13 text-white opacity-75">
            <span>⭐ 5.0 Star Rated Clinic</span>
            <span>•</span>
            <span>🔒 HIPAA Compliant</span>
            <span>•</span>
            <span>🏥 Double Board-Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
