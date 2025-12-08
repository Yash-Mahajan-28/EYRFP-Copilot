'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { type RFP } from '@/lib/rfpParser';
import { Search, Globe, Download, CheckCircle } from 'lucide-react';

export default function DiscoveryPage() {
  const [rfps, setRfps] = useState<RFP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const response = await fetch('/api/rfps');
      const data = await response.json();
      setRfps(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const sources = [
    { name: 'PSU Energy Portal', url: 'https://psu.energy.gov.in', count: rfps.filter(r => r.origin_url.includes('psu')).length, status: 'active' },
    { name: 'Metro Rail Corporation', url: 'https://metro.gov.in', count: rfps.filter(r => r.origin_url.includes('metro')).length, status: 'active' },
    { name: 'FMCG Private Sector', url: 'https://fmcg.example.com', count: rfps.filter(r => r.origin_url.includes('fmcg')).length, status: 'active' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-48 flex-1">
        <Header />
        <main className="mt-16 p-8 bg-gray-50 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">RFP Discovery</h1>
            <p className="text-gray-600">Automated monitoring and discovery of RFPs from configured sources</p>
          </div>

          {/* Sources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Monitored Sources</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
                <Search size={16} />
                Scan Now
              </button>
            </div>

            <div className="space-y-4">
              {sources.map((source, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Globe className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{source.name}</p>
                      <p className="text-sm text-gray-500">{source.url}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{source.count}</p>
                      <p className="text-sm text-gray-500">RFPs found</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle size={14} />
                      {source.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Discoveries */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Discoveries</h2>
              <span className="text-sm text-gray-500">{rfps.length} total RFPs</span>
            </div>

            {loading ? (
              <div className="text-center py-8 text-gray-600">Loading discoveries...</div>
            ) : (
              <div className="space-y-3">
                {rfps.map((rfp) => (
                  <div key={rfp.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <Download className="text-blue-600" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">{rfp.title}</p>
                        <p className="text-sm text-gray-500">{rfp.id} • Due: {rfp.due_date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {rfp.type}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Import
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
