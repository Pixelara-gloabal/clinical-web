import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';

import { treatments, usefulLinks } from '../data.js'; // Data for footer links

// ============================================================
// Helper function to render widget sections (e.g., Useful Links, Treatments)
// ============================================================
const widget = (list, title, isTreatment) => (
  <div className="widget">
    <h4 className="widget-title fs-22 mb-4 text-white font-weight-bold">{title}</h4>
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
            <NextLink href={href} title={title} className="text-white opacity-80 hover text-decoration-none" />
          </li>
        );
      })}
    </ul>
  </div>
);

// ============================================================
// Footer Component
// Displays logo, contact info, social links, and navigation widgets
// ============================================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top bg-primary-dark overflow-hidden text-white">
      <div className="container pt-12 pt-md-14 pb-8">
        <div className="row g-8 justify-content-between">

          {/* Logo, description, and contact information */}
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
              <p className="lead mb-4 text-justify fs-16 text-white opacity-90" style={{ lineHeight: '1.6' }}>
                Expert orthopedic care in Location, delivering advanced robotic treatments for bone and joint health.
              </p>

              {/* Email */}
              <div className="d-flex align-items-center mb-3">
                <i className="uil uil-envelope fs-22 text-white me-2" />
                <a href="mailto:info@orthocare.com" className="text-white opacity-90 text-decoration-none hover">
                  info@orthocare.com
                </a>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-center mb-4">
                <i className="uil uil-phone-volume fs-22 text-white me-2" />
                <a href="tel:+911234567890" className="text-white fw-bold fs-16 text-decoration-none hover">
                  +91 12345 67890
                </a>
              </div>

              {/* Social Media */}
              <div className="d-flex flex-column">
                <h5 className="fs-18 text-white mb-2 font-weight-bold">Follow Us On</h5>
                <SocialLinks className="nav social" />
              </div>
            </div>
          </div>

          {/* Link widgets */}
          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white">
            {widget(usefulLinks, 'Useful Links', false)}
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white">
            {widget(treatments, 'Treatments', true)}
          </div>

          {/* Location Map Widget */}
          <div className="col-lg-4 col-xl-3 mt-md-5 mt-xl-0 mt-5">
            <div className="widget">
              <h4 className="widget-title fs-22 mb-3 text-white font-weight-bold">Our Location</h4>
              <div
                className="overflow-hidden shadow-lg"
                style={{
                  borderRadius: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  title="OrthoCare Clinic Map Location"
                />
              </div>
              <div className="d-flex align-items-center mt-3 text-white opacity-85 fs-14">
                <i className="uil uil-location-pin-alt me-2 fs-18 text-warning" />
                <span>123 Healing Touch Blvd, Suite 400</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="mt-8 mb-6 border-white opacity-15" />

        {/* Copyright */}
        <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
          <p className="mb-2 mb-lg-0 text-white opacity-85 fs-14">
            © {currentYear} OrthoCare. All rights reserved.
          </p>
          <p className="mb-0 text-white opacity-75 fs-13">
            Excellence in Orthopaedic Care & Robotic Joint Surgery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
