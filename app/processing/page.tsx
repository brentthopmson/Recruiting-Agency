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
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Application Status</h2>
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
            As a Call Center Agent (Remote), you will be responsible for handling inbound and outbound customer calls, providing excellent customer service, and resolving customer issues. Your key responsibilities will include:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 mt-4">
            <li>Answering customer inquiries and providing accurate information.</li>
            <li>Resolving customer complaints and issues in a timely manner.</li>
            <li>Maintaining customer records by updating account information.</li>
            <li>Following communication scripts and guidelines during calls.</li>
            <li>Meeting performance targets and call handling quotas.</li>
            <li>Collaborating with team members and other departments to improve customer service.</li>
          </ul>
        </section>

        {/* Required Hardware Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Hardware Requirements</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            To set up your workspace as a Call Center Agent (Remote), you will need the following hardware:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 mt-4">
            <li>Reliable computer (desktop or laptop) with at least 8GB of RAM and a dual-core processor.</li>
            <li>High-speed internet connection with a minimum download speed of 10 Mbps.</li>
            <li>USB headset with a noise-canceling microphone.</li>
            <li>Webcam for video calls and meetings.</li>
            <li>Ergonomic chair and desk setup.</li>
            <li>Uninterruptible Power Supply (UPS) for power backup.</li>
            <li>Secondary monitor (optional but recommended).</li>
          </ul>
        </section>

        {/* CRM Portal Access Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">CRM Portal Access</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            As a Call Center Agent, you will have access to our CRM portal to manage customer interactions and records. The CRM portal allows you to:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 mt-4">
            <li>View and update customer information.</li>
            <li>Track customer interactions and call history.</li>
            <li>Log customer issues and resolutions.</li>
            <li>Access knowledge base articles and resources.</li>
            <li>Collaborate with team members through internal messaging.</li>
            <li>Generate reports on call performance and customer satisfaction.</li>
          </ul>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            You will receive login credentials and training on how to use the CRM portal during your onboarding process.
          </p>
        </section>

        {/* Contact Information Block */}
        <div className="w-full max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Contact Us Directly
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you want to contact us directly or have any immediate questions, you can reach us using the following methods:
          </p>
          <div className="space-y-4">
            {/* WhatsApp Contact Section */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-blue-600 h-6 w-6 mr-2" />
              <a href="tel:+13322692147" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                +1 (332) 269 2147
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 h-6 w-6 mr-2" />
              <a href="mailto:radiateresources@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                recruiting@radiateresources.com
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 h-6 w-6 mr-2" />
              <p className="text-gray-600 dark:text-gray-400">
                Available Monday to Friday, 8 AM - 7 PM (EST)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}