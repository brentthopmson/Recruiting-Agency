import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';

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
}

interface UserContextProps {
  user: User | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextProps>({ user: null, loading: true, setUser: () => {} });

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

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

  useEffect(() => {
    const idFromUrl = searchParams.get('id');
    const cachedId = localStorage.getItem('userId');

    if (idFromUrl) {
      localStorage.setItem('userId', idFromUrl);
      fetchUserData(idFromUrl);
    } else if (cachedId) {
      fetchUserData(cachedId);
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
  }, [searchParams]);

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);