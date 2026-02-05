import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

export const HomePage = () => {
  const { t } = useLanguage();

  // All profile links together
  const profileLinks = [
    { name: 'ORCID', url: 'https://orcid.org/0000-0001-6517-6021' },
    { name: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=57221854262' },
    { name: 'Web of Science', url: 'https://www.webofscience.com/wos/author/record/JVK-7054-2024' },
    { name: 'CIÊNCIAVITAE', url: 'https://www.cienciavitae.pt//3611-8266-7514' },
    { name: 'Authenticus', url: 'https://www.authenticus.pt/en/profileOfResearchers/publicationsList/619254' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=hw4VpSEAAAAJ' },
    { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Renato-Ferreira-Da-Silva-2' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/renatoifsilva/' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_prof-porto/artifacts/2i87jdu7__C6A2064.jpeg"
                  alt="Renato Ferreira da Silva"
                  data-testid="profile-image"
                  className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4" data-testid="profile-name">
                  Renato Ferreira da Silva
                </h1>
                <p className="text-lg text-slate-700 font-medium">
                  MPharm, PhD
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xl text-slate-800 font-semibold" data-testid="profile-role">
                  {t('home.role')}
                </p>
                <p className="text-base text-slate-700">
                  {t('home.affiliation')}
                </p>
                <p className="text-base text-slate-700 font-medium">
                  {t('home.university')}
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-base text-slate-800 font-semibold">
                  {t('home.expert')}
                </p>
                <p className="text-sm text-slate-600">
                  {t('home.researchCenter')}
                </p>
              </div>

              {/* Areas of Focus */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  {t('home.areas')}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {t('home.areasList')}
                </p>
              </div>

              {/* Profile Links - All Together */}
              <div className="pt-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                  Academic & Professional Profiles
                </h3>
                <div className="flex flex-wrap gap-3">
                  {profileLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`profile-link-${link.name.toLowerCase()}`}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src="https://customer-assets.emergentagent.com/job_64a4d56c-46bc-4206-a4e5-3561919adcd4/artifacts/ny8d90k6_UFPorto_logo.png"
              alt="University of Porto"
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://customer-assets.emergentagent.com/job_64a4d56c-46bc-4206-a4e5-3561919adcd4/artifacts/b0778cr6_Logo.Medcids-e1644239830105.png"
              alt="MEDCIDS"
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://customer-assets.emergentagent.com/job_64a4d56c-46bc-4206-a4e5-3561919adcd4/artifacts/fk5av09d_RISE_logo.png"
              alt="RISE Health"
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
