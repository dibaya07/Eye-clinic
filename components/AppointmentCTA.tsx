'use client';

import React, { useState } from 'react';
import { clinic, services } from '@/data/doctorData';
import { Calendar, Clock, User, Phone, Clipboard, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function AppointmentCTA() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    slot: 'Morning (9:00 AM - 12:00 PM)',
    serviceId: 'comp-checkup',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on write
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = 'Please enter your actual full name.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.date) {
      errors.date = 'Preferred Appointment Date is required.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.date = 'Date cannot be in the past.';
      } else if (selectedDate.getDay() === 0) {
        errors.date = 'Sunday is closed. Please pick Mon - Sat.';
      }
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

    // Trigger loading states
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        date: '',
        slot: 'Morning (9:00 AM - 12:00 PM)',
        serviceId: 'comp-checkup',
        notes: ''
      });
    }, 1200);
  };

  return (
    <section 
      id="appointment" 
      className="py-20 bg-gradient-to-br from-medical-900 to-navy-950 text-white relative z-20 overflow-hidden"
      aria-labelledby="appointment-heading"
    >
      {/* Decorative radial pulse */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-medical-600/10 rounded-full blur-3xl opacity-60"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct value prop and counseling (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-bold uppercase bg-medical-800 text-medical-200 py-1 px-3 rounded-full tracking-widest inline-block">
              Outpatient Admission Desk
            </span>
            <h2 id="appointment-heading" className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white leading-none">
              {clinic.appointmentBannerTitle}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              {clinic.appointmentBannerText}
            </p>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/5 p-2 rounded-lg text-medical-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  <strong>₹500 Consulting Fee:</strong> Paid directly during registration, includes complete computerized auto-refraction testing.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white/5 p-2 rounded-lg text-medical-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  <strong>No-Obligation Rescheduling:</strong> Change dates anytime on WhatsApp or phone callback without any administrative hassle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form (7 cols) */}
          <div className="lg:col-span-7 bg-white text-slate-800 p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-2xl relative">
            
            {/* Form Title */}
            <div className="mb-8">
              <span className="block text-[10px] font-bold uppercase text-medical-700 tracking-wider">
                Outpatient Registration
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 mt-1 tracking-tight">
                Secure Your Preferred Priority Slot
              </h3>
            </div>

            {/* Success Overlay Panel */}
            {isSuccess && (
              <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-10 z-20 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="bg-medical-50 p-4 rounded-full text-medical-700 mb-6 shadow-inner animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-display tracking-tight">
                  Appointment Submitted!
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed max-w-md">
                  {"Thank you for placing your trust in Clear Vision Eye Hospital. Dr. Arjun Sharma's medical coordinators will call you on your phone number within "}
                  <strong className="text-medical-700 font-bold">2 hours</strong>
                  {" to finalize your exact slot timings."}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-6 rounded-full shadow transition"
                >
                  Book Another Appointment
                </button>
              </div>
            )}

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-medical-600" />
                    <span>Full Name</span>
                  </label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    placeholder="Enter Patient Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                      formErrors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>{formErrors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-medical-600" />
                    <span>Phone Number</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                      formErrors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>{formErrors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="block text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-medical-600" />
                    <span>Preferred Date</span>
                  </label>
                  <input 
                    type="date" 
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                      formErrors.date ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.date && (
                    <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>{formErrors.date}</span>
                    </p>
                  )}
                </div>

                {/* Time Slot */}
                <div className="space-y-1.5">
                  <label htmlFor="slot" className="block text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-medical-600" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select 
                    id="slot"
                    name="slot"
                    value={formData.slot}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="Evening (3:00 PM - 7:00 PM)">Evening (3:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Service Requested */}
              <div className="space-y-1.5">
                <label htmlFor="serviceId" className="block text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  <Clipboard className="w-3.5 h-3.5 text-medical-600" />
                  <span>Clinical Service Needed</span>
                </label>
                <select 
                  id="serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition"
                >
                  {services.map((serv) => (
                    <option key={serv.id} value={serv.id}>{serv.title}</option>
                  ))}
                </select>
              </div>

              {/* Notes Message */}
              <div className="space-y-1.5">
                <label htmlFor="notes" className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Additional Notes or Ocular Symptoms
                </label>
                <textarea 
                  id="notes"
                  name="notes"
                  rows={2}
                  placeholder="e.g. History of high blood sugar, blurry vision for three months, or general notes..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-medical-700 hover:bg-medical-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-medical-600 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <span>Submit Appointment Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
