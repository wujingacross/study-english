import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
  }

  // Prevent SSRF by allowing only HTTP/HTTPS
  if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    return NextResponse.json({ error: 'Only HTTP/HTTPS URLs are allowed' }, { status: 400 });
  }

  // Prevent requests to local/private network ranges (basic protection)
  const hostname = parsedUrl.hostname;
  const isLocal = hostname === 'localhost' ||
                  hostname === '127.0.0.1' ||
                  hostname.startsWith('10.') ||
                  hostname.startsWith('192.168.') ||
                  /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname) ||
                  hostname === '[::1]';

  if (isLocal) {
     return NextResponse.json({ error: 'Requests to local networks are forbidden' }, { status: 403 });
  }

  try {
    const response = await fetch(parsedUrl.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Basic extraction
    const title = $('title').text() || $('h1').first().text();
    const paragraphs: string[] = [];

    $('p').each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 0) {
        paragraphs.push(text);
      }
    });

    // Attempt to extract publication date
    const publishDate = $('meta[property="article:published_time"]').attr('content') ||
                        $('meta[name="pubdate"]').attr('content') ||
                        $('time').attr('datetime');

    const result = {
      title,
      paragraphs,
      publishDate,
      sourceUrl: url
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error scraping:', error);
    return NextResponse.json({ error: 'Failed to scrape the provided URL' }, { status: 500 });
  }
}
