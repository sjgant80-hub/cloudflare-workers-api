#!/usr/bin/env node
/**
 * cloudflare-workers-api · HTTP proxy for Cloudflare Workers
 * Sovereign estate wrapper for Cloudflare Workers · Serverless
 * Docs: https://developers.cloudflare.com/workers/
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Cloudflare Workers' }));
  res.end(JSON.stringify({ name: 'cloudflare-workers-api', wraps: 'Cloudflare Workers', docs: 'https://developers.cloudflare.com/workers/' }));
}).listen(PORT, () => console.log('cloudflare-workers-api on', PORT));
