// app/components/TestimonialsSlider.tsx

"use client";

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";

const testimonials = [
    {
      name: "Patricia K. Marshall",
      rating: 4.5,
      review: "This was a fantastic experience the customer service is unmatched and their professionalism was top-notch, but I didn’t like the time it took to get my case resolved but highly recommend them to anyone who has been scammed. Thank you for you Digital Asset Recovery.",
      img: "/comment/patricia.jpeg", // Replace with the actual image path
    },
    {
      name: "Brad L. Gordon",
      rating: 4.5,
      review: "I was scammed out of my cryptocurrency and didn't know where to turn, but Digital Asset Recovery was there to help. They showed great empathy and professionalism, and their hard work led to the recovery of my stolen funds. I highly recommend their services to anyone who has been the victim of a crypto scam. Thank you, Digital Asset Recovery!",
      img: "/comment/brad.jpg", // Replace with the actual image path
    },
    {
      name: "Judith S. Remington",
      rating: 4.5,
      review: "I was devastated when I was scammed out of my cryptocurrency, but Digital Asset Recovery was there to help. Their dedication and hard work led to the recovery of my stolen funds, and I couldn't be more grateful. I highly recommend their services to anyone who has been the victim of a scam.",
      img: "/comment/judith.jpg", // Replace with the actual image path
    },
    {
      name: "Robert D. Redmond",
      rating: 4.5,
      review: "I can remember when I initially contacted Digital Asset Recovery I was skeptical I thought they were like other recovery companies but to my surprise they didn’t charge any upfront fees. Although I had a few annoying delays but they helped me recover my lost crypto wallet and coins, for which I am forever grateful.",
      img: "/comment/robert.jpeg", // Replace with the actual image path
    },
    {
      name: "Gary J. Bash",
      rating: 4.5,
      review: "I thought all was lost when my Bitcoin was stolen, but Digital Asset Recovery provided a glimmer of hope. Their tireless efforts led to the recovery of my stolen funds, and I can't thank them enough. I highly recommend Digital Asset Recovery to anyone who needs their services.",
      img: "/comment/gary.jpg", // Replace with the actual image path
    },
  ];
  

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Automatically slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleCount + testimonials.length) % testimonials.length);
  };

  const getDisplayedTestimonials = () => {
    let displayed = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      displayed.push(testimonials[index]);
    }
    return displayed;
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Testimonials</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Hear Reviews From Our Amazing Clients</p>

      <div className="relative flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
          >
            {getDisplayedTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`w-${100 / visibleCount}% px-4`}
                style={{ minWidth: `${100 / visibleCount}%` }}
              >
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}