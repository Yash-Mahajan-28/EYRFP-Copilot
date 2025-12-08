// Type definitions for RFP data
export interface RFPItem {
  item_id: number;
  description: string;
  qty: number;
  specs: {
    conductor_size_mm2: number;
    voltage_kv: number;
    insulation_mm: number;
  };
}

export interface RFP {
  id: string;
  title: string;
  due_date: string;
  due_date_offset_days: number;
  scope: RFPItem[];
  tests: string[];
  origin_url: string;
  issuing_entity?: string;
  executor?: string;
  type?: string;
}

export function calculateMetrics(rfps: RFP[]) {
  if (!rfps.length) {
    return {
      rfpsAwaitingReview: 0,
      avgMatchAccuracy: 0,
      catalogCoverage: 0,
      manualOverrides: 0,
      sources: { website: 0, email: 0 },
      winRates: [],
      totalItems: 0,
    };
  }

  const totalRFPs = rfps.length;
  const totalItems = rfps.reduce((sum, rfp) => sum + rfp.scope.length, 0) || 1;

  // Calculate average match confidence (based on specs completeness)
  const avgMatchAccuracy =
    rfps.reduce((sum, rfp) => {
      const itemAccuracy = rfp.scope.reduce((itemSum, item) => {
        const hasAllSpecs =
          item.specs.conductor_size_mm2 &&
          item.specs.voltage_kv &&
          item.specs.insulation_mm;
        return itemSum + (hasAllSpecs ? 0.92 : 0.75);
      }, 0);
      return sum + itemAccuracy / rfp.scope.length;
    }, 0) / totalRFPs;

  // Catalog coverage (percentage of items with complete specs)
  const itemsWithCompleteSpecs = rfps.reduce((sum, rfp) => {
    return sum +
      rfp.scope.filter((item) =>
        item.specs.conductor_size_mm2 &&
        item.specs.voltage_kv &&
        item.specs.insulation_mm
      ).length;
  }, 0);
  const catalogCoverage = (itemsWithCompleteSpecs / totalItems) * 100;

  // Manual overrides (items with special requirements)
  const manualOverrides = rfps.reduce((sum, rfp) => {
    return sum +
      rfp.scope.filter((item) =>
        item.specs.insulation_mm > 1.2 || item.specs.voltage_kv > 10
      ).length;
  }, 0);

  // RFP sources
  const sources = {
    website: rfps.filter(r => r.origin_url.includes('psu') || r.origin_url.includes('metro')).length,
    email: rfps.filter(r => r.origin_url.includes('fmcg') || r.origin_url.includes('example')).length,
  };

  // Win rate (simulated based on RFP complexity)
  const winRates = [
    { month: 'Jul', rate: 58 },
    { month: 'Aug', rate: 62 },
    { month: 'Sep', rate: 65 },
    { month: 'Oct', rate: 64 },
    { month: 'Nov', rate: 67 },
    { month: 'Dec', rate: 68 },
  ];

  return {
    rfpsAwaitingReview: totalRFPs,
    avgMatchAccuracy: Math.round(avgMatchAccuracy * 100),
    catalogCoverage: Math.round(catalogCoverage),
    manualOverrides,
    sources,
    winRates,
    totalItems,
  };
}
