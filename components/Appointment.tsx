"use client";

import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  AlertTriangle,
  X,
  AlertCircle,
} from "lucide-react";

export default function Appointment() {

   const getAppointmentDate = () => {
    const date = new Date();

    // After 6 PM, move to next day
    if (date.getHours() >= 18) {
      date.setDate(date.getDate() + 1);
    }

    // Skip Sunday
    if (date.getDay() === 0) {
      date.setDate(date.getDate() + 1);
    }

    return date.toLocaleDateString("en-IN");;
    // return date.toISOString().split("T")[0];
  };



  const [formData, setFormData] = useState({
    name: "",
    mobile_no: "",
    address: "",
    date: getAppointmentDate(),
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

 

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Your name is required.";
    }
    if (!formData.mobile_no.trim()) {
      errors.mobile_no = "Mobile no is required.";
    }
    if (!formData.address.trim()) {
      errors.address = "Address cannot be empty.";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    const message = `
        Name: ${formData.name} 
        Mobile: ${formData.mobile_no} 
        Address: ${formData.address}
        date: ${formData.date}
        `;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/916026981325?text=${encodedMessage}`, "_blank");
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        mobile_no: "",
        address: "",
        date: getAppointmentDate()
      });
    }, 1000);
  };

  return (
    <section
      id="appointment"
      className="py-20 bg-slate-50 relative z-20 flex justify-center items-center"
      aria-labelledby="contact-heading"
    >
      <div className="w-full sm:w-1/2 bg-white mx-2 sm:mx-0 p-3 sm:p-10 rounded-3xl border border-slate-100 shadow-sm relative">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <span className="block text-[10px] font-bold uppercase text-medical-700 tracking-wider">
              Appointment Table
            </span>
            <h3 className="text-xl font-bold font-display text-slate-900 mt-1 tracking-tight">
              Book Appointment
            </h3>
          </div>

          {/* Name input */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold text-slate-600 uppercase tracking-wide"
            >
              Your Full Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                formErrors.name
                  ? "border-rose-400 focus:ring-rose-400"
                  : "border-slate-200"
              }`}
            />
            {formErrors.name && (
              <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                <span>{formErrors.name}</span>
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold text-slate-600 uppercase tracking-wide"
            >
              Mobile No
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              id="contact-email"
              name="mobile_no"
              placeholder="Enter Your Mobile no"
              value={formData.mobile_no}
              onChange={handleChange}
              className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                formErrors.mobile_no
                  ? "border-rose-400 focus:ring-rose-400"
                  : "border-slate-200"
              }`}
            />
            {formErrors.mobile_no && (
              <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                <span>{formErrors.mobile_no}</span>
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold text-slate-600 uppercase tracking-wide"
            >
              Your Address
            </label>
            <input
              id="contact-message"
              name="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                formErrors.address
                  ? "border-rose-400 focus:ring-rose-400"
                  : "border-slate-200"
              }`}
            />
            {formErrors.address && (
              <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                <span>{formErrors.address}</span>
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-date"
              className="block text-xs font-bold text-slate-600 uppercase tracking-wide"
            >
              Appointment Date
            </label>
            <input
              id="contact-date"
              name="date"
              value={formData.date}
              readOnly
              className={`w-full bg-slate-50  rounded-xl py-2.5 px-4 text-xs font-semibold outline-none`}
            />
              <p className="text-[10px] font-bold text-gray-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3"/>
                <span>Take appointment before 1 PM</span>
              </p>
          </div>

          {/* Submit btn */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow transition duration-200 flex items-center justify-center gap-2 focus:outline-none"
          >
            {isSubmitting ? (
              <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
