// app/ContactForm.tsx

"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

type Country = {
  name: string;
  abbrv: string;
  phoneCode: string;
  flag: string;
  currency: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    phoneCode: '+1',
    phone: '',
    occupation: '',
    service: '',
    amount: '',
    currency: 'USD',
    howHeard: '',
    message: ''
  });

  const [countries, setCountries] = useState<Country[]>([]);
  const [phoneCodes, setPhoneCodes] = useState<{ phoneCode: string; flag: string }[]>([]);
  const [currencies, setCurrencies] = useState<{ code: string; name: string }[]>([]);
  const [flag, setFlag] = useState('🇺🇸');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [dropdownLoading, setDropdownLoading] = useState(true); // New loading state for dropdowns

  useEffect(() => {
    const fetchDropdownData = async () => {
      setDropdownLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbyRvh-eu1dKmr7NUOzTtj7jSrxubv1E8tISUxnLgDN_0a1MaibwBGo7xVyyxjnhpEM/exec?action=getData&sheetname=SETTINGS&range=M2:Q'
        );
        const data = response.data;

        const formattedCountries: Country[] = data.map((item: any) => ({
          name: item[0],
          abbrv: item[1],
          phoneCode: `+${item[2]}`,
          flag: item[3],
          currency: item[4]
        }));

        setCountries(formattedCountries);
        setPhoneCodes(formattedCountries.map((country: Country) => ({
          phoneCode: country.phoneCode,
          flag: country.flag
        })));
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      } finally {
        setDropdownLoading(false); // Set loading to false after fetching
      }
    };

    fetchDropdownData();
  }, []);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbyRvh-eu1dKmr7NUOzTtj7jSrxubv1E8tISUxnLgDN_0a1MaibwBGo7xVyyxjnhpEM/exec?action=getData&sheetname=SETTINGS&range=Q2:Q'
        );
        const data: string[][] = response.data;
  
        // Create a Map to filter out duplicates while preserving the first occurrence
        const uniqueCurrencies = new Map();
  
        data.flat().forEach(item => {
          const trimmedItem = item.trim();
          if (trimmedItem) {
            const currencyCode = trimmedItem.split(' ')[1]; // Get the currency code
            if (!uniqueCurrencies.has(currencyCode)) {
              uniqueCurrencies.set(currencyCode, { code: currencyCode, name: trimmedItem });
            }
          }
        });
  
        // Convert the Map back to an array
        const formattedCurrencies = Array.from(uniqueCurrencies.values()).map((currency, index) => ({
          key: `${index + 1}.${currency.code}`,
          ...currency
        }));
  
        setCurrencies(formattedCurrencies);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };
  
    fetchCurrencyData();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phoneCode') {
      const matchingCountry = phoneCodes.find((code) => code.phoneCode === value);
      if (matchingCountry) {
        setFlag(matchingCountry.flag);
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const submissionData = {
      ...formData,
      dbname: "consultation",
    };
  
    setIsLoading(true);
  
    try {
      const params = new URLSearchParams(submissionData);
  
      await fetch(
        'https://script.google.com/macros/s/AKfycbyRvh-eu1dKmr7NUOzTtj7jSrxubv1E8tISUxnLgDN_0a1MaibwBGo7xVyyxjnhpEM/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        }
      );
  
      // Show success message
      setModalContent('Thank you for your submission. We will get back to you soon.');
  
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: 'United States',
        phoneCode: '+1',
        phone: '',
        occupation: '',
        service: '',
        amount: '',
        currency: 'USD',
        howHeard: '',
        message: ''
      });
  
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalContent('There was an error submitting the form. Please try again.');
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };
  
  return (
    <>
      <div className="lg:w-1/2 lg:pl-12">
        {dropdownLoading ? ( // Show loading indicator while fetching
          <div className="text-center">Loading...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
                required
              >
                {countries.map((country) => (
                  <option key={country.abbrv} value={country.name}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="flex space-x-3">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
              >
                {phoneCodes.map((phoneCode, index) => (
                  <option key={`${index + 1}.${phoneCode.phoneCode}`} value={phoneCode.phoneCode}>
                    {phoneCode.flag} {phoneCode.phoneCode}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
              required
            >
              <option value="">Choose your service type</option>
              <option value="Forex">Forex</option>
              <option value="Binary Option">Binary Option</option>
              <option value="Romance Scam">Romance Scam</option>
              <option value="Investment Scam">Investment Scam</option>
              <option value="Cryptocurrency Scam">Cryptocurrency Scam</option>
              <option value="Hacking & Blackmail">Hacking & Blackmail</option>
              <option value="Other">Other</option>
            </select>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
              >
                {currencies.map((currency, index) => (
                  <option key={`${index + 1}.${currency.code}`} value={currency.code}>
                    {currency.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <select
              name="howHeard"
              value={formData.howHeard}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
              required
            >
              <option value="">How did you hear about us?</option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
              required
            />
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white p-3 rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Submission Status</h2>
              <p>{modalContent}</p>
              <button onClick={() => setShowModal(false)} className="mt-4 bg-blue-600 text-white p-2 rounded-lg">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
