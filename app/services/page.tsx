import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCheckCircle, faClipboardCheck, faDollarSign, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">

      {/* Main Content */}
      <div className="flex-grow mt-24 mb-16 lg:mb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Step by Step
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Understand the full flow of PAP from application to receiving your payout.
            </p>
          </div>

          {/* Step-by-Step Process */}
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {/* Eligibility Check */}
            <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6">
              <FontAwesomeIcon icon={faClipboardCheck} className="text-blue-600 h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Step 1: Eligibility Check
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Determine if you meet the eligibility criteria for recession relief. Check your income status, recent unemployment or underemployment status, and whether your household qualifies for assistance.
              </p>
            </div>

            {/* Application Submission */}
            <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6">
              <FontAwesomeIcon icon={faFileAlt} className="text-blue-600 h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Step 2: Application Submission
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Complete the online application form by providing necessary personal and financial details. Attach supporting documents such as proof of income and identification for verification.
              </p>
            </div>

            {/* Verification Process */}
            <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Step 3: Verification Process
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                After submission, our team will verify your application. This includes checking your documents and cross-referencing your details to confirm your eligibility for the program.
              </p>
            </div>

            {/* Approval and Notification */}
            <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6">
              <FontAwesomeIcon icon={faClipboardCheck} className="text-blue-600 h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Step 4: Approval and Notification
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Once approved, you will receive a notification via email or phone. This will include the amount you are eligible to receive and the expected payout date.
              </p>
            </div>

            {/* Payout Process */}
            <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6">
              <FontAwesomeIcon icon={faDollarSign} className="text-blue-600 h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Step 5: Payout Process
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Payouts are processed directly into your verified wallet. You can track your payout status through our portal or contact us for further inquiries.
              </p>
            </div>

            {/* Post-Payout Support */}
            <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6">
              <FontAwesomeIcon icon={faPhone} className="text-blue-600 h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Step 6: Post-Payout Support
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                After receiving your payout, if you have any questions or concerns, you can contact our support team. We're here to assist you with any post-payout inquiries or guidance you might need.
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
          If you have any immediate questions, feel free to reach out to us:
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-blue-600 h-6 w-6 mr-2" />
            <a href="https://wa.me/18723366402" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Live Chat on WhatsApp
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
            <a href="mailto:support@recessionassistance.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              support@recessionassistance.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
