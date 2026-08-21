// List of social media links with associated icons
const links = [
  {
    id: 1,
    icon: 'uil uil-facebook-f', // Facebook icon class
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'uil uil-instagram', // Instagram icon class
    url: 'https://www.instagram.com/',
  },
  {
    id: 3,
    icon: 'uil uil-linkedin', // LinkedIn icon class
    url: 'https://www.linkedin.com/',
  },
];

/**
 * Renders a group of social media icons with external links.
 *
 * @param {Object} props
 * @param {string} props.className - Optional class name for the <nav> wrapper.
 */
const SocialLinks = ({ className = 'nav social mt-3' }) => {
  return (
    <nav className={`${className} d-flex gap-2`}>
      {links.map(({ id, icon, url }) => (
        <a 
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="social-icon-btn d-inline-flex align-items-center justify-content-center text-decoration-none"
          aria-label={`Visit our ${icon.split('-')[1]} page`}
        >
          <i className={`${icon} fs-18 text-primary`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
