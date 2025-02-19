"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from brands package
import { useUser } from '../UserContext';

export default function ProcessingPage() {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Employment Status Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Employment Status</h2>
          <div className="space-y-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">{user.titleStatus}</h3>
              <p className="text-lg text-blue-800 dark:text-blue-200">{user.messageStatus}</p>
            </div>
            {user.warningStatus && (
              <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-lg text-yellow-800 dark:text-yellow-200">{user.warningStatus}</p>
              </div>
            )}
          </div>
        </section>

        {/* Job Description Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Job Description</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The job description goes here. It includes details about the role, responsibilities, and expectations.
          </p>
        </section>

        {/* Payment Structure Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Payment Structure</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The payment structure goes here. It includes details about the salary, bonuses, and other compensation.
          </p>
        </section>

        {/* Required Hardware Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Required Hardware</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The required hardware goes here. It includes details about the equipment and tools needed for the job.
          </p>
        </section>

        {/* CRM Portal Access Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">CRM Portal Access</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The CRM portal access details go here. It includes information about how to access and use the CRM portal.
          </p>
        </section>

        {/* Contact Information Block */}
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
      </div>
    </main>
  );
}