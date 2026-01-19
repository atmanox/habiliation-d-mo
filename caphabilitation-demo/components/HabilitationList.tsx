
import React, { useState } from 'react';
import { Habilitation, HabilitationStatus } from '../types';

const MOCK_DATA: Habilitation[] = [
  { id: '1', title: 'Habilitation Électrique B1V', candidateName: 'Alice Martin', issueDate: '2023-10-12', expiryDate: '2025-10-12', status: HabilitationStatus.ACTIVE, score: 95 },
  { id: '2', title: 'CACES R489 - Cat 3', candidateName: 'Bob Dupont', issueDate: '2024-01-05', expiryDate: '2029-01-05', status: HabilitationStatus.ACTIVE, score: 88 },
  { id: '3', title: 'Travaux en Hauteur', candidateName: 'Claire Bernard', issueDate: '2023-11-20', expiryDate: '2024-11-20', status: HabilitationStatus.EXPIRED, score: 92 },
  { id: '4', title: 'Habilitation Nucléaire SCN1', candidateName: 'David Petit', issueDate: '2024-03-01', expiryDate: '2026-03-01', status: HabilitationStatus.PENDING, score: 0 },
];

const HabilitationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = MOCK_DATA.filter(h => 
    h.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: HabilitationStatus) => {
    switch (status) {
      case HabilitationStatus.ACTIVE: return 'bg-green-100 text-green-700';
      case HabilitationStatus.EXPIRED: return 'bg-red-100 text-red-700';
      case HabilitationStatus.PENDING: return 'bg-blue-100 text-blue-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Registre des Habilitations</h2>
          <p className="text-slate-500">Gestion et suivi des titres d'habilitations professionnelles.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">
          + Nouvelle Habilitation
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
          <input 
            type="text" 
            placeholder="Rechercher un candidat ou un titre..."
            className="w-full md:w-96 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Candidat</th>
                <th className="px-6 py-4">Titre / Type</th>
                <th className="px-6 py-4">Émission</th>
                <th className="px-6 py-4">Expiration</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.candidateName}</td>
                  <td className="px-6 py-4 text-slate-600">{item.title}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{item.issueDate}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{item.expiryDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 hover:text-blue-600 transition-colors">📄</button>
                      <button className="p-1 hover:text-amber-600 transition-colors">✏️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HabilitationList;
