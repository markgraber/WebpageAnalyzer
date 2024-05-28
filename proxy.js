const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

app.get('/fetch-url', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }

  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch the URL content');
    }
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
