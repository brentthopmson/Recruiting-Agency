import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faBriefcase, faTrophy, faPeopleArrows, faDollarSign, faCalendarAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from brands package
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="p-6 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* About Recession Assistance Program (PAP) */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">About the Program</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The Recession Assistance Program (PAP) is dedicated to providing relief and support to individuals affected by economic downturns. Through comprehensive guidance and resources, we help applicants secure the financial aid they need during tough times.
            </p>
          </div>
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <Image src="/about/about1.png" alt="About Recession Assistance Program" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* PAP Mission */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <Image src="/about/mission1.png" alt="Mission" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our mission is to assist individuals and families during financial crises by streamlining the recession relief application process. We aim to ensure that eligible applicants receive the support they deserve without unnecessary delays.
            </p>
          </div>
        </section>

        {/* PAP Services */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <Image src="/about/services.png" alt="Our Services" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faDollarSign} className="text-blue-600 h-6 w-6" />
                <span>Financial Aid Application Assistance: We help you navigate the complexities of recession relief programs to ensure a successful application.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faBriefcase} className="text-blue-600 h-6 w-6" />
                <span>Eligibility Evaluation: Our experts assess your eligibility for different assistance programs based on your financial situation.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faUserShield} className="text-blue-600 h-6 w-6" />
                <span>Fraud Protection: We ensure your application is secure and safeguarded from any fraudulent activities.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faTrophy} className="text-blue-600 h-6 w-6" />
                <span>Success Tracking: We provide you with regular updates on the status of your application and guide you through any follow-up actions.</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faPeopleArrows} className="text-blue-600 h-6 w-6" />
                <span>Consultation Services: We offer one-on-one consultations to help optimize your financial situation during challenging economic times.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* PAP Team */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <Image src="/about/team.png" alt="Our Team" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our dedicated team of experts specializes in financial assistance and recession relief programs. With years of experience in the field, we are fully equipped to help you through every step of the process.
            </p>
          </div>
        </section>

        {/* PAP Success Rate */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Success Rate</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The Recession Assistance Program has successfully helped numerous individuals secure their entitled financial relief. Our proven track record reflects our commitment to our clients' well-being during economic hardship.
            </p>
          </div>
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <Image src="/about/success.png" alt="Success Rate" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Counts That Matter */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Some Counts That Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">95%</h3>
              <p className="text-gray-600 dark:text-gray-400">Application Success Rate</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">10,000+</h3>
              <p className="text-gray-600 dark:text-gray-400">Families Supported</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">$50M+</h3>
              <p className="text-gray-600 dark:text-gray-400">Financial Aid Secured</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">5</h3>
              <p className="text-gray-600 dark:text-gray-400">Years of Service</p>
            </div>
          </div>
        </section>
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
    </main>
  );
}
