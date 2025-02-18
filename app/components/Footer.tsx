export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Digital Asset Recovery</h3>
            <p className="text-sm text-gray-400">
              Digital Asset Recovery is a leading asset recovery company dedicated to helping individuals and businesses reclaim their lost assets. 
              With years of experience in the industry, our team of experts is committed to providing exceptional service and delivering results.
            </p>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe To Our Newsletter</h3>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 placeholder-gray-400"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded">Subscribe</button>
            </form>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>support@assetrecovery.com</li>
              <li>+1 (205) 794 9970</li>
              <li>+1 (205) 794 9971</li>
            </ul>
          </div>
  
          {/* Services & Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Forex</li>
              <li>Binary Option</li>
              <li>Romance Scam</li>
              <li>Investment Scam</li>
              <li>Cryptocurrency Scam</li>
              <li>Hacking & Blackmail</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          <p>© 2015 - 2024 Digital Asset Recovery. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  