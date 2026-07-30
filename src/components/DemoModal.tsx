import React, { useState } from 'react';
import { X, Check, ArrowRight, Loader2, Calendar } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    selectedDate: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.firstName || !formData.lastName || !formData.workEmail || !formData.companyName || !formData.selectedDate) {
      setValidationError('Please complete all required fields.');
      return;
    }

    if (!formData.workEmail.includes('@')) {
      setValidationError('Please enter a valid corporate email address.');
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
          Name: `${formData.firstName} ${formData.lastName}`,
          Email: formData.workEmail,
          Company: formData.companyName,
          PreferredDate: formData.selectedDate,
          _subject: `New Demo Booking Request from ${formData.firstName} (${formData.companyName})`,
          _captcha: "false",
          _template: "box"
        })
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
      } else {
        const result = await response.json();
        throw new Error(result.message || 'Error sending message via FormSubmit.');
      }
    } catch (error: any) {
      console.error("Demo submission failed:", error);
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Dark overlay backdrop */}
      <div 
        className="fixed inset-0 bg-[#202124]/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-xl transform overflow-hidden rounded-xl bg-white p-6 md:p-8 text-left shadow-2xl transition-all border border-[#E8EAED]">
          
          {/* Close Trigger Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#202124] hover:text-[#4285F4] transition-colors p-1 bg-gray-50 rounded-full border border-gray-100 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Modal Header */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
                  Book a Demo
                </h3>
              </div>

              {/* Error Alert panel */}
              {validationError && (
                <div className="bg-red-50 border border-red-200 text-[#EA4335] text-xs px-4 py-3 rounded-lg font-bold">
                  {validationError}
                </div>
              )}

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First name */}
                <div>
                  <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                    First Name <span className="text-[#EA4335]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3 py-2.5 outline-none transition-colors font-sans"
                    placeholder="Eleanor"
                  />
                </div>

                {/* Last name */}
                <div>
                  <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                    Last Name <span className="text-[#EA4335]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3 py-2.5 outline-none transition-colors font-sans"
                    placeholder="Vance"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                    Work Email Address <span className="text-[#EA4335]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3 py-2.5 outline-none transition-colors font-sans"
                    placeholder="vance@vancesterling.com"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5">
                    Search Firm Name <span className="text-[#EA4335]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3 py-2.5 outline-none transition-colors font-sans"
                    placeholder="Vance & Sterling Advisory"
                  />
                </div>
              </div>

              {/* Best date for you? Date Picker */}
              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#4285F4]" />
                  Best date for you? <span className="text-[#EA4335]">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.selectedDate}
                  onChange={(e) => setFormData({ ...formData, selectedDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full text-sm border border-[#E8EAED] focus:border-[#4285F4] rounded-lg px-3.5 py-2.5 outline-none transition-colors font-sans bg-white text-[#202124] cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-end">
                <button
                  id="submit-request-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold rounded-lg text-white bg-[#202124] hover:bg-[#4285F4] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:bg-[#202124]/50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Booking Demo...
                    </>
                  ) : (
                    <>
                      Book a Demo
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Success Response State Screen */
            <div className="py-8 text-center space-y-6">
              <div className="mx-auto w-14 h-14 bg-emerald-50 text-[#34A853] border border-emerald-100 rounded-full flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
                  Demo Requested Successfully
                </h3>
                <p className="text-sm text-[#202124] max-w-md mx-auto leading-relaxed font-semibold">
                  Thank you, <span className="font-extrabold text-black">{formData.firstName}</span>. We have scheduled your demo request for <span className="font-extrabold text-[#4285F4]">{formData.selectedDate}</span>. An advisor will reach out to confirm your session details shortly.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-semibold text-[#202124] hover:text-[#4285F4] bg-gray-50 hover:bg-gray-100 border border-[#E8EAED] rounded-lg transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
