// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';

const API_URL = 'https://central.adverts247.xyz/api/v1/driver/auth/signup';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
  

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body),
    });



    // Get the raw text first
    const responseText = await response.text();


    // Try to parse JSON only if there's content
    let data;
    try {
      data = responseText ? JSON.parse(responseText) : null;
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { 
          message: 'Invalid response from server',
          error: parseError instanceof Error ? parseError.message : 'JSON parse error',
          responseText 
        },
        { status: 500 }
      );
    }

    if (!response.ok) {
      console.error('API error response:', data);
      return NextResponse.json(
        data || { message: `Server error: ${response.status}` },
        { status: response.status }
      );
    }

    if (!data) {
      console.error('Empty response from API');
      return NextResponse.json(
        { message: 'Empty response from server' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { 
        message: 'Failed to process signup',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}