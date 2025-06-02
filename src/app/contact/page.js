// src/app/contact/page.js
// B:\mytestProjects\ChankuConstructionsV2\src\app\contact\page.js

"use client"; //This tells NextJs that this is a client component.
import React, { useRef, useState } from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Handle form submission
    emailjs
      .sendForm(
        "service_fbcxhm5", // 'YOUR_SERVICE_ID', got it from EmailJs Email Servicess tab--
        "template_dom36cj", //'YOUR_TEMPLATE_ID',got it from EmailJs Email templates tab--Settings
        form.current,
        "ib7BFknkbnJgOy8Lr" // 'YOUR_PUBLIC_KEY' got it from EmailJs Account/profile tab--General
      )
      .then(
        (result) => {
          console.log("Email sent successfully");
          //now clear the form
          e.target.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send Message:", error);
          alert("Failed to send Message. Please try again");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex-grow">
      <div className="bg-gradient-to-r from-[#020406] to-[#01aaeb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">
            Let's discuss your next construction project
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {/* <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#01aaeb] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-600">P.O. Box 79823 - 00200</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div> */}
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#01aaeb] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+254 724 539 053</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#01aaeb] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@chankuglobal.co.ke</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#01aaeb] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name" //the template in EmailJs will use this
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#01aaeb] focus:border-[#01aaeb]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#01aaeb] focus:border-[#01aaeb]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#01aaeb] focus:border-[#01aaeb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#01aaeb] focus:border-[#01aaeb]"
                  required></textarea>
              </div>
              {/*Send Message Button*/}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#01aaeb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    Sending...
                    <svg
                      className="ml-2 h-4 w-4 animate-spin"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
