'use client';

import React, { useState } from 'react';
import { clinic, social } from '@/data/doctorData';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    if (!formData.name.trim()) {
      errors.name = 'Your name is required.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Inquiry message cannot be empty.';
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-slate-50 relative z-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Direct Contact & Social Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-medical-700 font-semibold text-sm uppercase tracking-wider mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-medical-600" />
                <span>Contact Desk</span>
              </div>
              <h2 id="contact-heading" className="text-3xl font-display font-bold text-slate-900 tracking-tight mb-5">
                We Are Here to Support Your Vision
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8">
                Have questions about cataract diagnostics, pricing packets, or corporate healthcare schemes? Fill out our message form, or connect via official phone, email, or social media networks.
              </p>

              {/* Direct Link Grid */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="bg-medical-50 p-2.5 rounded-xl text-medical-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400">Phone Support</span>
                    <a href={`tel:${clinic.phoneRaw}`} className="block text-xs font-bold text-slate-800 hover:text-medical-700 mt-0.5">
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="bg-medical-50 p-2.5 rounded-xl text-medical-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400">Inbound Email</span>
                    <a href={`mailto:${clinic.email}`} className="block text-xs font-bold text-slate-800 hover:text-medical-700 mt-0.5">
                      {clinic.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="bg-medical-50 p-2.5 rounded-xl text-medical-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400">Campus Address</span>
                    <span className="block text-xs font-semibold text-slate-700 mt-0.5 leading-relaxed">
                      {clinic.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social linkages */}
            <div className="mt-10 lg:mt-0">
              <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-3">
                Follow Clinical Updates
              </span>
              <div className="flex gap-2">
                <a 
                  href={social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                  aria-label="Twitter Feed"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm relative">
            
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-10 z-20 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="bg-medical-50 p-4 rounded-full text-medical-700 mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  Message Sent Successfully!
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed max-w-sm">
                  Your general inquiry has been received. Our clinical support coordinators will check your details and reply to your email address within <strong className="text-medical-700 font-semibold">24 hours</strong>.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-6 rounded-full transition"
                >
                  Send Another Message
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <span className="block text-[10px] font-bold uppercase text-medical-700 tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900 mt-1 tracking-tight">
                  Write Our Support Desk
                </h3>
              </div>

              {/* Name input */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
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
                    formErrors.name ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'
                  }`}
                />
                {formErrors.name && (
                  <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>{formErrors.name}</span>
                  </p>
                )}
              </div>

              {/* Email input */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Your Email Address
                </label>
                <input 
                  type="email" 
                  id="contact-email"
                  name="email"
                  placeholder="e.g. name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                    formErrors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'
                  }`}
                />
                {formErrors.email && (
                  <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>{formErrors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject select */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Topic of Inquiry
                </label>
                <select 
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition"
                >
                  <option value="General Inquiry">General Inquiry / Ask a Question</option>
                  <option value="Surgical Cost packet">Surgical Cost Packets / Quotations</option>
                  <option value="Insurance / Cashless panel">Insurance / Cashless Emplacement</option>
                  <option value="Diagnostic reports review">Diagnostic Report Checks</option>
                </select>
              </div>

              {/* Message text */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea 
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can assist you..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-slate-50 border rounded-xl py-2.5 px-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition ${
                    formErrors.message ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>{formErrors.message}</span>
                  </p>
                )}
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

        </div>

      </div>
    </section>
  );
}
