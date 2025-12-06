import { NextRequest, NextResponse } from 'next/server';
import { getAIResponse, generateFallbackResponse } from '@/utils/aiKnowledgeBase';

/**
 * AI Query API Route
 * 
 * This endpoint provides AI-powered responses for terminal queries.
 * Uses browser-based AI and local knowledge base for fast, private responses.
 */

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    // Validate input
    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Invalid query parameter' },
        { status: 400 }
      );
    }

    // Sanitize and limit query length
    const sanitizedQuery = query.trim().substring(0, 200);

    if (sanitizedQuery.length === 0) {
      return NextResponse.json(
        { error: 'Query cannot be empty' },
        { status: 400 }
      );
    }

    // Get AI response from knowledge base
    let response = getAIResponse(sanitizedQuery);

    // If no match found, generate fallback response
    if (!response) {
      response = generateFallbackResponse(sanitizedQuery);
    }

    return NextResponse.json({
      query: sanitizedQuery,
      response,
      source: 'browser_ai',
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('AI Query API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
