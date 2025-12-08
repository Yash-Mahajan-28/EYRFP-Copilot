import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'rfp_sources.html');
    const html = readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);
    
    // Extract JSON data
    const jsonScript = $('#rfp-json').html();
    if (!jsonScript) {
      return NextResponse.json({ error: 'No JSON data found' }, { status: 404 });
    }
    
    const rfpData = JSON.parse(jsonScript);
    const today = new Date();
    
    const rfps: any[] = [];
    
    // Process each RFP
    Object.keys(rfpData).forEach((id) => {
      const data = rfpData[id];
      const offset = data.due_date_offset_days || 0;
      const dueDate = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
      
      // Get additional metadata from HTML
      const card = $(`#${id}`);
      const issuingEntity = card.find('.meta').first().text().replace('Issuing Entity: ', '');
      const executor = card.find('.meta').eq(1).text().replace('Executor: ', '');
      const badge = card.find('.badge').text();
      
      rfps.push({
        id,
        title: data.title,
        due_date: dueDate.toISOString().split('T')[0],
        due_date_offset_days: offset,
        scope: data.scope,
        tests: data.tests,
        origin_url: data.origin_url,
        issuing_entity: issuingEntity,
        executor: executor,
        type: badge,
      });
    });
    
    return NextResponse.json(rfps);
  } catch (error) {
    console.error('Error parsing RFP source:', error);
    return NextResponse.json({ error: 'Failed to parse RFPs' }, { status: 500 });
  }
}
