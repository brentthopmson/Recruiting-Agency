import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ConsultationPage() {
  return (
    <main className="flex flex-col min-h-screen p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="flex-grow mt-24 mb-16 lg:mb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Schedule a Consultation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Whether you're looking to recover lost assets or need expert advice, our consultation services are designed to provide you with personalized support and guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Consultation Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                What to Expect
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our consultation service is designed to give you a clear understanding of how we can help with your asset recovery needs. During the consultation, our experts will:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
                <li>Review your case and discuss your specific needs.</li>
                <li>Provide insights into our recovery process and strategies.</li>
                <li>Offer guidance on the next steps and expected outcomes.</li>
                <li>Answer any questions you may have about our services.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                Our goal is to ensure you are fully informed and confident in our approach to asset recovery.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Book Your Consultation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fill out the form below to schedule a consultation with one of our experts. We will get back to you within 24 hours to confirm your appointment.
              </p>
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-200 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="preferred-date" className="block text-gray-700 dark:text-gray-200 mb-2">Preferred Date and Time</label>
                  <input
                    type="datetime-local"
                    id="preferred-date"
                    name="preferred-date"
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4} // Change made here
                    className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contact Us Directly
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you prefer to contact us directly or have any immediate questions, you can reach us using the following methods:
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-blue-600 h-6 w-6 mr-2" />
                <a href="tel:+12057949970" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  +1 (205) 794 9970
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 h-6 w-6 mr-2" />
                <a href="mailto:support@assetrecovery.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  support@assetrecovery.com
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
        </div>
      </div>
    </main>
  );
}
