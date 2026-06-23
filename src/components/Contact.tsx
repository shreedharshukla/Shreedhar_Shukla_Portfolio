import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, Building2, User, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    company: string;
    message: string;
  } | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMailtoUrl = (data: typeof formData) => {
    const subject = `[Portfolio Hiring Info] Query from ${data.name}`;
    const body = `Hi Shreedhar,

This is a hiring and projects inquiry generated from your portfolio contact station.

  • Sender Name: ${data.name}
  • Sender Email: ${data.email}
  • Company: ${data.company || 'Not Specified'}

Inquiry Content:
--------------------------------------------------
${data.message}
--------------------------------------------------

Please respond to my email at: ${data.email}

Best regards,
${data.name}`;
    return `mailto:${encodeURIComponent(PERSONAL_INFO.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getGmailUrl = (data: typeof formData) => {
    const subject = `[Portfolio Hiring Info] Query from ${data.name}`;
    const body = `Hi Shreedhar,

This is a hiring and projects inquiry generated from your portfolio contact station.

  • Sender Name: ${data.name}
  • Sender Email: ${data.email}
  • Company: ${data.company || 'Not Specified'}

Inquiry Content:
--------------------------------------------------
${data.message}
--------------------------------------------------

Please respond to my email at: ${data.email}

Best regards,
${data.name}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getOutlookUrl = (data: typeof formData) => {
    const subject = `[Portfolio Hiring Info] Query from ${data.name}`;
    const body = `Hi Shreedhar,

This is a hiring and projects inquiry generated from your portfolio contact station.

  • Sender Name: ${data.name}
  • Sender Email: ${data.email}
  • Company: ${data.company || 'Not Specified'}

Inquiry Content:
--------------------------------------------------
${data.message}
--------------------------------------------------

Please respond to my email at: ${data.email}

Best regards,
${data.name}`;
    return `https://outlook.live.com/default.aspx?rru=compose&to=${encodeURIComponent(PERSONAL_INFO.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyDraft = (data: typeof formData) => {
    const fullText = `To: ${PERSONAL_INFO.email}\nSubject: [Portfolio Hiring Info] Query from ${data.name}\n\nHi Shreedhar,\n\nThis is a hiring and projects inquiry generated from your portfolio contact station.\n\n  • Sender Name: ${data.name}\n  • Sender Email: ${data.email}\n  • Company: ${data.company || 'Not Specified'}\n\nInquiry Content:\n--------------------------------------------------\n${data.message}\n--------------------------------------------------\n\nPlease respond to my email at: ${data.email}\n\nBest regards,\n${data.name}`;
    navigator.clipboard.writeText(fullText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitStatus('sending');
    const finalData = { ...formData };
    setSubmittedData(finalData);

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 850);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-505 dark:text-cyan-400 uppercase tracking-widest">GET IN TOUCH</p>
          <h2 className={`font-display text-3xl font-bold tracking-tight mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Contact & Hire Me
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mt-2 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Info Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all h-full flex flex-col justify-between ${
              isDark 
                ? 'bg-neutral-900/60 border-neutral-800' 
                : 'bg-white border-neutral-200 shadow-md shadow-neutral-105'
            }`}>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-500 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Open to Worldwide Remote & In-Office Roles</span>
                </div>

                <h3 className={`font-display text-lg sm:text-xl font-bold ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  Let's engineer solutions together.
                </h3>
                
                <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Open to opportunities in <strong className="text-cyan-500">Analytics, Product, Machine Learning, and Data roles</strong>. Drop a query or invite me to coordinate on ongoing engineering workflows.
                </p>
              </div>

              {/* Directly Accessible Contact Elements */}
              <div className="space-y-4.5 pt-8">
                {/* Email Item */}
                <div className={`flex items-center justify-between p-3.5 rounded-xl border ${
                  isDark ? 'bg-neutral-950/50 border-neutral-850' : 'bg-neutral-50 border-neutral-150'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">PRIMARY EMAIL</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className={`text-xs font-medium hover:underline ${
                        isDark ? 'text-neutral-300' : 'text-neutral-800'
                      }`}>
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className={`p-1.5 rounded border transition-all ${
                      isDark 
                        ? 'bg-neutral-900 border-neutral-800 hover:border-cyan-500' 
                        : 'bg-white border-neutral-200 hover:border-cyan-500 text-neutral-600'
                    }`}
                    title="Copy Email to Clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Social links row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* LinkedIn */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                      isDark 
                        ? 'bg-neutral-950/50 border-neutral-850 hover:border-purple-500/50 hover:bg-neutral-900/50' 
                        : 'bg-neutral-50 border-neutral-150 hover:border-purple-500/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-purple-400" />
                      <span className={`text-xs font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-855'}`}>
                        LinkedIn
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                      isDark 
                        ? 'bg-neutral-950/50 border-neutral-850 hover:border-cyan-500/50 hover:bg-neutral-900/50' 
                        : 'bg-neutral-50 border-neutral-150 hover:border-cyan-500/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span className={`text-xs font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-855'}`}>
                        GitHub
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Right Column */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-neutral-900/60 border-neutral-800' 
                : 'bg-white border-neutral-200 shadow-md shadow-neutral-105'
            }`}>
              
              {submitStatus === 'success' && submittedData ? (
                <div className="space-y-5 animate-fade-in text-left">
                  <div className="p-4.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-450 mt-0.5 shrink-0 animate-pulse" />
                      <div>
                        <h4 className="font-bold text-sm tracking-wide text-cyan-400">Structured Packet Created!</h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          To make sure Shreedhar receives your hiring query directly on his email ID (<span className="text-cyan-400 font-semibold">{PERSONAL_INFO.email}</span>), please pick your preferred method to dispatch it:
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Packet specification badge */}
                  <div className={`p-4 rounded-xl border font-mono text-xs leading-relaxed space-y-2 ${
                    isDark ? 'bg-neutral-950/80 border-neutral-800/80 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                  }`}>
                    <div className="border-b border-neutral-200/10 dark:border-neutral-800 pb-1.5 flex justify-between items-center text-[10px] text-neutral-500">
                      <span>DISPATCH SPECIFICATION DRAFT</span>
                      <span className="text-emerald-400 animate-pulse">● READY TO MAIL</span>
                    </div>
                    <div><span className="text-neutral-500">To:</span> {PERSONAL_INFO.email}</div>
                    <div><span className="text-neutral-500">Subject:</span> [Portfolio Hiring Info] Query from {submittedData.name}</div>
                    <div><span className="text-neutral-500">Sender Name:</span> {submittedData.name}</div>
                    <div><span className="text-neutral-500">Sender Email:</span> {submittedData.email}</div>
                    {submittedData.company && <div><span className="text-neutral-500">Company:</span> {submittedData.company}</div>}
                    <div className="border-t border-neutral-200/10 dark:border-neutral-800 pt-2 mt-2">
                      <div className="text-neutral-500 mb-1">Message Body:</div>
                      <div className={`p-3 rounded-lg max-h-28 overflow-y-auto whitespace-pre-wrap text-[11px] leading-relaxed ${
                        isDark ? 'bg-neutral-900/50 border border-neutral-800 text-neutral-200' : 'bg-white border border-neutral-200 text-neutral-800'
                      }`}>
                        {submittedData.message}
                      </div>
                    </div>
                  </div>

                  {/* Mail launchers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <a
                      href={getGmailUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-rose-500 text-white hover:bg-rose-600 transition-all text-center shadow-lg shadow-rose-500/10 focus:outline-none cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Compose with Gmail</span>
                    </a>

                    <a
                      href={getMailtoUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-cyan-500 text-white hover:bg-cyan-600 transition-all text-center shadow-lg shadow-cyan-500/10 focus:outline-none cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Use Default Mail App</span>
                    </a>

                    <a
                      href={getOutlookUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold border transition-all text-center focus:outline-none cursor-pointer ${
                        isDark 
                          ? 'border-neutral-800 hover:border-cyan-500/40 hover:bg-neutral-900/40 text-neutral-300' 
                          : 'border-neutral-250 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>Outlook Live Web</span>
                    </a>

                    <button
                      onClick={() => handleCopyDraft(submittedData)}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-none ${
                        copiedDraft
                          ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
                          : isDark 
                            ? 'border-neutral-800 hover:border-cyan-500/40 hover:bg-neutral-900/40 text-neutral-300' 
                            : 'border-neutral-250 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      {copiedDraft ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400 animate-pulse" />}
                      <span>{copiedDraft ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={() => {
                        setSubmitStatus('idle');
                        setSubmittedData(null);
                      }}
                      className={`text-xs font-mono hover:underline cursor-pointer ${isDark ? 'text-neutral-500 hover:text-cyan-400' : 'text-neutral-400 hover:text-cyan-600'}`}
                    >
                      ← EDIT DETAILS & COMPOSE AGAIN
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div className="space-y-1">
                      <label htmlFor="form-name" className={`text-[10px] font-mono tracking-wider uppercase block ${
                        isDark ? 'text-neutral-500' : 'text-neutral-500'
                      }`}>
                        YOUR NAME *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className={`w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-lg border outline-none transition-all ${
                            isDark 
                              ? 'bg-neutral-950/80 border-neutral-800 text-neutral-200 focus:border-cyan-500' 
                              : 'bg-neutral-50/50 border-neutral-200 text-neutral-850 focus:border-cyan-500 focus:bg-white'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="space-y-1">
                      <label htmlFor="form-email" className="text-[10px] font-mono tracking-wider uppercase block text-neutral-500">
                        EMAIL ADDRESS *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="recruiter@company.com"
                          className={`w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-lg border outline-none transition-all ${
                            isDark 
                              ? 'bg-neutral-950/80 border-neutral-800 text-neutral-200 focus:border-cyan-500' 
                              : 'bg-neutral-50/50 border-neutral-200 text-neutral-850 focus:border-cyan-500 focus:bg-white'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company field */}
                  <div className="space-y-1">
                    <label htmlFor="form-company" className="text-[10px] font-mono tracking-wider uppercase block text-neutral-500">
                      COMPANY (OPTIONAL)
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        id="form-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Tech Corporation"
                        className={`w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-lg border outline-none transition-all ${
                          isDark 
                            ? 'bg-neutral-950/80 border-neutral-800 text-neutral-205 focus:border-cyan-500' 
                            : 'bg-neutral-50/50 border-neutral-200 text-neutral-810 focus:border-cyan-500 focus:bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label htmlFor="form-msg" className="text-[10px] font-mono tracking-wider uppercase block text-neutral-500">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      id="form-msg"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="We looked at your UAV surveillance and payments analysis codebases and would love to schedule a screening interview..."
                      className={`w-full text-xs sm:text-sm px-4 py-3 rounded-lg border outline-none resize-none transition-all ${
                        isDark 
                          ? 'bg-neutral-950/80 border-neutral-800 text-neutral-200 focus:border-cyan-500' 
                          : 'bg-neutral-50/50 border-neutral-200 text-neutral-850 focus:border-cyan-500 focus:bg-white'
                      }`}
                    />
                  </div>

                  {/* Submit actions */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className={`w-full flex items-center justify-center gap-2.5 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        submitStatus === 'sending'
                          ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                          : 'bg-cyan-500 text-white hover:bg-cyan-600 hover:shadow shadow-cyan-500/10'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitStatus === 'sending' ? 'Transmitting Data...' : 'Transmit Query'}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
