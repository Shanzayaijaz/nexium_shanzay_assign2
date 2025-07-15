import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ success: false, error: 'No text provided' }, { status: 400 });
    }

    const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;

    const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: text }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ success: false, error }, { status: response.status });
    }

    const data = await response.json();
    const summary = Array.isArray(data) && data[0]?.summary_text ? data[0].summary_text : (data.summary_text || '');
    return NextResponse.json({ success: true, summary });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() || 'Unknown error' }, { status: 500 });
  }
}
