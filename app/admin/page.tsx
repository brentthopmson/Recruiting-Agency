"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faBriefcase, faTrophy, faPeopleArrows, faDollarSign, faCalendarAlt, faPhone, faEnvelope, faFolderOpen, faPaperPlane, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from brands package
import { useUser } from '../UserContext';
import { User } from '../types'; // Import the User interface

const APP_SCRIPT_ADMIN_URL = "https://script.google.com/macros/s/AKfycbwXIfuadHykMFrMdPPLLP7y0pm4oZ8TJUnM9SMmDp9BkaVLGu9jupU-CuW8Id-Mm1ylxg/exec?sheetname=admin";
const APP_SCRIPT_PAYMENT_URL = "https://script.google.com/macros/s/AKfycbwXIfuadHykMFrMdPPLLP7y0pm4oZ8TJUnM9SMmDp9BkaVLGu9jupU-CuW8Id-Mm1ylxg/exec";

export default function AdminDashboard() {
  const router = useRouter();
  const { users: allUsers, loading: userLoading, fetchAllUsers } = useUser();
  const [admin, setAdmin] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedInAdmin, setLoggedInAdmin] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const admin = sessionStorage.getItem("loggedInAdmin");
    if (admin) {
      setLoggedInAdmin(admin);
      fetchAdminData(admin);
      fetchAllUsers();
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(allUsers) && allUsers.length > 0) {
      const admin = sessionStorage.getItem("loggedInAdmin");
      if (admin) {
        const filteredUsers = allUsers.filter(u => u.admin === admin);
        setUsers(filteredUsers);
      }
    }
  }, [allUsers]);

  const fetchAdminData = async (adminUsername: string) => {
    try {
      const response = await fetch(APP_SCRIPT_ADMIN_URL);
      const data = await response.json();
      const adminData = data.find((admin: any) => admin.username === adminUsername);
      setAdmin(adminData);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.target as any).username.value.trim();
    const password = (event.target as any).password.value.trim();

    try {
      const response = await fetch(APP_SCRIPT_ADMIN_URL);
      const data = await response.json();
      const admin = data.find((admin: any) => admin.username === username && admin.password === password);
      if (admin) {
        sessionStorage.setItem("loggedInAdmin", username);
        setLoggedInAdmin(username);
        fetchAdminData(username);
        fetchAllUsers();
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInAdmin");
    setLoggedInAdmin("");
    setAdmin(null);
    setUsers([]);
    router.push('/');
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMoneyIconClick = (user: User) => {
    setSelectedUser(user);
    if (user.systemStatus === "WAITING CHECK") {
      setShowPaymentModal(true);
    } else if (user.systemStatus === "ACTIVE") {
      setShowDetailsModal(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed.");
        return;
      }
      setAttachment(file);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1]; // Remove the data URL prefix
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handlePaymentSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      payload.append(key, value.toString());
    });
    payload.append("action", "sendPayment");
    payload.append("userId", selectedUser?.userId as string);
    payload.append("userFolderId", selectedUser?.userFolderId as string);

    if (attachment) {
      const attachmentBase64 = await convertToBase64(attachment);
      payload.append("attachment", attachmentBase64);
    }

    console.log("Payload:", payload.toString());

    try {
      const response = await fetch(APP_SCRIPT_PAYMENT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString()
      });
      const data = await response.json();
      console.log("Response:", data); // Log the response from the server
      if (data.success) {
        alert("Payment submitted successfully!");
        setShowPaymentModal(false);
      } else {
        alert("Error submitting payment: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting payment:", error);
      alert("There was an error submitting the payment. Please try again.");
    }
  };

  const filteredUsers = users.filter(user => {
    const searchString = `${user.fullName} ${user.phoneNumber} ${user.emailAddress} ${user.userFolderId} ${user.paymentMethod} ${user.bankName} ${user.adminStatus}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  if (!loggedInAdmin) {
    return (
      <div className="p-6 lg:p-12 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="text" name="username" placeholder="Username" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" required />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" required />
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <main className="p-6 lg:p-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Welcome, {admin?.username}</h2>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-sm hidden lg:table-cell">Full Name</th>
                <th className="border p-2 text-sm">Phone Number</th>
                <th className="border p-2 text-sm hidden lg:table-cell">Email Address</th>
                <th className="border p-2 text-sm hidden lg:table-cell">Payment Method</th>
                <th className="border p-2 text-sm hidden lg:table-cell">Bank Name</th>
                <th className="border p-2 text-sm hidden lg:table-cell">System Status</th>
                <th className="border p-2 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.userId}>
                  <td className="border p-2 text-sm hidden lg:table-cell">{user.fullName}</td>
                  <td className="border p-2 text-sm">{user.phoneNumber}</td>
                  <td className="border p-2 text-sm hidden lg:table-cell">{user.emailAddress}</td>
                  <td className="border p-2 text-sm hidden lg:table-cell">{user.paymentMethod}</td>
                  <td className="border p-2 text-sm hidden lg:table-cell">{user.bankName}</td>
                  <td className="border p-2 text-sm hidden lg:table-cell">{user.systemStatus}</td>
                  <td className="border p-2 text-sm">
                    <div className="flex items-center space-x-2">
                      {user.systemStatus === "WAITING INTERVIEW" ? (
                        <a href={user.adminSMSStatus} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faPaperPlane} className="cursor-pointer" />
                        </a>
                      ) : (
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="cursor-pointer"
                          onClick={() => handlePaperPlaneClick(user)}
                        />
                      )}
                      {user.userFolderId && (
                        <a href={`https://drive.google.com/drive/folders/${user.userFolderId}`} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faFolderOpen} />
                        </a>
                      )}
                      {(user.systemStatus === "WAITING CHECK" || user.systemStatus === "ACTIVE") && (
                        <FontAwesomeIcon
                          icon={faMoneyBillWave}
                          className="cursor-pointer"
                          onClick={() => handleMoneyIconClick(user)}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* Hidden form for navigation */}
      <form ref={formRef} method="GET" style={{ display: 'none' }}></form>

      {/* Payment Modal */}
      {showPaymentModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Submit Payment</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Payment Type</label>
                <select name="paymentType" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" required>
                  <option value="Mobile Deposit">Mobile Deposit</option>
                  <option value="Mailing">Mailing</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Total Amount</label>
                <input type="number" name="totalAmount" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" required />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Client Amount</label>
                <input type="number" name="clientAmount" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" required />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Cashout</label>
                <input type="number" name="cashout" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" required />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Payment Instruction</label>
                <textarea name="paymentInstruction" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" required></textarea>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Attachment</label>
                <input type="file" name="attachment" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100" onChange={handleFileChange} />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition">Send Payment</button>
            </form>
            <button onClick={() => setShowPaymentModal(false)} className="mt-4 w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-500 transition">Cancel</button>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">User Details</h2>
            <div className="space-y-4">
              <p><strong>Position:</strong> {selectedUser.position}</p>
              <p><strong>Full Name:</strong> {selectedUser.fullName}</p>
              <p><strong>Phone Number:</strong> {selectedUser.phoneNumber}</p>
              <p><strong>Email Address:</strong> {selectedUser.emailAddress}</p>
              <p><strong>User Folder ID:</strong> {selectedUser.userFolderId}</p>
              <p><strong>Payment Method:</strong> {selectedUser.paymentMethod}</p>
              <p><strong>Bank Name:</strong> {selectedUser.bankName}</p>
              <p><strong>Account Name:</strong> {selectedUser.accountName}</p>
              <p><strong>Account Number:</strong> {selectedUser.accountNumber}</p>
              <p><strong>Routing Number:</strong> {selectedUser.routingNumber}</p>
              <p><strong>Address:</strong> {selectedUser.address}</p>
              <p><strong>Pay Count:</strong> {selectedUser.payCount}</p>
              <p><strong>Total Amount:</strong> {selectedUser.totalAmount}</p>
              <p><strong>Total Payout:</strong> {selectedUser.totalPayout}</p>
              <p><strong>System Status:</strong> {selectedUser.systemStatus}</p>
              <p><strong>Percentage Status:</strong> {selectedUser.percentageStatus}</p>
            </div>
            <button onClick={() => setShowDetailsModal(false)} className="mt-4 w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-500 transition">Close</button>
          </div>
        </div>
      )}
    </main>
  );
}