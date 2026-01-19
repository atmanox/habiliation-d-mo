
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: '📊' },
    { id: 'habilitations', label: 'Habilitations', icon: '📜' },
    { id: 'evaluations', label: 'Évaluations', icon: '📝' },
    { id: 'system', label: 'État Système', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col">
      <div className="mb-10">
        <h1 className="text-xl font-bold tracking-tight text-blue-400">CAPHABILITATION</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Gestion Technique v2.4</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
            JD
          </div>
          <div>
            <p className="text-sm font-medium">Jean Développeur</p>
            <p className="text-xs text-slate-500 italic leading-none mt-1">Fullstack Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
