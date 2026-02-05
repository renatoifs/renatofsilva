# Academic Website - Renato Ferreira da Silva

Professional bilingual (Portuguese/English) academic website for Professor at Faculty of Medicine, University of Porto (FMUP).

## 🌐 Live Site
- **Production**: [Your custom domain]
- **Preview**: https://faculty-renato.preview.emergentagent.com

## 🚀 Features

- **Fully Bilingual**: Portuguese and English with language toggle
- **Multi-page Navigation**: Home, About, Research, Teaching, Projects, Publications, Contact
- **CMS System**: Admin panel for content management
- **Publications System**: 29+ publications with filtering and sorting
- **Contact Form**: Functional contact form with backend storage
- **Responsive Design**: Mobile-first, works on all devices

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router 7.5
- Tailwind CSS 3.4
- Lucide React (icons)
- Axios (API calls)

### Backend
- FastAPI 0.110
- MongoDB (Motor async driver)
- JWT Authentication
- BeautifulSoup4 (web scraping)
- Pydantic (data validation)

## 📁 Project Structure

```
/
├── backend/
│   ├── server.py           # FastAPI application
│   ├── auth.py             # Authentication system
│   ├── data/
│   │   ├── publications.json
│   │   └── content.json
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── contexts/
│   │   │   └── LanguageContext.js
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── AboutPage.js
│   │   │   ├── ResearchPage.js
│   │   │   ├── TeachingPage.js
│   │   │   ├── ProjectsPage.js
│   │   │   ├── PublicationsPage.js
│   │   │   ├── ContactPage.js
│   │   │   ├── AdminLogin.js
│   │   │   └── AdminCMS.js
│   │   ├── index.css
│   │   └── App.css
│   ├── package.json
│   └── .env
├── README.md
└── .gitignore
```

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- Python 3.11+
- MongoDB

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend Setup
```bash
cd frontend
yarn install
yarn start
```

The application will be available at `http://localhost:3000`

## 🔐 Admin Access

- **URL**: `/admin/login`
- **Default Credentials**: `admin` / `changeme123`
- ⚠️ **Change in production!**

## 📝 Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=academic_profile
CORS_ORIGINS=*
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=[bcrypt hash]
JWT_SECRET_KEY=[random secret key]
```

## 🚢 Deployment

### Option 1: Vercel (Frontend) + Railway (Backend)
```bash
# Frontend
cd frontend
vercel --prod

# Backend
cd backend
railway up
```

### Option 2: All-in-One Platforms
- Render
- Fly.io
- Digital Ocean App Platform

## 📚 Documentation

- `/GUIA_EDICAO.md` - Content editing guide
- `/IMPLEMENTACOES_RESUMO.md` - CMS documentation
- `/URL_PERSONALIZADA.md` - Custom domain setup

## 🔗 Academic Profiles

- [ORCID](https://orcid.org/0000-0001-6517-6021)
- [Scopus](https://www.scopus.com/authid/detail.uri?authorId=57221854262)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=hw4VpSEAAAAJ)
- [CIÊNCIAVITAE](https://www.cienciavitae.pt//3611-8266-7514)
- [Authenticus](https://www.authenticus.pt/en/profileOfResearchers/publicationsList/619254)
- [ResearchGate](https://www.researchgate.net/profile/Renato-Ferreira-Da-Silva-2)
- [LinkedIn](https://www.linkedin.com/in/renatoifsilva/)

## 📧 Contact

**Email**: rsilva@med.up.pt

**Address**: Rua Doutor Plácido da Costa, 4200-450 Porto, Portugal

**Phone**: (+351) 220 426 913 | Ext: 26913

## 📄 License

© 2025 Renato Ferreira da Silva. All rights reserved.

## 🛟 Support

For issues or questions, please contact the development team or refer to the documentation files in the repository.
