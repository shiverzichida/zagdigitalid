import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ProjectType {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
  durationDays: number;
}

interface FeatureAddon {
  id: string;
  name: string;
  desc: string;
  price: number;
  durationDays: number;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'landing-company',
    name: 'Company Profile & Landing Page',
    desc: 'Website modern, responsif, SEO-friendly, dan animasi interaktif.',
    basePrice: 2500000,
    durationDays: 7,
  },
  {
    id: 'web-si-logistics',
    name: 'Sistem Informasi (SI) & ERP',
    desc: 'Modul Bill of Lading, surat jalan, invoice otomatis, & inventory.',
    basePrice: 6500000,
    durationDays: 21,
  },
  {
    id: 'hris-cuti',
    name: 'HRIS & Portal Cuti / Absensi',
    desc: 'Sistem perizinan cuti berjenjang, absensi, & evaluasi staf.',
    basePrice: 4500000,
    durationDays: 14,
  },
  {
    id: 'custom-saas',
    name: 'Custom Web Application / SaaS',
    desc: 'Aplikasi web kompleks dengan database besar dan logic khusus.',
    basePrice: 9000000,
    durationDays: 30,
  },
  {
    id: 'smart-facility-gym',
    name: 'Smart Gym & IoT Access System',
    desc: 'Web portal member + integrasi Turnstile Gate & Smart Locker IoT.',
    basePrice: 8500000,
    durationDays: 21,
  },
];

const ADDONS: FeatureAddon[] = [
  {
    id: 'face-id-gate',
    name: 'Face ID Biometric & Turnstile Gate',
    desc: 'Gate akses keluar-masuk otomatis sinkron database aktif member',
    price: 4500000,
    durationDays: 7,
  },
  {
    id: 'smart-locker-iot',
    name: 'Smart Locker IoT (Face ID Credential)',
    desc: 'Loker tanpa kunci fisik, buka & kunci via scan wajah member',
    price: 3500000,
    durationDays: 5,
  },
  {
    id: 'domain-hosting',
    name: 'Domain .id/.com + Cloud Hosting 1 Tahun',
    desc: 'Setup server high-speed, SSL, & domain resmi',
    price: 500000,
    durationDays: 1,
  },
  {
    id: 'pdf-invoice',
    name: 'Generator PDF Invoice & Cetak Otomatis',
    desc: 'Template faktur/invoice otomatis berstandar pajak',
    price: 850000,
    durationDays: 3,
  },
  {
    id: 'wa-notification',
    name: 'Notifikasi Otomatis via WhatsApp',
    desc: 'Kirim notifikasi tagihan/status ke nomor klien',
    price: 750000,
    durationDays: 2,
  },
  {
    id: 'payment-gateway',
    name: 'Integrasi Payment Gateway (QRIS, VA)',
    desc: 'Terima pembayaran otomatis tanpa cek mutasi manual',
    price: 1500000,
    durationDays: 4,
  },
  {
    id: 'membership-parking',
    name: 'Modul Member & Manajemen Parkir',
    desc: 'Integrasi RFID / barcode untuk kartu akses & gate parkir',
    price: 1200000,
    durationDays: 4,
  },
  {
    id: 'extended-maintenance',
    name: 'Paket Maintenance & CCTV Monitoring 1 Tahun',
    desc: 'Monitoring 24/7, backup harian & maintenance hardware loker/CCTV',
    price: 1500000,
    durationDays: 0,
  },
];

export default function ProjectCalculator() {
  const [selectedType, setSelectedType] = useState<ProjectType>(PROJECT_TYPES[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['domain-hosting']);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculateTotal = () => {
    let total = selectedType.basePrice;
    let days = selectedType.durationDays;

    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) {
        total += addon.price;
        days += addon.durationDays;
      }
    });

    return { total, days };
  };

  const { total, days } = calculateTotal();

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(number);
  };

  const generateWhatsAppMessage = () => {
    const addonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Halo ZAG Digital, saya ingin konsultasi proyek berdasarkan estimasi kalkulator web:%0A%0A` +
      `📌 *Tipe Proyek:* ${selectedType.name}%0A` +
      `➕ *Modul Tambahan:* ${addonNames || 'Standar'}%0A` +
      `💰 *Estimasi Biaya:* ${formatRupiah(total)}%0A` +
      `⏱️ *Estimasi Timeline:* ± ${days} Hari Kerja%0A%0A` +
      `Apakah bisa kita diskusikan lebih lanjut detail kebutuhannya?`;

    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="calculator" class="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4" />
            <span>Kalkulator Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hitung Estimasi Biaya & Waktu Proyek Anda
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Dapatkan gambaran awal estimasi investasi secara transparan tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-extrabold flex items-center justify-center">
                  1
                </span>
                <span>Pilih Jenis Sistem / Aplikasi</span>
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Pilih jenis fondasi perangkat lunak yang ingin Anda kembangkan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-md shadow-cyan-500/10'
                          : 'bg-slate-950/50 border-slate-800/90 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">{type.name}</span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">{type.desc}</p>
                      <div className="text-xs font-mono font-semibold text-cyan-400">
                        Mulai {formatRupiah(type.basePrice)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-extrabold flex items-center justify-center">
                  2
                </span>
                <span>Modul Tambahan & Integrasi</span>
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Tambahkan kapabilitas ekstra sesuai SOP bisnis Anda.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-cyan-950/30 border-cyan-500/70 text-white'
                          : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? 'bg-cyan-500 text-slate-950'
                            : 'border border-slate-700 bg-slate-900'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>

                      <div className="flex-1">
                        <div className="text-xs font-semibold text-white mb-0.5">{addon.name}</div>
                        <div className="text-[11px] text-slate-400 mb-1.5">{addon.desc}</div>
                        <div className="text-xs font-mono text-cyan-400">
                          +{formatRupiah(addon.price)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Summary Sticky Card (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-cyan-500/10">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Ringkasan Estimasi
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 font-mono">
                  Transparan
                </span>
              </div>

              {/* Selected base info */}
              <div className="py-4 space-y-3 text-xs border-b border-slate-800">
                <div>
                  <span className="text-slate-400 block mb-0.5">Tipe Proyek:</span>
                  <span className="font-semibold text-white">{selectedType.name}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Modul Dipilih:</span>
                  <span className="font-medium text-slate-300">
                    {selectedAddons.length} modul aktif
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2 text-cyan-300 font-medium">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Estimasi Pengerjaan: ± {days} Hari Kerja</span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="py-5">
                <div className="text-xs text-slate-400 mb-1">Perkiraan Investasi:</div>
                <div className="text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {formatRupiah(total)}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  *Termasuk garansi 30 hari pemeliharaan minor & invoice resmi CV IT Konsultan.
                </div>
              </div>

              {/* CTA WhatsApp Button */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Spek ke WhatsApp</span>
              </a>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Konsultasi gratis & tanpa komitmen ikatan.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
