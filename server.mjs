import express from 'express';
const app = express();
app.use(express.json());
const UPSTREAM = process.env.UPSTREAM || 'https://api.cloudflare.com/client/v4';

app.get('/health', (_,res) => res.json({ ok:true, service:'cloudflare-workers-api', routes:100 }));

app.get('/accounts', async (req, res) => {
  try {
    const upstream = new URL('/accounts', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts', async (req, res) => {
  try {
    const upstream = new URL('/accounts', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/move', async (req, res) => {
  try {
    const upstream = new URL('/accounts/move', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_identifier/custom_pages', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_identifier/custom_pages/assets', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/assets', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_identifier/custom_pages/assets', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/assets', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_identifier/custom_pages/assets/:asset_name', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/assets/{asset_name}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_identifier/custom_pages/assets/:asset_name', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/assets/{asset_name}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_identifier/custom_pages/assets/:asset_name', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/assets/{asset_name}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_identifier/custom_pages/preview_tokens', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/preview_tokens', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_identifier/custom_pages/:identifier', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/{identifier}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_identifier/custom_pages/:identifier', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_identifier}/custom_pages/{identifier}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/abuse-reports', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/abuse-reports', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/abuse-reports/:report_id/emails', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/abuse-reports/{report_id}/emails', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/abuse-reports/:report_id/mitigations', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/abuse-reports/{report_id}/mitigations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/abuse-reports/:report_id/mitigations/appeal', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/abuse-reports/:report_param', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/abuse-reports/{report_param}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/abuse-reports/:report_param', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/abuse-reports/{report_param}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/ai-controls/mcp/portals', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/portals', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/ai-controls/mcp/portals', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/portals', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/ai-controls/mcp/portals/:id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/portals/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/ai-controls/mcp/portals/:id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/portals/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/ai-controls/mcp/portals/:id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/portals/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/ai-controls/mcp/servers', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/servers', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/ai-controls/mcp/servers', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/servers', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/ai-controls/mcp/servers/:id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/servers/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/ai-controls/mcp/servers/:id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/servers/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/ai-controls/mcp/servers/:id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/servers/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/ai-controls/mcp/servers/:id/sync', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/apps', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/apps', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/apps/ca', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/ca', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/apps/:app_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/apps/:app_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/apps/:app_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/apps/:app_id/ca', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/ca', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/apps/:app_id/ca', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/ca', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/apps/:app_id/ca', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/ca', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/apps/:app_id/policies', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/policies', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/apps/:app_id/policies', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/policies', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/apps/:app_id/policies/:policy_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/apps/:app_id/policies/:policy_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/apps/:app_id/policies/:policy_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/apps/:app_id/policies/:policy_id/make_reusable', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}/make_reusable', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/apps/:app_id/revoke_tokens', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/revoke_tokens', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/apps/:app_id/settings', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/settings', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/accounts/:account_id/access/apps/:app_id/settings', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/settings', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/apps/:app_id/user_policy_checks', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/apps/{app_id}/user_policy_checks', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/authenticator_device_aaguids', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/authenticator_device_aaguids', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/bookmarks', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/bookmarks', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/bookmarks/:bookmark_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/bookmarks/{bookmark_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/bookmarks/:bookmark_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/bookmarks/{bookmark_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/bookmarks/:bookmark_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/bookmarks/{bookmark_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/bookmarks/:bookmark_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/bookmarks/{bookmark_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/certificates', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/certificates', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/certificates', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/certificates', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/certificates/settings', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/certificates/settings', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/certificates/settings', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/certificates/settings', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/certificates/:certificate_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/certificates/{certificate_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/certificates/:certificate_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/certificates/{certificate_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/certificates/:certificate_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/certificates/{certificate_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/custom_pages', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/custom_pages', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/custom_pages', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/custom_pages', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/custom_pages/:custom_page_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/custom_pages/{custom_page_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/custom_pages/:custom_page_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/custom_pages/{custom_page_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/custom_pages/:custom_page_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/custom_pages/{custom_page_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/gateway_ca', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/gateway_ca', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/gateway_ca', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/gateway_ca', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/gateway_ca/:certificate_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/gateway_ca/{certificate_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/groups', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/groups', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/groups', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/groups', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/groups/:group_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/groups/{group_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/groups/:group_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/groups/{group_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/groups/:group_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/groups/{group_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/identity_providers', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/identity_providers', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/identity_providers/:identity_provider_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers/{identity_provider_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/identity_providers/:identity_provider_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers/{identity_provider_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/identity_providers/:identity_provider_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers/{identity_provider_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/identity_providers/:identity_provider_id/saml_certificate', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers/{identity_provider_id}/saml_certificate', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/identity_providers/:identity_provider_id/scim/groups', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/identity_providers/:identity_provider_id/scim/users', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/idp_federation_grants', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/idp_federation_grants', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/idp_federation_grants', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/idp_federation_grants', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/idp_federation_grants/:grant_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/idp_federation_grants/{grant_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/accounts/:account_id/access/idp_federation_grants/:grant_id', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/idp_federation_grants/{grant_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/keys', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/keys', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/keys/rotate', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/keys/rotate', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/logs/access_requests', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/logs/access_requests', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/logs/scim/updates', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/logs/scim/updates', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/organizations', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/organizations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/organizations', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/organizations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/organizations', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/organizations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/accounts/:account_id/access/organizations/doh', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/organizations/doh', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/accounts/:account_id/access/organizations/doh', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/organizations/doh', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/accounts/:account_id/access/organizations/revoke_user', async (req, res) => {
  try {
    const upstream = new URL('/accounts/{account_id}/access/organizations/revoke_user', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'cloudflare-workers-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('cloudflare-workers-api on :' + PORT));
