"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../UserContext';
import { User } from '../types'; // Import the User interface

const APP_SCRIPT_POST_URL = "https://script.google.com/macros/s/AKfycbwXIfuadHykMFrMdPPLLP7y0pm4oZ8TJUnM9SMmDp9BkaVLGu9jupU-CuW8Id-Mm1ylxg/exec";

interface Question {
  id: number;
  question: string;
  answer: string;
}

export default function Questions() {
  const router = useRouter();
  const { user, loading: userLoading } = useUser();
  const [view, setView] = useState<'info' | 'questions'>('info');
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, question: '1. Describe a time when you diffused an angry customer and solved their problem.', answer: '' },
    { id: 2, question: '2. How do you show a client you are listening over the phone? Provide examples.', answer: '' },
    { id: 3, question: '3. What types of calls do you expect to handle here? How would you handle these issues?', answer: '' },
    { id: 4, question: '4. How would you handle an unreasonable request from a customer? Provide examples using experience.', answer: '' },
    { id: 5, question: '5. What do you do to ensure you meet performance standards? How do you balance that with service quality?', answer: '' },
    { id: 6, question: '6. If you were going to miss a deadline, how would you communicate it?', answer: '' },
    { id: 7, question: '7. How often are you online and available via email, Skype, or other communication channels?', answer: '' },
    { id: 8, question: '8. Do you have communication preferences? Do you work better with phone calls, having things in writing, etc?', answer: '' },
    { id: 9, question: '9. Describe a time when you had to learn a new tool or system quickly. How did you approach it?', answer: '' },
    { id: 10, question: '10. How do you handle multiple tasks or priorities? Provide examples from your experience.', answer: '' },
  ]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (view === 'questions' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [view, timeLeft]);

  function dateToExcelSerial(date: Date): number {
    const startDate = new Date(Date.UTC(1899, 11, 30));
    const diff = date.getTime() - startDate.getTime();
    return diff / (1000 * 60 * 60 * 24);
  }

  const startInterview = () => {
    if (email.trim() === '') {
      alert('Please enter your email address.');
      return;
    }

    if (confirm('The timer of 15 minutes is about to start and cannot be terminated. Interview answers will be automatically submitted at the end of the timer. Do you want to proceed?')) {
      setLoading(true);
      let payload = new URLSearchParams();
      payload.append("action", "startInterview");
      payload.append("userId", user?.userId as string);
      payload.append("emailAddress", email);
      payload.append("timeIn", dateToExcelSerial(new Date()).toString());

      fetch(APP_SCRIPT_POST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString()
      }).then(() => {
        setLoading(false);
        setView('questions');
      });
    }
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.filter(q => q.answer.trim() === '');
    if (unansweredQuestions.length > 0 && !confirm('Some questions are unanswered. Do you want to continue submitting?')) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const answers = questions.map(q => ({ question: q.question, answer: q.answer }));
    let payload = new URLSearchParams();
    payload.append("action", "submitAnswers");
    payload.append("userId", user?.userId as string);
    payload.append("interviewResponse", JSON.stringify(answers));
    payload.append("timeOut", dateToExcelSerial(new Date()).toString());

    fetch(APP_SCRIPT_POST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString()
    }).then(() => {
      setTimeout(() => {
        setLoading(false);
        router.push('/autonavigate');
      }, 10000); // Ensure loading state for 10 seconds
    });
  };

  if (!user || userLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {view === 'info' && (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hotel.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Welcome to Radiate Hotels</h1>
            <p className="text-xl text-gray-200 mb-6">Hello {user.fullName}, prepare for your interview.</p>
            <p className="text-lg text-gray-200 mb-6">Position: {user.position}</p>
            <p className="text-lg text-gray-200 mb-6">Phone: {user.phoneNumber}</p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100"
            />
            <p className="text-lg text-gray-200 mb-6">The result of your interview will be sent to this email address along with further employment information.</p>
            <button onClick={startInterview} className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition" disabled={loading}>
              {loading ? 'Starting...' : 'Start Interview'}
            </button>
          </div>
        </section>
      )}

      {view === 'questions' && (
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-right text-lg text-gray-600 dark:text-gray-400 mb-4">
              Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Interview Questions</h2>
            </div>
            {questions.map((q, index) => (
              <div key={q.id} className="mb-6">
                <p className="text-lg text-gray-900 dark:text-gray-100 mb-2">{q.question}</p>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100"
                  rows={4}
                  value={q.answer}
                  onChange={e => {
                    const newQuestions = [...questions];
                    newQuestions[index].answer = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  disabled={loading} // Disable textarea when loading
                />
              </div>
            ))}
            <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </section>
      )}
    </main>
  );
}