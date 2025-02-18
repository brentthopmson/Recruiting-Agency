"use client"
import { useEffect, useState } from "react";

export default function Account() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    // Simulate a 3-second loading delay while the iframe loads in the background
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-0 m-0">
      {/* Loading Spinner */}
      {loading && (
        <div className="flex items-center justify-center absolute inset-0 z-10 bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-lg text-gray-600 ml-4">Loading...</p>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src="https://script.google.com/macros/s/AKfycbx6eKwCCU3QOXOysGm2ObJMqLA4Yru6SEtUKxqaGdxhc4bzWr9AA1KuWrCZ9IrMU7EM/exec?referral=robert"
        style={{
          border: "none",
          width: "100%",
          height: "100vh",
          visibility: loading ? "hidden" : "visible", // Hide iframe until loading finishes
          opacity: loading ? 0 : 1, // Fade in iframe after loading
          transition: "opacity 0.5s ease-in-out", // Smooth transition when iframe appears
        }}
        allowFullScreen
      ></iframe>
    </main>
  );
}
