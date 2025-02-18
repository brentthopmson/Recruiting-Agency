"use client"; // Ensure this is at the top of the file for client-side components

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from brands package

export default function FAQPage() {
  return (
    <main className="flex flex-col min-h-screen p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="flex-grow mt-24 mb-16 lg:mb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Find answers to the most common questions about the Recession Assistance Program (PAP).
            </p>
          </div>

          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                What is the Recession Assistance Program (PAP)?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                The Recession Assistance Program (PAP) is a non-profit organization committed to providing financial assistance to individuals and small businesses affected by economic downturns. Our mission is to alleviate financial burdens through quick and accessible recession relief payments.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                Who is eligible to apply?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Eligibility varies but generally includes individuals and businesses experiencing financial hardship due to a recession. Applicants must provide proof of identity, and businesses need to provide proof of registration.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                How do I apply for assistance?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                You can apply online by filling out the application form on our website. Ensure you provide all required information and supporting documents to expedite the verification process.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                What documents are required for the application?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Required documents include government-issued ID for individuals, business registration documents for businesses, income verification, and bank statements or tax returns as supporting evidence.
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                How long does the approval process take?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                The approval process typically takes up to 12 hours after we receive all required documentation. We aim to process applications as quickly as possible to provide timely assistance.
              </p>
            </div>

            {/* Question 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                Do I need to repay the assistance received?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                No, the recession relief payments provided by PAP are grants, not loans. You are not required to repay the assistance you receive.
              </p>
            </div>

            {/* Question 7 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                How will I receive the payment?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Payments are securely transferred to your validated digital wallet or bank account, depending on your preference indicated during the application process.
              </p>
            </div>

            {/* Question 8 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                How can I avoid payout termination?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                To avoid payout termination, ensure that you complete all steps of the application process accurately and provide all required documentation promptly. Stay in communication with our team if any issues arise.
              </p>
            </div>

            {/* Question 9 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                Can I track my application status?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can track your application status by logging into your account on our website or by contacting our support team for updates.
              </p>
            </div>

            {/* Question 10 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-600 h-6 w-6 mr-2" />
                How do I contact PAP for support?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                You can contact us via WhatsApp, phone, or email. Our contact information is provided below.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="w-full max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Contact Us Directly
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          If you have any immediate questions or need assistance, please reach out to us:
        </p>
        <div className="space-y-4">
          {/* WhatsApp Contact Section */}
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-blue-600 h-6 w-6 mr-2" />
            <a href="https://wa.me/18723366402" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Live Chat with us on WhatsApp
            </a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 h-6 w-6 mr-2" />
            <a href="tel:+12057949970" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              +1 (205) 794 9970
            </a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 h-6 w-6 mr-2" />
            <a href="mailto:support@recessionassistanceprogram.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              support@recessionassistanceprogram.com
            </a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 h-6 w-6 mr-2" />
            <p className="text-gray-600 dark:text-gray-400">
              Available Monday to Friday, 9 AM - 6 PM (EST)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
