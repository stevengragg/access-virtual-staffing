import { Metadata } from "next";

// import { CTAFooter } from "@/components/section/cta-footer";
// import { FaqContent } from "@/components/section/faq-content";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { LongFormContent1 } from "@/components/content/LongFormContent1";

export const metadata: Metadata = {
  title: "Privacy Policy | Access Virtual Staffing",
  description:
    "Learn about how Access Virtual Staffing collects, uses, and protects your personal information. Our privacy policy outlines our commitment to safeguarding your data and ensuring your privacy.",
};

type Props = {};

export default function PrivacyPolicy({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* FAQ Hero Header Section */}
      <HeroHeaderNormal heading="Privacy Policy" context="" />
      <LongFormContent1> {content}</LongFormContent1>
    </main>
  );
}

const content = (
  <div>
    <h1>Privacy Policy</h1>
    <p>
      <strong>Effective Date:</strong> January 1, 2024
    </p>
    <p>
      Welcome to Access Virtual Staffing! Your privacy is important to us, and
      we are committed to safeguarding your personal information. This Privacy
      Policy outlines how we collect, use, and protect your information when you
      interact with our website,
      <a href="https://accessvirtualstaffing.com">accessvirtualstaffing.com</a>,
      and our services.
    </p>
    <p>
      If you have any questions regarding this Privacy Policy, please contact us
      at <strong>support@accessvirtualstaffing.com</strong> or via mail at{" "}
      <strong>
        2655 North Ocean Drive, suite 405, Singer Island, FL 33404
      </strong>
      .
    </p>

    <h2>1. Information We Collect</h2>
    <h3>1.1. Information You Provide</h3>
    <ul>
      <li>
        <strong>Job Applicants:</strong>
        <ul>
          <li>Name, email address, phone number, and mailing address</li>
          <li>Employment history, education, skills, and certifications</li>
          <li>
            Any other details provided in your resume or application documents
          </li>
        </ul>
      </li>
      <li>
        <strong>Talent Request Clients:</strong>
        <ul>
          <li>
            Name, company name, email address, phone number, and business
            details
          </li>
          <li>Details about your staffing needs</li>
        </ul>
      </li>
      <li>
        <strong>Contact Inquiries:</strong>
        <ul>
          <li>
            Name, email address, and any additional information shared through
            our contact forms
          </li>
        </ul>
      </li>
    </ul>

    <h3>1.2. Automatically Collected Information</h3>
    <ul>
      <li>IP address, browser type, and operating system</li>
      <li>Date and time of your visit</li>
      <li>Pages visited and time spent on each page</li>
      <li>Referring website or search engine</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <h3>2.1. For Job Applicants</h3>
    <ul>
      <li>To review and process job applications</li>
      <li>
        To communicate opportunities that match your skills and preferences
      </li>
      <li>To maintain records for hiring and compliance purposes</li>
    </ul>

    <h3>2.2. For Talent Request Clients</h3>
    <ul>
      <li>To understand and fulfill your staffing needs</li>
      <li>To communicate updates about our services</li>
      <li>To manage billing and contractual obligations</li>
    </ul>

    <h3>2.3. General Uses</h3>
    <ul>
      <li>To improve website functionality and user experience</li>
      <li>To respond to inquiries and provide customer support</li>
      <li>To comply with legal and regulatory obligations</li>
    </ul>

    <h2>3. Sharing of Information</h2>
    <p>
      We do not sell or rent your personal information. However, we may share
      your information in the following cases:
    </p>
    <ul>
      <li>
        <strong>Service Providers:</strong> With trusted third-party vendors who
        assist us in delivering our services (e.g., cloud storage, applicant
        tracking systems).
      </li>
      <li>
        <strong>Legal Obligations:</strong> If required by law, regulation, or
        court order.
      </li>
      <li>
        <strong>Business Transfers:</strong> In the event of a merger,
        acquisition, or sale of assets, your information may be transferred.
      </li>
    </ul>

    <h2>4. Cookies and Tracking Technologies</h2>
    <p>
      We use cookies and similar technologies to enhance your experience on our
      website. These may include:
    </p>
    <ul>
      <li>
        <strong>Essential Cookies:</strong> Necessary for website functionality
      </li>
      <li>
        <strong>Analytical Cookies:</strong> To analyze website performance and
        usage trends
      </li>
    </ul>
    <p>You can manage or disable cookies in your browser settings.</p>

    <h2>5. Data Security</h2>
    <p>
      We implement industry-standard measures to protect your personal
      information, including encryption, secure servers, and restricted access
      protocols. However, no online transmission is entirely secure, and we
      cannot guarantee absolute security.
    </p>

    <h2>6. Your Rights</h2>
    <p>Depending on your location, you may have the following rights:</p>
    <ul>
      <li>Access your personal information</li>
      <li>Request correction of inaccurate or incomplete data</li>
      <li>Request deletion of your personal data</li>
      <li>Restrict or object to processing</li>
      <li>Withdraw consent where processing is based on consent</li>
    </ul>
    <p>
      To exercise these rights, please contact us at{" "}
      <strong>support@accessvirtualstaffing.com</strong>.
    </p>

    <h2>7. Retention of Data</h2>
    <p>
      We retain personal data only as long as necessary for the purposes
      outlined in this policy, or as required by law.
    </p>

    <h2>8. Third-Party Links</h2>
    <p>
      Our website may contain links to third-party websites. We are not
      responsible for the privacy practices or content of these sites.
    </p>

    <h2>9. Updates to This Privacy Policy</h2>
    <p>
      We may update this Privacy Policy from time to time to reflect changes in
      our practices or for other operational, legal, or regulatory reasons. We
      encourage you to review this page periodically for the latest updates.
    </p>

    <h2>Contact Us</h2>
    <p>
      If you have any questions or concerns regarding this Privacy Policy,
      please contact us at:
    </p>
    <ul>
      <li>
        <strong>Email:</strong> support@accessvirtualstaffing.com
      </li>
      <li>
        <strong>Address:</strong> 2655 North Ocean Drive, suite 405 Singer
        Island, FL 33404
      </li>
    </ul>
    <p>Thank you for trusting Access Virtual Staffing!</p>
  </div>
);
