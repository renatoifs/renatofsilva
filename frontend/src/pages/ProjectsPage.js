import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, Network } from 'lucide-react';

export const ProjectsPage = () => {
  const { t } = useLanguage();

  const networks = [
    'projects.network1',
    'projects.network2',
    'projects.network3',
    'projects.network4',
    'projects.network5',
    'projects.network6'
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="projects-title">
            {t('projects.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
        </div>

        {/* Current Projects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Briefcase className="mr-3 text-slate-700" size={28} />
              {t('projects.current')}
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-blue-900">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                VIGIA Project
              </h3>
              <p className="text-sm text-blue-900 font-semibold mb-3">
                {t('projects.vigia.role')}
              </p>
              <p className="text-base text-slate-700">
                {t('projects.vigia.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Professional Networks */}
        <section>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <Network className="mr-3 text-slate-700" size={28} />
              {t('projects.networks')}
            </h2>

            <div className="space-y-4">
              {networks.map((network, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {t(network)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
