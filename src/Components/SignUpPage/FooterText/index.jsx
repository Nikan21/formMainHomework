import React from "react";
import styles from "./footerText.module.sass";

export default function FooterText() {
  return (
    <article className={styles.twoColumnsTextWrapper}>
      <div className={styles.firstColumnTextWrapper}>
        <h3>Why should I use Squadhelp?</h3>
        <p>
          You always have an option of hiring a consultant or coming up with the
          name yourself. However, Squadhelp builds great brands that succeed
          faster by connecting you with the most creative people across the
          globe. Most importantly, Squadhelp provides you with choice: you get
          to see ideas from dozens (in some cases, hundreds) of contestants
          before you select a winner. Typically, you would spend far less money
          with Squadhelp (our contests start at $199) than hiring an agency.
          Also, you will receive immediate results - most contests begin
          receiving submissions within minutes of starting.
        </p>
        <h3>How is Squadhelp Different?</h3>
        <p>
          Since 2011, we have been committed to disrupting the traditional
          agency model. Our platform offers much more than a typical
          crowdsourcing experience. From Machine Learning to Audience Testing to
          Comprehensive Trademark Validation, you receive best-in-class support
          for your branding projects.
        </p>
        <p>
          <span className={styles.boldTextSpan}>Breadth:</span> Our
          Contest-Based Crowdsourcing approach allows you to receive an
          unmatched breadth of name ideas from dozens of unique, creative minds
          while working with the world's largest branding community.
        </p>
        <p>
          <span className={styles.boldTextSpan}>
            Quality and Collaboration:
          </span>
          Using an advanced Quality Scoring Algorithm, we ensure that you
          receive more ideas from our top-quality creatives, and we use
          Gamification best practices to encourage high-quality brainstorming
          and two-way communication throughout your contest.
        </p>
        <p>
          <span className={styles.boldTextSpan}>
            We don’t stop at ideation:
          </span>
          Choose your name with confidence through our high-end validation
          services. Poll your target demographics to get unbiased feedback on
          your favorite names, and receive Trademark Risk and Linguistics
          Analysis Reports developed by a Licensed Trademark Attorney.
        </p>
      </div>
      <div className={styles.secondColumnTextWrapper}>
        <h3>I’ve never used Squadhelp before. What should I expect?</h3>
        <p>
          Most customers tell us that Squadhelp’s process is effective, easy,
          fast, and even fun. We constantly hear extremely positive feedback
          with respect to the breadth of ideas submitted to each contest, and
          many customers are surprised at how insightful working with dozens of
          creative individuals from across the globe can be.
        </p>
        <h3>How much does it cost?</h3>
        <p>
          Our naming competitions start at $199, and our logo design
          competitions start at $299. Also, there are three additional contest
          level that each offer more features and benefits. See our Pricing Page
          for details.
        </p>
        <h3>Do you offer any discount for multiple contests?</h3>
        <p>
          Yes! We have many contest bundles - our most popular being our Name,
          Tagline, and Logo bundle. Bundles allow you to purchase multiple
          contests at one time and save as much as from $75 - $400. You can
          learn more about our bundle options on our Pricing Page.
        </p>
        <h3>Will you help me validate my name?</h3>
        <p>
          Yes! We believe that validating and securing your name is a critical
          part of your branding process. Squadhelp offers domain checks,
          Trademark support, linguistics analysis, and professional audience
          testing to help you choose your name with confidence. We even have
          special prices for Trademark filing for our customers.
        </p>
        <h3>I have other questions! How can I get in touch with Squadhelp?</h3>
        <p>
          Check out our <span className={styles.orangeText}>FAQs</span> or send
          us a <span className={styles.orangeText}>message</span>. For
          assistance with launching a contest, you can also call us at (877)
          355-3585 or schedule a
          <span className={styles.orangeText}>Branding Consultation</span>
        </p>
      </div>
    </article>
  );
}
