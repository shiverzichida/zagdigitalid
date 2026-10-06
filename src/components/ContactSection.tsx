import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { COMPANY_INFO } from '../data/companyData';
import { submitInquiry, isSupabaseConfigured } from '../lib/supabase';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project_type: 'Custom Web Application',
    estimated_budget: 'Rp 5.000.000 - Rp 15.000.000',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      if (isSupabaseConfigured) {
        await submitInquiry({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_type: formData.project_type,
          estimated_budget: formData.estimated_budget,
          message: formData.message,
        });
      }

      setSubmitted(true);
      // Seamlessly launch WhatsApp with structured proposal
      window.open(getDirectWhatsAppUrl(), '_blank');
    } catch (err: any) {
      console.error(err);
      window.open(getDirectWhatsAppUrl(), '_blank');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getDirectWhatsAppUrl = () => {
    const text = `Halo ZAG Digital, saya ingin konsultasi proyek:%0A%0A` +
      `👤 *Nama:* ${formData.name || '-' }%0A` +
      `🏢 *Perusahaan:* ${formData.company || '-' }%0A` +
      `💼 *Tipe Proyek:* ${formData.project_type}%0A` +
      `💵 *Estimasi Budget:* ${formData.estimated_budget}%0A` +
      `📝 *Kebutuhan:* ${formData.message || '-' }`;

    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mari Wujudkan Sistem Impian Bisnis Anda
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Diskusikan kebutuhan spesifik Anda dengan tim engineering ZAG Digital. Kami siap menyusun arsitektur dan proposal solusi terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Channels & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Saluran Resmi ZAG Digital
              </h3>
              <p className="text-xs text-slate-400">
                Pilih kanal komunikasi yang paling nyaman bagi Anda. Tim kami aktif merespon di jam operasional.
              </p>

              {/* Instagram Card */}
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-pink-500/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Instagram Resmi</div>
                  <div className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                    {COMPANY_INFO.instagramHandle}
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-0.5">Ikuti update & tips teknologi →</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/20">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Konsultasi WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {COMPANY_INFO.whatsappDisplay}
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">Respon cepat & ramah →</div>
                </div>
              </a>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Korespondensi</div>
                  <div className="text-sm font-bold text-white">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Untuk penawaran tender & RFQ formal</div>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>

            </div>

            {/* Guarantee Box */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Purna Jual Terjamin</span>
              </div>
              <p className="leading-relaxed text-slate-300">
                Setiap invoice dan kesepakatan dilindungi kontrak kerja sama resmi CV IT Konsultan, lengkap dengan rincian serah terima kode dan panduan penggunaan sistem.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Formulir Konsultasi & Permintaan Proposal
                </h3>
                <p className="text-xs text-slate-400">
                  Isi formulir di bawah ini, tim kami akan mempelajari kebutuhan Anda dan menghubungi kembali dalam kurun waktu 1x24 jam kerja.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center bg-cyan-950/30 rounded-2xl border border-cyan-500/40 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Terima Kasih! Pesan Anda Telah Diterima</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                    Data kebutuhan proyek Anda telah tersimpan dengan aman di sistem ZAG Digital. Ingin respon lebih instan? Anda juga dapat meneruskan pesan ke WhatsApp sekarang:
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Teruskan ke WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nama Lengkap <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nomor WhatsApp <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Contoh: 081234567890"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Kerja <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="budi@perusahaan.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nama Perusahaan / Bisnis
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Contoh: PT Bhumi Selaras"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Kategori Proyek
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="Custom Web Application">Custom Web Application</option>
                        <option value="Sistem Informasi & ERP">Sistem Informasi (SI) & ERP</option>
                        <option value="IoT Smart Access & Face ID Locker">IoT Smart Access (Face ID Gate & Smart Locker)</option>
                        <option value="HRIS Cuti & Operasional">HRIS Cuti & Operasional Pegawai</option>
                        <option value="Company Profile Modern">Company Profile Modern</option>
                        <option value="Cloud, Domain & Hosting">Cloud, Domain & Hosting Setup</option>
                        <option value="IT Maintenance & CCTV">IT Maintenance & CCTV</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Kisaran Anggaran / Budget
                      </label>
                      <select
                        name="estimated_budget"
                        value={formData.estimated_budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="< Rp 5.000.000">&lt; Rp 5.000.000</option>
                        <option value="Rp 5.000.000 - Rp 15.000.000">Rp 5.000.000 - Rp 15.000.000</option>
                        <option value="Rp 15.000.000 - Rp 35.000.000">Rp 15.000.000 - Rp 35.000.000</option>
                        <option value="> Rp 35.000.000">&gt; Rp 35.000.000 (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Rincian Kebutuhan & Ekspektasi <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan sistem Anda secara singkat (fitur yang diinginkan, alur kerja, kendala yang dihadapi saat ini)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Memproses Pengiriman...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Permintaan Konsultasi</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-2">
                    Privasi data Anda terjaga. Kami tidak akan membagikan informasi proyek kepada pihak ketiga.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
