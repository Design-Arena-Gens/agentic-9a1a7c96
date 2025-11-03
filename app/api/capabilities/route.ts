import { NextResponse } from 'next/server';
import {
  capabilityHighlights,
  differentiators,
  operationalInsights,
  servicePlays,
  toolchain,
  workflowStages
} from '@/lib/capabilities';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    capabilityHighlights,
    servicePlays,
    workflowStages,
    operationalInsights,
    toolchain,
    differentiators
  });
}
