'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-48 flex-1">
        <Header />
        <main className="mt-16 p-8 bg-gray-50 min-h-screen">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">About RFP-Copilot</h1>
            <p className="text-lg text-gray-600">Enterprise-grade Agentic AI RFP Automation Platform</p>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Contributors Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Project Contributors</h2>
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="font-semibold text-lg">Vedant Mhatre</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="font-semibold text-lg">Aditya Upasani</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="font-semibold text-lg">Yash Mahajan</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8">
              
              {/* Executive Summary */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  A leading industrial manufacturer depends heavily on B2B RFPs and tenders for growth. The current RFP response process is manual, slow, and error-prone, creating missed opportunities and reduced win rates. Our solution, <span className="font-semibold text-blue-600">RFP-Copilot</span>, is an enterprise-grade, multi-agent Agentic AI platform that automates the end-to-end RFP response workflow: timely RFP discovery, contextual technical SKU matching, and pricing estimation — delivering faster, consistent, and scalable responses while preserving human-in-the-loop controls where required.
                </p>
              </section>

              {/* Problem Statement */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Problem Statement</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Business Goals</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Increase the number of qualified RFP responses per year</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Improve timeliness of responses to maximize win probability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Reduce cycle time between RFP discovery and response submission</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">Observed Bottlenecks</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Late detection of RFPs (scattered sources: websites, emails)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Manual, time-consuming SKU-spec matching requiring domain expertise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Sequential handoffs between Sales → Technical → Pricing teams</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Pricing delays reduce win probability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">Measured Impacts</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-4xl font-bold text-yellow-700">90%</p>
                      <p className="text-sm text-gray-700 mt-2">of wins correlate with timely action</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-yellow-700">60%</p>
                      <p className="text-sm text-gray-700 mt-2">of wins correlate with adequate technical team lead time</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-yellow-700">#1</p>
                      <p className="text-sm text-gray-700 mt-2">Technical SKU matching is the largest time consumer</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Goal & Deliverable */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Goal & Desired Deliverable</h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <p className="text-gray-700 leading-relaxed mb-4">Design and deliver an Agentic AI system where:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span><strong>Sales Agent</strong> discovers RFPs (scan URLs, email feeds) and summarizes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span><strong>Main Orchestrator</strong> produces role-specific summaries and coordinates agents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span><strong>Technical Agent</strong> produces top-3 SKU recommendations per RFP product with spec-match % and comparison tables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span><strong>Pricing Agent</strong> assigns unit and services pricing and returns consolidated cost breakdown</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-800 font-semibold">Key Deliverable:</p>
                    <p className="text-gray-700 mt-2">Demonstrable end-to-end journey: RFP identification → technical mapping → pricing → consolidated response package for Sales submission</p>
                  </div>
                </div>
              </section>

              {/* Solution Architecture */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Our Proposed Solution</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-md">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">🎯 Main Orchestrator Agent</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Central controller that creates role-contextual prompts, aggregates results, enforces workflows, logs provenance and decisions, and presents consolidated RFP response.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-md">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">📊 Sales Agent</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Scheduled crawler + RSS/URL/email ingestion that performs RFP discovery, relevance scoring (next 3 months), and context summarization.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-300 shadow-md">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">🔧 Technical Agent</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Semantic and rule-based SKU matcher that converts RFP spec requirements, searches SKU datasheet corpus, computes spec-match %, returns top-3 per product with comparison tables.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-2 border-orange-300 shadow-md">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">💰 Pricing Agent</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Receives test/acceptance requirements and SKU list, applies synthetic pricing tables, computes unit prices, test costs, markup/discount rules, and consolidates total costs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Tech Stack */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Technology Stack</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Core Runtime</h3>
                    <p className="text-sm text-gray-700">Python 3.11, Node.js</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">AI & NLP</h3>
                    <p className="text-sm text-gray-700">OpenAI GPT-4o, Google Gemini, LangChain</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Vector Store</h3>
                    <p className="text-sm text-gray-700">Pinecone, Weaviate, Milvus</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
                    <p className="text-sm text-gray-700">PostgreSQL, Elasticsearch</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">API Framework</h3>
                    <p className="text-sm text-gray-700">FastAPI, Celery, Redis</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                    <p className="text-sm text-gray-700">React, TypeScript, Next.js</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Infrastructure</h3>
                    <p className="text-sm text-gray-700">Docker, Kubernetes, GitHub Actions</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Observability</h3>
                    <p className="text-sm text-gray-700">Prometheus, Grafana, ELK Stack</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                    <p className="text-sm text-gray-700">HashiCorp Vault, TLS, VPC</p>
                  </div>
                </div>
              </section>

              {/* Unique Selling Propositions */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Unique Selling Propositions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'End-to-End Orchestration', desc: 'Combines RFP discovery, technical mapping, and pricing into a single workflow' },
                    { title: 'Role-Contextual Summarization', desc: 'Same RFP distilled differently for Sales, Technical, and Pricing agents' },
                    { title: 'Explainable SKU Matching', desc: 'Transparent spec-match metrics and per-parameter comparisons' },
                    { title: 'Rapid Time-to-Response', desc: 'Parallelized agents reduce wall-clock time significantly' },
                    { title: 'Human-in-Loop Controls', desc: 'Approvals, edits, and MTO triggers maintain governance' },
                    { title: 'Low-Touch Integration', desc: 'Modular connectors for crawling, email, and internal ERPs' },
                    { title: 'Configurable Pricing Logic', desc: 'Business rules for discounts, taxes, and compliance' },
                    { title: 'Hybrid Deployment', desc: 'Cloud SaaS or on-premise/private cloud options' },
                    { title: 'Reusable Product Catalog', desc: 'Once ingested, boosts accuracy across multiple RFPs' },
                  ].map((usp, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">{usp.title}</h3>
                      <p className="text-sm text-gray-700">{usp.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Business Model */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Business Model</h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Revenue Streams</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">💼 SaaS Subscription</h4>
                      <p className="text-sm text-gray-700">Tiered plans based on number of monitored RFP sources, agent concurrency, and storage</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">🔧 Professional Services</h4>
                      <p className="text-sm text-gray-700">Initial onboarding, custom integrations, training, and SKU catalog setup</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">📈 Per-RFP Processing</h4>
                      <p className="text-sm text-gray-700">Metered pricing option for high-volume customers</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">⭐ Advanced Features</h4>
                      <p className="text-sm text-gray-700">On-premise deployment, premium models, priority support & SLAs</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Value Proposition & ROI</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>20-50% increase</strong> in qualified RFP responses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>5-15% improvement</strong> in win rates through timely submissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>Significant labor cost savings</strong> through automated baseline processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>Break-even in 3-9 months</strong> depending on volume and win uplift</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* KPIs and Success Metrics */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">KPIs and Success Metrics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Operational Metrics</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Time from RFP publication to Sales Agent notification</li>
                      <li>• Time from discovery to full consolidated response</li>
                      <li>• Number of RFPs processed per month</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Business Metrics</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Change in number of RFP responses per quarter</li>
                      <li>• Win-rate change on target RFP categories</li>
                      <li>• Average price accuracy vs. historical close price</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Quality Metrics</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Spec-match accuracy vs. human technical reviewers</li>
                      <li>• Human override rate on agent recommendations</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Reliability Metrics</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• System uptime and pipeline job success rate</li>
                      <li>• Mean time to recover (MTTR)</li>
                      <li>• Cost per processed RFP</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Security & Compliance */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Security, Data Governance & Compliance</h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-red-900 mb-2">🔒 Data Protection</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Per-customer tenant isolation</li>
                        <li>• Encrypted storage for documents and logs</li>
                        <li>• PII and IP protection</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-900 mb-2">👥 Access Controls</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• RBAC for Sales/Technical/Pricing</li>
                        <li>• Immutable audit logs</li>
                        <li>• Regulatory compliance ready</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Risks & Mitigations */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">Risks & Mitigations</h2>
                <div className="space-y-4">
                  {[
                    { risk: 'Incorrect spec matching could lead to non-compliant bids', mitigation: 'Conservative threshold; mandatory human approval for high-risk/low-confidence matches; clear explanation and mismatch highlights' },
                    { risk: 'RFP source website structure changes break crawlers', mitigation: 'Site-specific extraction rules, fallbacks to email ingestion, scheduled monitoring and automated test suites' },
                    { risk: 'Data privacy with third-party LLM APIs', mitigation: 'Offer private deployment or local models; use encryption and contractual DPA' },
                    { risk: 'Customer reluctance to adopt automation', mitigation: 'Phased rollout with human-in-loop, clear metrics showing time saved and improved win rate on pilot' },
                  ].map((item, index) => (
                    <div key={index} className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                      <p className="font-semibold text-yellow-900 mb-2">⚠️ Risk: {item.risk}</p>
                      <p className="text-sm text-gray-700"><strong>Mitigation:</strong> {item.mitigation}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Closing Statement */}
              <section className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
                <h2 className="text-3xl font-bold mb-4">Closing Statement</h2>
                <p className="text-lg leading-relaxed mb-6">
                  We propose <strong>RFP-Copilot</strong> to incrementally automate the client's RFP response pipeline, delivering measurable improvements in response timeliness, quality of technical matches, and pricing consistency — while keeping human reviewers in charge of final decisions. The MVP is intentionally scoped to demonstrate value quickly, and the architecture is designed to scale and comply with enterprise governance needs.
                </p>
                <div className="border-t border-white/30 pt-6">
                  <p className="text-sm opacity-90">Prepared by:</p>
                  <p className="font-semibold text-lg mt-2">Vedant Mhatre, Aditya Upasani, Yash Mahajan</p>
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
