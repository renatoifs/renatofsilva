import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Save, History, LogOut, RefreshCw } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const AdminCMS = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [versions, setVersions] = useState([]);
  const [activeTab, setActiveTab] = useState('edit');
  const [saveMessage, setSaveMessage] = useState('');
  const navigate = useNavigate();

  const getAuthHeaders = () => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return null;
    }
    return { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    fetchContent();
    fetchVersions();
  }, []);

  const fetchContent = async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) return;

      const response = await axios.get(`${API}/admin/content`, { headers });
      setContent(response.data);
      setLoading(false);
    } catch (err) {
      if (err.response?.status === 401) {
        navigate('/admin/login');
      }
    }
  };

  const fetchVersions = async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) return;

      const response = await axios.get(`${API}/admin/content/versions`, { headers });
      setVersions(response.data);
    } catch (err) {
      console.error('Error fetching versions:', err);
    }
  };

  const handleUpdate = async (section, language, field, value) => {
    try {
      const headers = getAuthHeaders();
      if (!headers) return;

      setSaving(true);
      await axios.put(`${API}/admin/content`, {
        section,
        language,
        field,
        value
      }, { headers });

      setSaveMessage('Saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
      fetchVersions();
      setSaving(false);
    } catch (err) {
      setSaveMessage('Error saving');
      setSaving(false);
    }
  };

  const handleRevert = async (versionId) => {
    try {
      const headers = getAuthHeaders();
      if (!headers) return;

      await axios.post(`${API}/admin/content/revert/${versionId}`, {}, { headers });
      fetchContent();
      fetchVersions();
      setSaveMessage('Reverted successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (err) {
      setSaveMessage('Error reverting');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-slate-900 border-r-transparent"></div>
          <p className="mt-4 text-slate-600">Loading CMS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-slate-900">Content Management System</h1>
            
            <div className="flex items-center space-x-4">
              {saveMessage && (
                <span className="text-sm text-green-600 font-medium">{saveMessage}</span>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 pb-4">
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'edit'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Edit Content
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                activeTab === 'history'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <History size={18} />
              <span>Version History</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'edit' && content && (
          <div className="space-y-8">
            {Object.keys(content).map((section) => (
              <div key={section} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">{section}</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* English */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-700 flex items-center space-x-2">
                      <span className="inline-block w-8 h-6 bg-blue-600 rounded"></span>
                      <span>English</span>
                    </h3>
                    {Object.keys(content[section].en || {}).map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-slate-700 mb-2 capitalize">
                          {field.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        <textarea
                          value={content[section].en[field]}
                          onChange={(e) => {
                            const newContent = { ...content };
                            newContent[section].en[field] = e.target.value;
                            setContent(newContent);
                          }}
                          onBlur={(e) => handleUpdate(section, 'en', field, e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent font-mono text-sm"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Portuguese */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-700 flex items-center space-x-2">
                      <span className="inline-block w-8 h-6 bg-green-600 rounded"></span>
                      <span>Português</span>
                    </h3>
                    {Object.keys(content[section].pt || {}).map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-slate-700 mb-2 capitalize">
                          {field.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        <textarea
                          value={content[section].pt[field]}
                          onChange={(e) => {
                            const newContent = { ...content };
                            newContent[section].pt[field] = e.target.value;
                            setContent(newContent);
                          }}
                          onBlur={(e) => handleUpdate(section, 'pt', field, e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent font-mono text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Version History</h2>
            
            <div className="space-y-4">
              {versions.map((version) => (
                <div key={version.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-semibold text-slate-900">
                        {version.section} / {version.language} / {version.field}
                      </span>
                      <span className="text-xs text-slate-500">
                        by {version.author}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">
                      <span className="font-medium">From:</span> {version.old_value?.substring(0, 100)}...
                    </p>
                    <p className="text-sm text-slate-600">
                      <span className="font-medium">To:</span> {version.new_value?.substring(0, 100)}...
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      {new Date(version.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRevert(version.id)}
                    className="ml-4 px-3 py-1 text-sm bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center space-x-1"
                  >
                    <RefreshCw size={14} />
                    <span>Revert</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
