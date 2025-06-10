import { Metadata } from "next";

// import { CTAFooter } from "@/components/section/cta-footer";
// import { FaqContent } from "@/components/section/faq-content";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { LongFormContent1 } from "@/components/content/LongFormContent1";

export const metadata: Metadata = {
  title: "Terms of Service | Access Virtual Staffing",
  description:
    "Review the terms and conditions governing the use of Access Virtual Staffing's services. Our terms of service outline the rules, responsibilities, and legal agreements between Access Virtual Staffing and our users.",
};

type Props = {};

export default function TermsOfService({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* FAQ Hero Header Section */}
      <HeroHeaderNormal heading="Terms of Service" context="" />
      <LongFormContent1> {content}</LongFormContent1>
    </main>
  );
}

const content = (
  <div>
    <h1>Terms of Service</h1>
    <p>
      <strong>Effective Date:</strong> January 1, 2024
    </p>
    <p>
      Welcome to Access Virtual Staffing! These Terms of Service (“Terms”)
      govern your use of our platform, services, and website located at{" "}
      <a href="https://accessvirtualstaffing.com">accessvirtualstaffing.com</a>{" "}
      (collectively, the “Services”). By accessing or using the Services, you
      agree to these Terms. If you do not agree, please do not use the Services.
    </p>
    <p>
      If you have any questions about these Terms, please contact us at{" "}
      <strong>support@accessvirtualstaffing.com</strong>.
    </p>

    <h2>1. Eligibility</h2>
    <p>By using our Services, you represent and warrant that:</p>
    <ul>
      <li>
        You are at least 18 years of age or the age of majority in your
        jurisdiction.
      </li>
      <li>You have the legal capacity to enter into a binding contract.</li>
      <li>You will comply with these Terms and all applicable laws.</li>
    </ul>

    <h2>2. Accounts</h2>
    <p>
      To access certain features of our Services, you must create an account:
    </p>
    <ul>
      <li>
        <strong>Job Seekers:</strong> You are responsible for maintaining the
        confidentiality of your login credentials and ensuring all information
        in your profile is accurate and up to date. You may not impersonate
        others or create accounts for fraudulent purposes.
      </li>
      <li>
        <strong>Clients:</strong> You are responsible for maintaining accurate
        account details and ensuring job postings are legitimate, accurate, and
        compliant with all applicable laws.
      </li>
    </ul>

    <h2>3. Services Overview</h2>
    <ul>
      <li>
        <strong>For Job Seekers:</strong> Access Virtual Staffing provides tools
        for applying to jobs, managing your profile, and tracking applications
        through the applicant portal.
      </li>
      <li>
        <strong>For Clients:</strong> Access Virtual Staffing helps you find and
        hire top talent for full-time or freelance engagements worldwide. We act
        as an intermediary to facilitate the hiring process but do not employ
        the talent directly unless explicitly stated.
      </li>
    </ul>

    <h2>4. Prohibited Activities</h2>
    <p>
      You may not use the Services for any unlawful or unauthorized purposes.
      This includes, but is not limited to:
    </p>
    <ul>
      <li>Submitting false or misleading information.</li>
      <li>
        Engaging in harassment, discrimination, or exploitation of any kind.
      </li>
      <li>Violating any employment or labor laws.</li>
      <li>
        Uploading malicious software or attempting to interfere with the
        functionality of the Services.
      </li>
    </ul>

    <h2>5. Fees and Payments</h2>
    <p>
      Clients may be required to pay fees for certain services. All fees are
      non-refundable unless explicitly stated otherwise. Payment terms,
      including billing cycles and methods, will be outlined during the
      engagement process.
    </p>

    <h2>6. Intellectual Property</h2>
    <p>
      All content, trademarks, logos, and features on the platform are the
      property of Access Virtual Staffing or its licensors. You are granted a
      limited, non-exclusive, non-transferable license to use the Services for
      their intended purposes.
    </p>

    <h2>7. Limitation of Liability</h2>
    <p>Access Virtual Staffing is not liable for:</p>
    <ul>
      <li>
        Disputes between clients and job seekers regarding employment terms or
        compensation.
      </li>
      <li>
        Service interruptions or errors caused by factors beyond our control.
      </li>
      <li>
        Indirect, incidental, or consequential damages arising from your use of
        the Services.
      </li>
    </ul>

    <h2>8. Termination</h2>
    <p>
      We reserve the right to suspend or terminate your account at any time for
      violations of these Terms or if we deem it necessary for security or
      compliance reasons.
    </p>

    <h2>9. Governing Law</h2>
    <p>
      These Terms are governed by and construed in accordance with the laws of
      the United States and the State of Florida. Any disputes will be resolved
      exclusively in the courts located in West Palm Beach, Florida.
    </p>

    <h2>10. Updates to These Terms</h2>
    <p>
      We may update these Terms from time to time to reflect changes in our
      practices or for legal or operational reasons. We encourage you to review
      these Terms periodically. Continued use of the Services constitutes
      acceptance of the updated Terms.
    </p>

    <h2>Contact Us</h2>
    <p>
      If you have any questions or concerns about these Terms, please contact us
      at:
    </p>
    <ul>
      <li>
        <strong>Email:</strong> support@accessvirtualstaffing.com
      </li>
      <li>
        <strong>Address:</strong> 105 S. Narcissus Ave. Suite 512, West Palm
        Beach, FL 33401
      </li>
    </ul>
  </div>
);
