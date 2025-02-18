
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLock, faClock, faCalendarAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from brands package
// app/ContactPage.tsx

import ContactForm from '../ContactForm';

export default function ContactPage() {
  return (
    <main>
    <div className="flex flex-col lg:flex-row items-start p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
        <div className="lg:w-1/2 lg:pt-12 mb-8 lg:mb-0 flex flex-col justify-start space-y-8 lg:space-y-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">Fill Our Online Form</h1>

          {/* Fast and Easy Section */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faPaperPlane} className="text-blue-600 h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Fast and Easy</h2>
              <p className="text-gray-600 dark:text-gray-400">Fill out our online form and tell us about your situation. We'll get back to you as soon as possible.</p>
            </div>
          </div>

          {/* Secure and Confidential Section */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faLock} className="text-blue-600 h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Secure and Confidential</h2>
              <p className="text-gray-600 dark:text-gray-400">Your information is encrypted and protected.</p>
            </div>
          </div>

          {/* 24/7 Access Section */}
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faClock} className="text-blue-600 h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">24/7 Access</h2>
              <p className="text-gray-600 dark:text-gray-400">Submit your request at any time, regardless of your location.</p>
            </div>
          </div>
        </div>

        <ContactForm />
        
      </div>

    </div>

    {/* New Block - Contact Information */}
    <div className="w-full max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Contact Us Directly
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        If you prefer to contact us directly or have any immediate questions, you can reach us using the following methods:
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
    <br />
    <br />
    <br />
    </main>
  );
}