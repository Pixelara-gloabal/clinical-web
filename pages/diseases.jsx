import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Hero from 'components/Hero';

const diseasesList = [
  {
    title: "Osteoarthritis",
    description: "The most common form of arthritis, characterized by the breakdown of protective cartilage on the ends of your bones, usually affecting joints in your knees, hips, hands, and spine.",
    symptoms: ["Joint pain during or after movement", "Stiffness after resting", "Loss of flexibility", "Grating sensation"],
    treatmentOpt: "Physical therapy, joint injections, robotic joint replacement (in advanced stages)."
  },
  {
    title: "ACL Tear & Sports Injuries",
    description: "A tear or sprain of the anterior cruciate ligament (ACL)—one of the strong bands of tissue that help connect your thigh bone to your shinbone, common in sports that involve sudden stops and changes in direction.",
    symptoms: ["A loud 'pop' sensation", "Severe pain and inability to continue activity", "Rapid swelling", "Loss of range of motion"],
    treatmentOpt: "Reconstructive arthroscopic surgery, bracing, targeted physical therapy."
  },
  {
    title: "Osteoporosis & Bone Density Loss",
    description: "A condition that weakens bones, making them fragile and highly susceptible to fractures. Commonly affects post-menopausal women but can occur in anyone.",
    symptoms: ["Back pain caused by fractured or collapsed vertebra", "Loss of height over time", "A stooped posture", "Bones that break easily"],
    treatmentOpt: "Calcium & Vitamin D therapy, bone density monitoring, prescription medication."
  },
  {
    title: "Rheumatoid Arthritis",
    description: "An autoimmune disorder where the immune system mistakenly attacks the lining of the joints, causing painful swelling that can eventually result in bone erosion and joint deformity.",
    symptoms: ["Warm, swollen joints", "Morning stiffness lasting hours", "Fatigue and fever", "Symmetrical joint pain"],
    treatmentOpt: "Rheumatology management, anti-inflammatory medications, surgical joint reconstruction."
  }
];

const DiseasesPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Orthopaedic Conditions & Diseases | OrthoCare</title>
        <meta
          name="description"
          content="Learn about common orthopedic diseases, joint conditions, and bone health including Osteoarthritis, ACL tears, Rheumatoid Arthritis, and their treatment options."
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Banner */}
        <Hero
          img="/img/diseases/diseases-hero-bg.webp"
          heading="Orthopaedic Conditions"
          description="Understanding joint and bone diseases is the first step toward effective recovery. Explore symptoms and modern treatment pathways."
        />

        {/* Detailed Info */}
        <section className="wrapper">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gy-10 align-items-center mb-12">
              <div className="col-lg-8 mx-auto text-center">
                <h3 className="fs-15 py-2 px-3 primary-bg-soft text-main rounded-pill d-inline-block">Patient Education</h3>
                <h2 className="display-4 mt-2">Common Musculoskeletal Conditions</h2>
                <p className="lead">Empowering patients with reliable medical knowledge. If you are experiencing any of these symptoms, schedule an evaluation today.</p>
              </div>
            </div>

            <div className="row gy-6">
              {diseasesList.map((disease, idx) => (
                <div key={idx} className="col-lg-6">
                  <div className="card shadow-lg border border-soft-dark h-100">
                    <div className="card-body p-6">
                      <h3 className="display-6 mb-3 text-primary">{disease.title}</h3>
                      <p className="mb-4">{disease.description}</p>
                      
                      <h5 className="mb-2 fs-16 text-dark font-weight-bold">Common Symptoms:</h5>
                      <ul className="mb-4 pl-4 text-muted">
                        {disease.symptoms.map((symptom, sIdx) => (
                          <li key={sIdx}>{symptom}</li>
                        ))}
                      </ul>

                      <div className="p-3 primary-bg-soft rounded">
                        <strong className="text-main">Treatment Pathway:</strong>
                        <p className="mb-0 text-muted fs-14 mt-1">{disease.treatmentOpt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="fs-18 mb-4">Have questions about a condition not listed here?</p>
              <Link href="/contact" className="btn btn-primary rounded-pill">Contact Our Clinic</Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default DiseasesPage;
