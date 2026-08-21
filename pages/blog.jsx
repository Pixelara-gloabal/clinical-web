import { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';

const blogPosts = [
  {
    title: "5 Tips to Keep Your Joints Healthy as You Age",
    date: "August 15, 2026",
    category: "Bone Health",
    summary: "As we age, cartilage naturally starts to thin out. Learn simple dietary, exercise, and lifestyle habits that can help protect your joints and keep you moving pain-free.",
    link: "#"
  },
  {
    title: "What to Expect Before and After a Robotic Knee Replacement",
    date: "July 28, 2026",
    category: "Joint Replacement",
    summary: "Robotic technology has revolutionized knee replacement surgery. Here is a comprehensive timeline of preoperative preparation, the surgery day itself, and recovery milestones.",
    link: "#"
  },
  {
    title: "Understanding Sports Injuries: When Should You See a Doctor?",
    date: "June 10, 2026",
    category: "Sports Medicine",
    summary: "Sprains, strains, and minor tears are common. But how do you know when rest is enough and when a professional orthopedic evaluation is necessary? Read on to find out.",
    link: "#"
  }
];

const BlogPage = () => {
  return (
    <Fragment>
      <Head>
        <title>OrthoCare Blog & News Updates | Joint & Bone Health</title>
        <meta
          name="description"
          content="Read latest news, healthcare articles, and post-surgery recovery updates from Dr. John Smith at OrthoCare."
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Banner */}
        <Hero
          img="/img/home/hero-bg.webp"
          heading="News & Blog Updates"
          description="Stay informed with patient education resources, healthy living articles, and the latest updates from our clinic."
        />

        {/* Blog Grid */}
        <section className="wrapper">
          <div className="container py-14 py-md-16">
            <div className="row gy-6 justify-content-center">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
                  <article className="post-entry card border border-soft-dark shadow-lg h-100">
                    <div className="card-body d-flex flex-column p-6">
                      <div className="post-meta mb-2">
                        <span className="text-primary text-uppercase fs-13 font-weight-bold">{post.category}</span>
                        <span className="text-muted ms-3 fs-13">{post.date}</span>
                      </div>
                      <h3 className="post-title fs-22 mb-3 mt-1">
                        <a href={post.link} className="text-dark hover-primary">{post.title}</a>
                      </h3>
                      <p className="post-content text-muted flex-grow-1">{post.summary}</p>
                      <div className="mt-4">
                        <a href={post.link} className="link-primary d-flex align-items-center">
                          Read More <i className="uil uil-arrow-right ms-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default BlogPage;
