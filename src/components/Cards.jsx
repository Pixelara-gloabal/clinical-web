import Image from 'next/image';
import Link from 'next/link';
import { slideInUpAnimate } from './animation';
import UseIntersectionObserver from './UseIntersectionObserver';

const Card = ({ arr, icon }) => {
  // Observe when component is in viewport
  const [elementRef, isVisible] = UseIntersectionObserver({
    threshold: 0.1
  });

  return (
    <div
      className="row gx-md-5 gy-5 d-flex justify-content-center"
      ref={elementRef}
    >
      {arr.map((item) => {
        const animationDelay = `${0.1 * item.id}s`;

        return (
          <div
            key={item.id}
            className="col-md-6 col-lg-4 d-flex"
            style={isVisible ? slideInUpAnimate(animationDelay) : {}}
          >
            <div className="shadow-lg p-4 rounded-xl border border-soft-dark cards w-100 d-flex flex-column">
              <div className="card-body p-0 d-flex flex-column h-100">
                {/* Icon */}
                <div className="mb-4">
                  <Image
                    src={icon || item.icon}
                    alt={`${item.title} | OrthoCare`}
                    width={70}
                    height={70}
                    className="p-2 primary-bg-soft rounded-circle"
                  />
                </div>

                {/* Title with consistent height */}
                <h3 className="fs-22 mb-3" style={{ minHeight: '3.2rem', display: 'flex', alignItems: 'center' }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted mb-5 flex-grow-1">
                  {item.cardDescription}
                </p>

                {/* Bottom link arrow always aligned at bottom */}
                <div className="mt-auto pt-2">
                  <Link href={`/treatments#treatment-${item.id}`} className="d-inline-block text-decoration-none">
                    <i className="uil uil-arrow-right bg-dark rounded-circle text-white fs-26 p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
