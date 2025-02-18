import TestimonialsSlider from './components/TestimonialsSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faComments, faQuestionCircle, faInfoCircle, faHandshake, faClipboardCheck, faCheckCircle, faChartLine, faDollarSign, faHeartBroken, faCoins, faLock, faDatabase, faExclamationTriangle, faAmbulance, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/familytable.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for readability */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <p className="text-xl text-gray-200 mb-6">Providing financial assistance to those struggling during economic downturns. PAP is committed to supporting individuals and businesses through recession relief payments.</p>
          <br></br>
          <Link href="/account" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition">
            Apply for Assistance
          </Link>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Workflow Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Quick, Accessible, and Secure Financial Assistance</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            {/* Step 1: Apply Online */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FontAwesomeIcon icon={faHandshake} className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Apply Online</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Start by submitting your recession assistance application on our website. It's quick and straightforward.
              </p>
            </div>

            {/* Step 2: Verification */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Verification</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We verify your identity or business documentation to ensure eligibility for financial support.
              </p>
            </div>

            {/* Step 3: Payment Export */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FontAwesomeIcon icon={faCheckCircle} className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Payment Export</h3>
              <p className="text-gray-600 dark:text-gray-400">After verification, your payment is securely transferred to your validated wallet within 12 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Title for Services Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Understanding Recession Relief Payments</h2>
          </div>

          <div className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            <p>Recession relief payments are designed to provide financial assistance during economic downturns. These are grants, not loans, so you don't have to repay them. Eligibility criteria and payment amounts depend on specific programs.</p>
            <p>Follow the application process carefully to maximize your chances of approval and avoid payout termination. PAP ensures payments are processed efficiently within 12 hours after verification.</p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Optimizing the Application Process</h2>
          </div>

          <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400">
            <li>Gather all necessary documents, including identity proof, income verification, and business registration.</li>
            <li>Complete your application thoroughly and accurately.</li>
            <li>Submit supporting evidence such as bank statements, tax returns, or invoices.</li>
            <li>Track your application status online or contact us for updates.</li>
          </ul>
        </div>
      </div>

      {/* Counts That Matter */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Some Counts That Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">98%</h3>
            <p className="text-gray-600 dark:text-gray-400">Approval Rate</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">1,144,957</h3>
            <p className="text-gray-600 dark:text-gray-400">Clients Assisted</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">$2B+</h3>
            <p className="text-gray-600 dark:text-gray-400">Payments Distributed</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">9</h3>
            <p className="text-gray-600 dark:text-gray-400">Years in Operation</p>
          </div>
        </div>
      </section>

      <TestimonialsSlider />
    </main>
  );
}
