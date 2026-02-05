import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Affiliations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Affiliations</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <img
                  src="https://customer-assets.emergentagent.com/job_64a4d56c-46bc-4206-a4e5-3561919adcd4/artifacts/ny8d90k6_UFPorto_logo.png"
                  alt="University of Porto"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="https://customer-assets.emergentagent.com/job_64a4d56c-46bc-4206-a4e5-3561919adcd4/artifacts/b0778cr6_Logo.Medcids-e1644239830105.png"
                  alt="MEDCIDS"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="https://customer-assets.emergentagent.com/job_64a4d56c-46bc-4206-a4e5-3561919adcd4/artifacts/fk5av09d_RISE_logo.png"
                  alt="RISE Health"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Academic Profiles</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://orcid.org/0000-0001-6517-6021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ORCID
                </a>
              </li>
              <li>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57221854262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Scopus
                </a>
              </li>
              <li>
                <a
                  href="https://www.cienciavitae.pt//3611-8266-7514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  CIÊNCIAVITAE
                </a>
              </li>
              <li>
                <a
                  href="https://www.authenticus.pt/en/profileOfResearchers/publicationsList/619254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Authenticus
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/profile/Renato-Ferreira-Da-Silva-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ResearchGate
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/renatoifsilva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                Faculty of Medicine<br />
                University of Porto<br />
                Porto, Portugal
              </p>
              <p>
                <a
                  href="mailto:rsilva@med.up.pt"
                  className="hover:text-white transition-colors"
                >
                  rsilva@med.up.pt
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>© {currentYear} Renato Ferreira da Silva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
