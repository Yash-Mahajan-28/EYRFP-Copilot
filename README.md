# RFP-Copilot - AI-Powered RFP Response Automation

Enterprise AI Platform for Industrial Manufacturers

## ✨ Features

### 🤖 AI Agents (4 Agentic AI System)
Based on LangChain architecture, the system includes:

1. **Sales Agent** - Automated RFP discovery across portals with real-time monitoring and intelligent prioritization
2. **Tech Agent** - AI-powered specification matching with transparent accuracy scoring and product recommendation
3. **Pricing Agent** - Automated cost calculation, service pricing, and competitive analysis for data-driven bids
4. **Main Agent** - Workflow orchestration engine that coordinates all agents, processes documents, and manages decision logic

### 📊 Pages Implemented:

1. **Login Page** (`/login`)
   - Email and password authentication
   - Role selection (Sales Lead, Technical Manager, Pricing Manager, System Administrator)
   - Modern, responsive design with black text fields

2. **Dashboard** (`/dashboard`)
   - **Real-time calculated metrics** from RFP source data:
     - RFPs Awaiting Review (dynamically counted)
     - Average Match Accuracy (calculated from specs completeness)
     - Catalog Coverage (percentage of items with complete specs)
     - Manual Overrides (items with special requirements)
   - Specification Matching Queue table with live RFP data
   - Dynamic trend indicators

3. **Analytics** (`/analytics`)
   - Win Rate Trends chart (6-month visualization)
   - RFP Source Effectiveness (calculated from actual sources)
   - Agent Performance Metrics with real percentages

4. **Discovery** (`/discovery`)
   - Automated RFP monitoring from multiple sources
   - Real-time source status indicators
   - Recent discoveries list with import functionality
   - Source-wise RFP count tracking

5. **Catalog** (`/catalog`)
   - Beautiful card-based RFP display
   - Detailed view modal with full specifications
   - Filterable RFP listings from HTML source
   - Interactive cards showing:
     - RFP ID and title
     - Due dates
     - Issuing entity and executor
     - Item counts and test requirements
     - Detailed specifications table

6. **Settings** (`/settings`)
   - AI Agent Configuration dashboard
   - Visual workflow diagram
   - Agent capability listings
   - Configuration and log access for each agent

## 🔧 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **AI/Parsing:** LangChain, Cheerio
- **Data Source:** HTML parsing from `rfp_sources.html`
- **UI Components:** Custom components with modern design

## 🚀 Getting Started

### Installation

```bash
cd rfp-copilot
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will redirect to the login page. After login, you'll be taken to the dashboard.

## 📁 Project Structure

```
rfp-copilot/
├── app/
│   ├── api/
│   │   └── rfps/              # API endpoint for RFP data
│   ├── dashboard/             # Dashboard with calculated metrics
│   ├── analytics/             # Analytics with real data
│   ├── discovery/             # RFP discovery and monitoring
│   ├── catalog/               # Beautiful RFP catalog view
│   ├── settings/              # AI agents configuration
│   ├── login/                 # Login page
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home (redirects to login)
├── components/
│   ├── Sidebar.tsx            # Navigation sidebar (no top nav)
│   └── Header.tsx             # Top header with user actions only
├── lib/
│   ├── rfpParser.ts           # HTML parsing and metrics calculation
│   └── agents.ts              # AI agent definitions and processing
└── public/
    └── rfp_sources.html       # Source RFP data in HTML format
```

## 📊 Data Flow

1. **RFP Source (`rfp_sources.html`)**: Contains 3 RFPs in HTML format with embedded JSON
2. **Parser (`lib/rfpParser.ts`)**: Extracts and processes RFP data using Cheerio
3. **Metrics Calculation**: All metrics are calculated from actual data:
   - RFPs count, items count, match accuracy
   - Catalog coverage, manual overrides
   - Source-wise distribution
4. **Display**: Real-time data shown across all pages

## 🎯 Key Features

### ✅ No Placeholders
- All metrics are calculated from the actual RFP source file
- Dynamic data loading and processing
- Real-time statistics

### ✅ 4 AI Agents
- Sales Agent: Discovery & Qualification
- Tech Agent: Specification Matching
- Pricing Agent: Cost Calculation & Analysis
- Main Agent: Workflow Orchestration

### ✅ Beautiful UI
- Modern gradient cards
- Interactive modals
- Responsive design
- Clean navigation (sidebar only, no top nav bar)

### ✅ Data-Driven
- Parses HTML source with Cheerio
- Calculates metrics on the fly
- Shows real RFP details in catalog
- Dynamic due dates based on current date

## 🔄 How It Works

1. **Login**: Select role and authenticate
2. **Dashboard**: View calculated metrics and RFP queue
3. **Discovery**: Monitor sources and import new RFPs
4. **Catalog**: Browse RFPs in beautiful card layout
5. **Analytics**: See trends and source effectiveness
6. **Settings**: Configure AI agents

## 📝 License

Enterprise AI Platform for Industrial Manufacturers

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
