"use client";
import Image from "next/image";
import styles from "../../styles/DashboardLanding.module.css";

export default function DashboardLandingPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Find Loving Homes for Cats – Panda Cat Rehoming Marketplace
          </h1>
          <p className={styles.heroSubtitle}>
            A safe, green, and caring platform for rehoming and adopting cats. Connecting cat lovers and rescues with responsible pet parents.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#browse" className={styles.ctaPrimary}>
              Browse Cats
            </a>
            <a href="#list" className={styles.ctaSecondary}>
              List a Cat
            </a>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <Image
            src="/cat-hero.jpg"
            alt="Cute cat waiting for a new home"
            width={420}
            height={320}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Panda Cat Rehoming?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <Image src="/leaf-green.svg" width={40} height={40} alt="Green safe" />
            <h3>Green-Certified</h3>
            <p>We’re committed to eco-friendly and ethical rehoming practices, using sustainable operations and digital outreach.</p>
          </div>
          <div className={styles.featureCard}>
            <Image src="/paw.svg" width={40} height={40} alt="Cat paw" />
            <h3>Cat-Focused</h3>
            <p>Every feature is purpose-built for cat welfare, connecting real fosters and adopters through verified listings.</p>
          </div>
          <div className={styles.featureCard}>
            <Image src="/heart.svg" width={40} height={40} alt="Caring heart" />
            <h3>Trusted Community</h3>
            <p>Strict screening for adopters &amp; rescues ensures happy, safe matches for every cat’s new home.</p>
          </div>
        </div>
      </section>

      {/* Marketplace CTA */}
      <section id="browse" className={styles.marketSection}>
        <div className={styles.marketContent}>
          <h2>Browse Verified Cats Ready for Adoption</h2>
          <p>
            Explore real, up-to-date listings of cats in need of loving homes. Filter by age, personality, and location to find your perfect match.
          </p>
          <a href="#" className={styles.ctaPrimary}>
            Start Browsing
          </a>
        </div>
        <div className={styles.marketImageWrap}>
          <Image
            src="/cat-market.jpg"
            alt="Variety of cats available for rehoming"
            width={420}
            height={300}
            className={styles.marketImage}
          />
        </div>
      </section>

      {/* CTA to List a Cat */}
      <section id="list" className={styles.listSection}>
        <h2>Have a Cat in Need of a Home?</h2>
        <p>
          Easily create a listing and connect with a responsible new family. 
          Your cat’s safety and happiness are always our priority.
        </p>
        <a href="#" className={styles.ctaSecondary}>
          List a Cat for Adoption
        </a>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <dl>
          <dt>Is Panda Cat Rehoming free?</dt>
          <dd>Browsing and listing are free. We charge only optional upgrades for rescue priority placement.</dd>
          <dt>How do you keep cats safe?</dt>
          <dd>Every adopter and rescue is verified by our team to ensure safe and loving handoffs for every cat.</dd>
          <dt>What makes your platform “green”?</dt>
          <dd>We run on renewable-powered servers, use paperless agreements, and donate to eco cat charities.</dd>
        </dl>
      </section>
    </main>
  );
}