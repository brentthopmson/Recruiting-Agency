"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faBriefcase, faTrophy, faPeopleArrows, faDollarSign, faCalendarAlt, faPhone, faEnvelope, faFolderOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import from brands package
import { useUser } from '../UserContext';

const APP_SCRIPT_ADMIN_URL = "https://script.google.com/macros/s/AKfycbwXIfuadHykMFrMdPPLLP7y0pm4oZ8TJUnM9SMmDp9BkaVLGu9jupU-CuW8Id-Mm1ylxg/exec?sheetname=admin";

export default function AdminDashboard() {
  const router = useRouter();
  const { users: allUsers, loading: userLoading, fetchAllUsers } = useUser();
  const [admin, setAdmin] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedInAdmin, setLoggedInAdmin] = useState("");

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

  const fetchAdminData = async (adminUsername) => {
    try {
      const response = await fetch(APP_SCRIPT_ADMIN_URL);
      const data = await response.json();
      const adminData = data.find(admin => admin.username === adminUsername);
      setAdmin(adminData);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    try {
      const response = await fetch(APP_SCRIPT_ADMIN_URL);
      const data = await response.json();
      const admin = data.find(admin => admin.username === username && admin.password === password);
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
                <th className="border p-2 text-sm">Full Name</th>
                <th className="border p-2 text-sm">Phone Number</th>
                <th className="border p-2 text-sm">Email Address</th>
                <th className="border p-2 text-sm hidden lg:table-cell">Payment Method</th>
                <th className="border p-2 text-sm hidden lg:table-cell">Bank Name</th>
                <th className="border p-2 text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.userId}>
                  <td className="border p-2 text-sm">{user.fullName}</td>
                  <td className="border p-2 text-sm">{user.phoneNumber}</td>
                  <td className="border p-2 text-sm">{user.emailAddress}</td>
                  <td className="border p-2 text-sm hidden lg:table-cell">{user.paymentMethod}</td>
                  <td className="border p-2 text-sm hidden lg:table-cell">{user.bankName}</td>
                  <td className="border p-2 text-sm">
                    <a href={user.adminSMSStatus} target="_blank" rel="noopener noreferrer">
                      <span className="hidden lg:inline">{user.adminStatus}</span>
                      <FontAwesomeIcon icon={faPaperPlane} className="lg:hidden" />
                    </a>
                  </td>
                  {user.userFolderId && (
                    <td className="border p-2 text-sm">
                      <a href={`https://drive.google.com/drive/folders/${user.userFolderId}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFolderOpen} />
                      </a>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}