'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Bot, Play, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function TestAgentsPage() {
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<any>(null);

  const testRFP = {
    id: 'RFP-PSU-RE-2025-001',
    title: 'Rural Electrification LV Wiring (PSU)',
  };

  const handleTest = async () => {
    setTesting(true);
    setResults(null);

    try {
      const response = await fetch('/api/process-rfp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rfpId: testRFP.id }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Processing failed');
      }

      setResults(data);
    } catch (error) {
      setResults({
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-48 flex-1">
        <Header />
        <main className="mt-16 p-8 bg-gray-50 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Test AI Agents</h1>
            <p className="text-gray-600">Test LangChain agents with a sample RFP</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-4xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="text-blue-600" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">LangChain AI Agent Test</h2>
              <p className="text-gray-600">
                This will process <strong>{testRFP.title}</strong> through all 4 AI agents
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Processing Pipeline:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Sales Agent: Qualification & Prioritization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Tech Agent: Specification Matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Pricing Agent: Cost Calculation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <span className="text-gray-700">Main Agent: Final Decision & Orchestration</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleTest}
              disabled={testing}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-colors"
            >
              {testing ? (
                <>
                  <Clock className="animate-spin" size={24} />
                  Processing with AI Agents...
                </>
              ) : (
                <>
                  <Play size={24} />
                  Run AI Agent Test
                </>
              )}
            </button>

            {results && (
              <div className="mt-8">
                {results.error ? (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <XCircle className="text-red-600" size={24} />
                      <h3 className="text-lg font-semibold text-red-900">Error</h3>
                    </div>
                    <p className="text-red-700">{results.error}</p>
                    {results.configured === false && (
                      <p className="text-sm text-red-600 mt-2">
                        Please configure your OpenAI API key in <code className="bg-red-100 px-1 rounded">.env.local</code>
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="text-green-600" size={24} />
                      <h3 className="text-lg font-semibold text-green-900">Processing Complete!</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-black">Processing Time</p>
                        <p className="text-xl font-bold text-black">{(results.processingTime / 1000).toFixed(2)}s</p>
                      </div>

                      <div className="border-t border-green-200 pt-4">
                        <p className="text-sm text-black mb-2">Final Decision</p>
                        <div className="flex items-center gap-3">
                          <span className={`px-4 py-2 rounded-full font-semibold ${
                            results.result.decision === 'proceed' ? 'bg-green-100 text-black' :
                            results.result.decision === 'review' ? 'bg-yellow-100 text-black' :
                            'bg-red-100 text-black'
                          }`}>
                            {results.result.decision.toUpperCase()}
                          </span>
                          <span className="text-black">Confidence: <strong>{results.result.confidence}%</strong></span>
                        </div>
                      </div>

                      {results.result.executiveSummary && (
                        <div className="border-t border-green-200 pt-4">
                          <p className="text-sm text-black mb-2">Executive Summary</p>
                          <p className="text-black">{results.result.executiveSummary}</p>
                        </div>
                      )}

                      {results.result.salesResult && (
                        <div className="border-t border-green-200 pt-4">
                          <p className="text-sm font-semibold text-black mb-2">Sales Agent Results</p>
                          <div className="text-sm text-black space-y-1">
                            <p>Priority: <strong>{results.result.salesResult.priority}</strong></p>
                            <p>Win Probability: <strong>{results.result.salesResult.winProbability}%</strong></p>
                            <p className="text-black">{results.result.salesResult.reasoning}</p>
                          </div>
                        </div>
                      )}

                      {results.result.techResult && (
                        <div className="border-t border-green-200 pt-4">
                          <p className="text-sm font-semibold text-black mb-2">Tech Agent Results</p>
                          <div className="text-sm text-black space-y-1">
                            <p>Match Confidence: <strong>{results.result.techResult.matchConfidence}%</strong></p>
                            <p>Matched Items: <strong>{results.result.techResult.matchedItems}/{results.result.techResult.totalItems}</strong></p>
                          </div>
                        </div>
                      )}

                      {results.result.pricingResult && (
                        <div className="border-t border-green-200 pt-4">
                          <p className="text-sm font-semibold text-black mb-2">Pricing Agent Results</p>
                          <div className="text-sm text-black space-y-1">
                            <p>Material Cost: <strong>₹{results.result.pricingResult.totalMaterialCost?.toLocaleString()}</strong></p>
                            <p>Final Bid Price: <strong>₹{results.result.pricingResult.finalBidPrice?.toLocaleString()}</strong></p>
                            <p>Margin: <strong>{results.result.pricingResult.recommendedMargin}%</strong></p>
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => console.log('Full Results:', results)}
                        className="w-full mt-4 border border-green-300 text-black py-2 rounded-lg text-sm font-medium hover:bg-green-50"
                      >
                        View Full Results in Console
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
