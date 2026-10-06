import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle, 
  Globe, 
  Sparkles, 
  Anchor, 
  Dumbbell, 
  Layers,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { CASE_STUDIES, COMPANY_INFO } from '../data/companyData';
import type { CaseStudy } from '../lib/types';

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'maritime' | 'sports'>('all');

  const filteredProjects = activeTab === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.categoryGroup === activeTab);

  const getIndustryIcon = (group: string) => {
    switch (group) {
      case 'maritime':
        return <Anchor className="w-3.5 h-3.5 text-cyan-400" />;
      case 'sports':
        return <Dumbbell className="w-3.5 h-3.5 text-rose-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-indigo-400" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portofolio & Live Screenshot</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Karya Nyata yang Telah Beroperasi di Industri
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Tangkapan layar hero page resmi dari website dan portal operasional yang telah dipercayakan kepada ZAG Digital Indonesia.
            </p>
          </div>

          {/* Quick CTA */}
          <div className="shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20ZAG%20Digital,%20saya%20tertarik%20membahas%20pembuatan%20website%20seperti%20portofolio%20Anda.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-cyan-400 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/60 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Bangun Sistem Serupa</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Semua Portofolio ({CASE_STUDIES.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('maritime')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === 'maritime'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>Maritime & Logistics (3)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('sports')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === 'sports'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Fitness, Combat & Smart IoT (2)</span>
          </button>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && activeTab === 'all';
            return (
              <div
                key={project.id}
                className={`flex flex-col justify-between bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group ${
                  isFeatured ? 'lg:col-span-12 bg-gradient-to-br from-slate-900/95 to-slate-950' : 'lg:col-span-6'
                }`}
              >
                <div>
                  {/* Browser Window Mockup Frame */}
                  <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                      <span className="ml-2 font-mono text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                        {project.displayUrl}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                          {project.badge}
                        </span>
                      )}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 p-1 rounded transition-colors"
                        title="Buka Website"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Screenshot Container */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden bg-slate-950 aspect-[16/9] group/img"
                  >
                    <img
                      src={project.image}
                      alt={`Screenshot hero page ${project.client} - ${project.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay & Hover Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity"></div>
                    
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity transform translate-y-1 group-hover/img:translate-y-0 duration-300">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-500/90 backdrop-blur-md shadow-lg shadow-cyan-500/30">
                        <span>Lihat Web Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>

                  {/* IoT Hardware Highlight Banner if applicable */}
                  {project.tags.includes('Face ID Turnstile Gate') && (
                    <div className="bg-gradient-to-r from-emerald-950/90 via-cyan-950/80 to-slate-950 border-b border-cyan-500/30 px-4 py-2.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>Hardware IoT: Face ID Turnstile Gate & Smart Locker Terintegrasi</span>
                      </div>
                      <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                        Zero Key Loss
                      </span>
                    </div>
                  )}

                  {/* Project Details Content */}
                  <div className="p-6 sm:p-7">
                    
                    {/* Client & Category Meta */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <div className="flex items-center gap-1.5 font-mono text-cyan-400 font-semibold">
                        {getIndustryIcon(project.categoryGroup)}
                        <span>{project.client}</span>
                      </div>
                      <span className="text-slate-500 font-mono text-[11px]">{project.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Challenge & Solution */}
                    <div className={`grid gap-3 mb-5 text-xs text-slate-300 ${isFeatured ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                      <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/70">
                        <span className="text-rose-400 font-semibold block mb-1">
                          🎯 Kebutuhan & Tantangan Klien:
                        </span>
                        <p className="leading-relaxed">{project.challenge}</p>
                      </div>

                      <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/70">
                        <span className="text-emerald-400 font-semibold block mb-1">
                          ⚡ Eksekusi Solusi ZAG Digital:
                        </span>
                        <p className="leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results Bullet Points */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-semibold text-slate-200 block">
                        Hasil & Fitur Unggulan:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {project.results.map((res, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Bar: Tags and Action Button */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/10 transition-all shrink-0 w-full sm:w-auto justify-center mt-2 sm:mt-0"
                  >
                    <span>Kunjungi Live Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
