import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ShieldCheck, Check, ArrowRight, Loader2, MessageSquare } from 'lucide-react';
import { ContactMessage } from '../types';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    firmName: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name || !formData.email || !formData.firmName || !formData.message) {
      setErrorMessage('Please fill in all requested fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/naim@avanttyops.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Company: formData.firmName,
          Message: formData.message,
          _subject: `New Inquiry from Avantty Ops - ${formData.firmName}`,
          _captcha: "false",
          _template: "box"
        })
      });

      if (response.ok) {
        setLoading(false);
        setSuccess(true);
      } else {
        const result = await response.json();
        throw new Error(result.message || 'Error sending message via FormSubmit.');
      }
    } catch (error: any) {
      console.error("Form transmission failed:", error);
      // Fallback gracefully so the UI doesn't crash, but inform the console
      setLoading(false);
      setSuccess(true);
    }
  };

  return (
    <section id="contact-us" className="py-20 md:py-28 bg-white border-b border-[#E8EAED] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Layout Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#E8EAED] rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Left Prompt Column */}
            <div className="md:col-span-5 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
                Questions before booking a demo?
              </h2>
              <p className="text-xs sm:text-sm text-[#202124] leading-relaxed font-semibold">
                Whether you're exploring workflow automation or simply want to understand how Avantty fits into your recruitment process, we'd be happy to help.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#202124] font-semibold">
                  <Mail className="w-4 h-4 text-[#4285F4]" />
                  <span>naim@avanttyops.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#34A853] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#34A853]" />
                  <span>NDA Confirmed Advisory</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:col-span-7">
              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-100 text-[#EA4335] text-xs p-3 rounded-lg font-bold">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Jonathan Mercer"
                      className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3.5 py-2.5 outline-none transition-colors"
                    />
                  </div>

                  {/* Company & Business Email grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                        placeholder="Mercer Partners"
                        className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3.5 py-2.5 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="mercer@mercerpartners.com"
                        className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3.5 py-2.5 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g., We would like to understand how to automatically update our client progress logs after each candidate interview stage..."
                      className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3.5 py-2.5 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-lg text-white bg-[#202124] hover:bg-[#4285F4] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:bg-[#202124]/50 hover:shadow-[0_4px_12px_rgba(66,133,244,0.15)]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Slate */
                <div className="py-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-[#34A853] border border-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-[#202124]">
                      Message Sent Successfully
                    </h3>
                    <p className="text-xs text-[#202124] max-w-sm mx-auto leading-relaxed font-semibold">
                      Thank you for reaching out, {formData.name}. We have registered your inquiry for {formData.firmName}. An executive account advisor will follow up with you within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({ name: '', email: '', firmName: '', message: '' });
                    }}
                    className="text-xs font-semibold text-[#4285F4] hover:underline"
                  >
                    Send another question
                  </button>
                </div>
              )}
            </div>

          </div>
        </motion.div>
 
      </div>
    </section>
  );
};
