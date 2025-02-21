import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const APP_SCRIPT_USER_URL = "https://script.google.com/macros/s/AKfycbwXIfuadHykMFrMdPPLLP7y0pm4oZ8TJUnM9SMmDp9BkaVLGu9jupU-CuW8Id-Mm1ylxg/exec?sheetname=user";

interface User {
  userId: string;
  fullName: string;
  phoneNumber: string;
  position: string;
  route: string;
  titleStatus: string;
  messageStatus: string;
  warningStatus: string;
  userFolderId: string;
  admin: string; // Add admin field
}

interface UserContextProps {
  user: User | null;
  users: User[];
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserContext = createContext<UserContextProps>({ user: null, users: [], loading: true, setUser: () => {}, setUsers: () => {} });

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const fetchUserData = async (id: string) => {
    try {
      const response = await fetch(APP_SCRIPT_USER_URL);
      const data: User[] = await response.json();
      const userData = data.find((row: User) => row.userId === id);
      if (userData) {
        setUser(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(APP_SCRIPT_USER_URL);
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching all users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const idFromUrl = searchParams.get('id');
    const cachedId = localStorage.getItem('userId');
    const currentPath = window.location.pathname;

    if (idFromUrl) {
      localStorage.setItem('userId', idFromUrl);
      fetchUserData(idFromUrl);
    } else if (cachedId) {
      fetchUserData(cachedId);
    } else if (!currentPath.startsWith('/admin')) {
      router.push('/invalid');
      setLoading(false);
    } else {
      setLoading(false);
    }

    const interval = setInterval(() => {
      const id = searchParams.get('id') || localStorage.getItem('userId');
      if (id) {
        fetchUserData(id);
      }
    }, 2000); // Poll every 60 seconds

    return () => clearInterval(interval);
  }, [searchParams, router]);

  return (
    <UserContext.Provider value={{ user, users, loading, setUser, setUsers, fetchAllUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);