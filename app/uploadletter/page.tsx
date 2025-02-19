"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faBriefcase, faTrophy, faPeopleArrows, faDollarSign, faCalendarAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from brands package
import Image from 'next/image';
import { useUser } from '../UserContext';

const APP_SCRIPT_POST_URL = "https://script.google.com/macros/s/AKfycbwXIfuadHykMFrMdPPLLP7y0pm4oZ8TJUnM9SMmDp9BkaVLGu9jupU-CuW8Id-Mm1ylxg/exec";

export default function LetterPage() {
  const { user, loading: userLoading } = useUser();
  const router = useRouter();
  const [signedLetter, setSignedLetter] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async () => {
    if (!signedLetter) {
      alert("Please upload the signed employment letter.");
      return;
    }

    const signedLetterBase64 = await convertToBase64(signedLetter);

    const payload = new URLSearchParams();
    payload.append("action", "uploadSignedLetter");
    payload.append("userId", user?.userId as string);
    payload.append("signedLetter", JSON.stringify({ base64String: signedLetterBase64, fileName: signedLetter.name }));

    fetch(APP_SCRIPT_POST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString()
    }).then(response => response.json())
      .then(data => {
        alert("Signed employment letter uploaded successfully!");
        router.push('/autonavigate');
      })
      .catch(error => {
        console.error("Error uploading signed employment letter:", error);
        alert("There was an error uploading your signed employment letter. Please try again.");
      });
  };

  if (!user || userLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Signed Employment Letter Upload Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Upload Signed Employment Letter</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Signed Employment Letter (PDF)</label>
              <input type="file" accept=".pdf" onChange={(e) => handleFileChange(e, setSignedLetter)} className="mt-1 block w-full" />
            </div>
            <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition">
              Upload
            </button>
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