'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { type RFP } from '@/lib/rfpParser';
import { Package, Calendar, Building2, FileText } from 'lucide-react';

export default function CatalogPage() {
  const [rfps, setRfps] = useState<RFP[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRFP, setSelectedRFP] = useState<RFP | null>(null);
  const [processing, setProcessing] = useState(false);
  const [processResult, setProcessResult] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch('/api/rfps');
      const data = await response.json();
      setRfps(data);
      setLoading(false);
    }
    loadData();
  }, []);

    const handleProcessRFP = async (rfpId: string) => {
      setProcessing(true);
      setProcessResult(null);
    
      try {
        const response = await fetch('/api/process-rfp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rfpId }),
        });
      
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.error || 'Failed to process RFP');
        }
      
        setProcessResult(data);
        alert(`RFP Processed!\nDecision: ${data.result.decision}\nConfidence: ${data.result.confidence}%\n\n${data.result.executiveSummary || ''}`);
      } catch (error) {
        console.error('Error:', error);
        alert(`Error: ${error instanceof Error ? error.message : 'Failed to process RFP'}`);
      } finally {
        setProcessing(false);
      }
    };
  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="ml-48 flex-1">
          <Header />
          <main className="mt-16 p-8 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-gray-600">Loading catalog...</div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-48 flex-1">
        <Header />
        <main className="mt-16 p-8 bg-gray-50 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">RFP Catalog</h1>
            <p className="text-gray-600">Browse and manage available RFPs from discovered sources</p>
          </div>

          {/* RFP Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {rfps.map((rfp) => (
              <div
                key={rfp.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedRFP(rfp)}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{rfp.id}</h3>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                      {rfp.type}
                    </span>
                  </div>
                  <p className="text-sm text-blue-100">{rfp.title}</p>
                </div>

                {/* Body */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    <span className="font-medium">Due:</span>
                    <span className="ml-2">{rfp.due_date}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Building2 size={16} className="mr-2 text-gray-400" />
                    <span className="font-medium">Entity:</span>
                    <span className="ml-2 truncate">{rfp.issuing_entity}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Package size={16} className="mr-2 text-gray-400" />
                    <span className="font-medium">Items:</span>
                    <span className="ml-2">{rfp.scope.length} line items</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <FileText size={16} className="mr-2 text-gray-400" />
                    <span className="font-medium">Tests:</span>
                    <span className="ml-2">{rfp.tests.length} required</span>
                  </div>

                  {/* Scope Summary */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-500 mb-2">Specifications:</p>
                    <div className="space-y-1">
                      {rfp.scope.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="text-xs text-gray-600 truncate">
                          • {item.description}
                        </div>
                      ))}
                      {rfp.scope.length > 2 && (
                        <div className="text-xs text-blue-600 font-medium">
                          + {rfp.scope.length - 2} more items
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for detailed view */}
          {selectedRFP && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedRFP(null)}
            >
              <div
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto text-black"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-2">
                        {selectedRFP.id}
                      </h2>
                      <p className="text-black">{selectedRFP.title}</p>
                    </div>
                    <button
                      onClick={() => setSelectedRFP(null)}
                      className="text-black hover:text-black"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-black">Due Date</p>
                        <p className="text-black">{selectedRFP.due_date}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black">Type</p>
                        <p className="text-black">{selectedRFP.type}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black">Issuing Entity</p>
                        <p className="text-black">{selectedRFP.issuing_entity}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black">Executor</p>
                        <p className="text-black">{selectedRFP.executor}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-3">Scope of Supply</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left font-medium text-black">Item</th>
                            <th className="px-4 py-2 text-left font-medium text-black">Description</th>
                            <th className="px-4 py-2 text-left font-medium text-black">Qty</th>
                            <th className="px-4 py-2 text-left font-medium text-black">Specs</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {selectedRFP.scope.map((item) => (
                            <tr key={item.item_id}>
                              <td className="px-4 py-3 text-black">{item.item_id}</td>
                              <td className="px-4 py-3 text-black">{item.description}</td>
                              <td className="px-4 py-3 text-black">{item.qty}</td>
                              <td className="px-4 py-3 text-black">
                                <div className="text-xs">
                                  <div className="text-black">{item.specs.conductor_size_mm2}mm² / {item.specs.voltage_kv}kV</div>
                                  <div className="text-black">Insulation: {item.specs.insulation_mm}mm</div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-2">Required Tests</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRFP.tests.map((test, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-black px-3 py-1 rounded-full text-sm"
                        >
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                      <button 
                        onClick={() => handleProcessRFP(selectedRFP.id)}
                        disabled={processing}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? '🤖 AI Processing...' : '🤖 Process with AI Agents'}
                    </button>
                    <a
                      href={selectedRFP.origin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 text-center"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
