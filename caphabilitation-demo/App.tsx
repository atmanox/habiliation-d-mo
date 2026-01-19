
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import HabilitationList from './components/HabilitationList';
import EvaluationForm from './components/EvaluationForm';
import SystemStatus from './components/SystemStatus';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'habilitations': return <HabilitationList />;
      case 'evaluations': return <EvaluationForm />;
      case 'system': return <SystemStatus />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Action Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span className="hover:text-slate-600 cursor-pointer">Accueil</span>
              <span>/</span>
              <span className="text-slate-800 font-medium capitalize">{activeTab}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                  🔔
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <button className="text-sm font-medium text-slate-600 hover:text-slate-800">
                Support Technique
              </button>
            </div>
          </div>

          {/* Page Content */}
          <div className="transition-all duration-300">
            {renderContent()}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
