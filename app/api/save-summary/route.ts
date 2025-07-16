import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseServer'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { url, summary, urduSummary, fullText } = await request.json()

    // Save summary to Supabase
    const { data: supabaseData, error: supabaseError } = await supabaseServer
      .from('summaries')
      .insert([
        {
          url,
          summary,
          urdu_summary: urduSummary,
        }
      ])
      .select()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
      return NextResponse.json({ error: 'Failed to save summary' }, { status: 500 })
    }

    // Save full text to MongoDB
    const client = await clientPromise
    const db = client.db('blog-summariser')
    const result = await db.collection('blog_posts').insertOne({
      url,
      full_text: fullText,
      created_at: new Date()
    })

    return NextResponse.json({ 
      success: true, 
      summaryId: supabaseData?.[0]?.id,
      mongoId: result.insertedId 
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 