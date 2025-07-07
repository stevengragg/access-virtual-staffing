import { Metadata } from "next";

// import { CTAFooter } from "@/components/section/cta-footer";
// import { FaqContent } from "@/components/section/faq-content";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { LongFormContent1 } from "@/components/content/LongFormContent1";

export const metadata: Metadata = {
  title: "Cookie Policy | Access Virtual Staffing",
  description:
    "Learn how Access Virtual Staffing uses cookies and similar technologies to enhance your experience, analyze site usage, and comply with privacy regulations. Review your rights and manage your cookie preferences.",
};

type Props = {};

export default function TermsOfService({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* FAQ Hero Header Section */}
      <HeroHeaderNormal heading="Cookie Policy" context="" />
      <LongFormContent1> {CookiePolicy()}</LongFormContent1>
    </main>
  );
}

const CookiePolicy = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Cookie Policy for Access Virtual Staffing
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: July 1, 2025</p>

      <p className="mb-4">
        This Cookie Policy explains how <strong>Access Virtual Staffing</strong>{" "}
        (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and
        similar technologies when you visit our website
        <a
          href="https://accessvirtualstaffing.com"
          className="text-blue-600 underline ml-1"
        >
          https://accessvirtualstaffing.com
        </a>
        . It explains what these technologies are, why we use them, and your
        rights to control their use.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit a
        website. They help the site function properly, enhance user experience,
        and gather analytics to improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Types of Cookies We Use
      </h2>
      <table className="table-auto w-full border border-gray-300 text-sm mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Type</th>
            <th className="border px-4 py-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-medium">Essential Cookies</td>
            <td className="border px-4 py-2">
              Required for the website to function properly (e.g., navigation,
              security, forms). These cannot be disabled.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-medium">Analytics Cookies</td>
            <td className="border px-4 py-2">
              Help us understand how visitors interact with the website using
              tools like Google Analytics and Vercel Analytics.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-medium">
              Embedded Content Cookies
            </td>
            <td className="border px-4 py-2">
              Cookies set by third parties like YouTube when videos are
              embedded. These may track user activity across websites.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-medium">
              Performance & Functionality Cookies
            </td>
            <td className="border px-4 py-2">
              Enhance website functionality but are not essential.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Third-Party Cookies
      </h2>
      <p className="mb-4">
        We may use cookies from trusted third-party providers:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Google Analytics:</strong> Tracks visitor behavior (IP address
          anonymized).
        </li>
        <li>
          <strong>Vercel Analytics:</strong> Provides anonymized performance and
          usage metrics.
        </li>
        <li>
          <strong>YouTube:</strong> Embedded videos may place cookies before you
          interact with the player.
        </li>
      </ul>
      <p className="mb-4">
        These providers may collect data and track your behavior on our website
        and others.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Consent</h2>
      <p className="mb-4">
        On your first visit to our site, we ask for your consent to use
        non-essential cookies via a cookie banner.
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          You may <strong>accept</strong>, <strong>reject</strong>, or{" "}
          <strong>customize</strong> your preferences.
        </li>
        <li>
          You can <strong>withdraw your consent at any time</strong> by
          adjusting your browser settings or using our{" "}
          <a href="#" className="text-blue-600 underline">
            Cookie Settings
          </a>{" "}
          Banner.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. How to Control Cookies
      </h2>
      <p className="mb-4">
        You can control or delete cookies at any time through:
      </p>
      <h3 className="font-semibold">🔧 Browser Settings</h3>
      <p className="mb-4">
        Most web browsers allow you to manage cookies via settings (block,
        delete, or notify). Visit{" "}
        <a
          href="https://www.allaboutcookies.org"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.allaboutcookies.org
        </a>{" "}
        for detailed instructions.
      </p>
      <h3 className="font-semibold">🔄 Change Consent Preferences</h3>
      <p className="mb-4">
        If you&apos;ve previously accepted cookies, you can revisit and change
        your preferences by clicking the
        <strong> &quot;Cookie Settings&quot;</strong> link in our website
        footer.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. California & GDPR Compliance
      </h2>
      <p className="mb-4">
        If you are located in the <strong>European Union</strong>,{" "}
        <strong>United Kingdom</strong>, or <strong>California</strong>, you
        have the right to:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Request information about cookies and data collected</li>
        <li>Withdraw consent or opt-out</li>
        <li>
          Request data deletion (see our{" "}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          )
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Cookie Policy or data privacy, contact
        us at:
      </p>
      <p className="mb-2">
        📧{" "}
        <a
          href="mailto:support@accessvirtualstaffing.com"
          className="text-blue-600 underline"
        >
          support@accessvirtualstaffing.com
        </a>
      </p>
    </main>
  );
};
